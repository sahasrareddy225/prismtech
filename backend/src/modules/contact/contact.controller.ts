import { Request, Response } from 'express';
import { prisma } from '../../config/database';
import { ApiResponse } from '../../utils/ApiResponse';
import { asyncHandler } from '../../utils/asyncHandler';

// POST /api/v1/contact — public
export const submitContact = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, subject, message } = req.body;
  const submission = await prisma.contactSubmission.create({
    data: { name, email, subject, message },
  });
  // TODO: Send notification email to organizers
  return ApiResponse.created(res, { id: submission.id }, 'Message sent! We will get back to you soon.');
});

// GET /api/v1/contact — admin
export const getContactSubmissions = asyncHandler(async (req: Request, res: Response) => {
  const submissions = await prisma.contactSubmission.findMany({
    orderBy: { createdAt: 'desc' },
  });
  return ApiResponse.success(res, submissions);
});

// PATCH /api/v1/contact/:id/resolve — admin
export const resolveContact = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const submission = await prisma.contactSubmission.update({
    where: { id: Number(id) },
    data: { isResolved: true },
  });
  return ApiResponse.success(res, submission, 'Marked as resolved');
});
