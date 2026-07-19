import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { prisma } from '../../config/database';
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from '../../config/jwt';
import { ApiResponse } from '../../utils/ApiResponse';
import { ApiError } from '../../utils/ApiError';
import { asyncHandler } from '../../utils/asyncHandler';
import { AuthRequest } from '../../middleware/auth.middleware';
import crypto from 'crypto';

const REFRESH_TOKEN_COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict' as const,
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
};

export const register = asyncHandler(async (req: Request, res: Response) => {
  const { email, password, name, college, branch, yearOfStudy, phone } = req.body;

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    throw ApiError.conflict('An account with this email already exists', 'email');
  }

  const passwordHash = await bcrypt.hash(password, 12);
  const user = await prisma.user.create({
    data: { email, passwordHash, name, college, branch, yearOfStudy, phone },
    select: { id: true, email: true, name: true, role: true, emailVerified: true },
  });

  // Create email verification token
  const verificationToken = crypto.randomBytes(32).toString('hex');
  await prisma.emailVerificationToken.create({
    data: {
      token: verificationToken,
      email,
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24h
    },
  });

  // TODO: Send verification email
  // await emailService.sendVerificationEmail(email, verificationToken);

  return ApiResponse.created(res, user, 'Account created. Please verify your email.');
});

export const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !user.isActive) {
    throw ApiError.unauthorized('Invalid email or password');
  }

  const isValid = await bcrypt.compare(password, user.passwordHash);
  if (!isValid) {
    throw ApiError.unauthorized('Invalid email or password');
  }

  if (!user.emailVerified) {
    throw ApiError.unauthorized('Please verify your email before logging in');
  }

  const payload = { userId: user.id, role: user.role, email: user.email };
  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken(payload);

  // Store refresh token in DB
  await prisma.refreshToken.create({
    data: {
      token: refreshToken,
      userId: user.id,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
  });

  res.cookie('refreshToken', refreshToken, REFRESH_TOKEN_COOKIE_OPTIONS);

  return ApiResponse.success(res, {
    accessToken,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      profilePhotoUrl: user.profilePhotoUrl,
    },
  }, 'Login successful');
});

export const logout = asyncHandler(async (req: Request, res: Response) => {
  const refreshToken = req.cookies?.refreshToken;
  if (refreshToken) {
    await prisma.refreshToken.deleteMany({ where: { token: refreshToken } });
  }
  res.clearCookie('refreshToken');
  return ApiResponse.success(res, null, 'Logged out successfully');
});

export const refresh = asyncHandler(async (req: Request, res: Response) => {
  const refreshToken = req.cookies?.refreshToken;
  if (!refreshToken) {
    throw ApiError.unauthorized('No refresh token');
  }

  const payload = verifyRefreshToken(refreshToken);

  const stored = await prisma.refreshToken.findUnique({ where: { token: refreshToken } });
  if (!stored || stored.expiresAt < new Date()) {
    throw ApiError.unauthorized('Refresh token expired or invalid');
  }

  const user = await prisma.user.findUnique({ where: { id: payload.userId } });
  if (!user || !user.isActive) {
    throw ApiError.unauthorized('User not found');
  }

  const newAccessToken = generateAccessToken({
    userId: user.id,
    role: user.role,
    email: user.email,
  });

  return ApiResponse.success(res, { accessToken: newAccessToken }, 'Token refreshed');
});

export const verifyEmail = asyncHandler(async (req: Request, res: Response) => {
  const { token } = req.params;

  const record = await prisma.emailVerificationToken.findUnique({ where: { token } });
  if (!record || record.used || record.expiresAt < new Date()) {
    throw ApiError.badRequest('Invalid or expired verification link');
  }

  await prisma.user.update({
    where: { email: record.email },
    data: { emailVerified: true },
  });

  await prisma.emailVerificationToken.update({
    where: { token },
    data: { used: true },
  });

  return ApiResponse.success(res, null, 'Email verified successfully');
});

export const forgotPassword = asyncHandler(async (req: Request, res: Response) => {
  const { email } = req.body;

  // Generic response to prevent email enumeration
  const user = await prisma.user.findUnique({ where: { email } });
  if (user) {
    const resetToken = crypto.randomBytes(32).toString('hex');
    await prisma.passwordResetToken.create({
      data: {
        token: resetToken,
        email,
        expiresAt: new Date(Date.now() + 60 * 60 * 1000), // 1h
      },
    });
    // TODO: await emailService.sendPasswordResetEmail(email, resetToken);
  }

  return ApiResponse.success(res, null, 'If that email is registered, you will receive a reset link.');
});

export const resetPassword = asyncHandler(async (req: Request, res: Response) => {
  const { token, password } = req.body;

  const record = await prisma.passwordResetToken.findUnique({ where: { token } });
  if (!record || record.used || record.expiresAt < new Date()) {
    throw ApiError.badRequest('Invalid or expired reset link');
  }

  const passwordHash = await bcrypt.hash(password, 12);
  await prisma.user.update({
    where: { email: record.email },
    data: { passwordHash },
  });

  await prisma.passwordResetToken.update({ where: { token }, data: { used: true } });
  // Invalidate all refresh tokens for security
  await prisma.refreshToken.deleteMany({ where: { user: { email: record.email } } });

  return ApiResponse.success(res, null, 'Password reset successfully');
});

export const getMe = asyncHandler(async (req: AuthRequest, res: Response) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user!.userId },
    select: {
      id: true, email: true, name: true, role: true, bio: true,
      profilePhotoUrl: true, instagramHandle: true, linkedinUrl: true,
      githubUrl: true, college: true, branch: true, yearOfStudy: true,
      phone: true, emailVerified: true, createdAt: true,
    },
  });
  if (!user) throw ApiError.notFound('User not found');
  return ApiResponse.success(res, user);
});
