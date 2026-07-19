import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../utils/ApiError';
import { ApiResponse } from '../utils/ApiResponse';
import { Prisma } from '@prisma/client';

export const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  console.error(`[ERROR] ${req.method} ${req.path}:`, err.message);

  // Known API errors
  if (err instanceof ApiError) {
    return ApiResponse.error(res, err.statusCode, err.message, err.code, err.field);
  }

  // Prisma known request errors
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === 'P2002') {
      const fields = (err.meta?.target as string[])?.join(', ') || 'field';
      return ApiResponse.error(res, 409, `${fields} already exists`, 'CONFLICT', fields);
    }
    if (err.code === 'P2025') {
      return ApiResponse.error(res, 404, 'Record not found', 'NOT_FOUND');
    }
    if (err.code === 'P2003') {
      return ApiResponse.error(res, 400, 'Related record not found', 'FOREIGN_KEY_CONSTRAINT');
    }
  }

  // Prisma validation errors
  if (err instanceof Prisma.PrismaClientValidationError) {
    return ApiResponse.error(res, 400, 'Invalid data provided', 'VALIDATION_ERROR');
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    return ApiResponse.error(res, 401, 'Invalid token', 'INVALID_TOKEN');
  }
  if (err.name === 'TokenExpiredError') {
    return ApiResponse.error(res, 401, 'Token expired', 'TOKEN_EXPIRED');
  }

  // Unhandled errors (sanitize in production)
  const message =
    process.env.NODE_ENV === 'production' ? 'Internal server error' : err.message;

  return ApiResponse.error(res, 500, message, 'INTERNAL_SERVER_ERROR');
};
