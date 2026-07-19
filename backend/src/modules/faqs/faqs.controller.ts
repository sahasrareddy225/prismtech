import { Request, Response } from 'express';
import { prisma } from '../../config/database';
import { ApiResponse, paginate } from '../../utils/ApiResponse';
import { asyncHandler } from '../../utils/asyncHandler';
import { AuthRequest } from '../../middleware/auth.middleware';
import { ApiError } from '../../utils/ApiError';

// GET /api/v1/faqs — public
export const getFAQs = asyncHandler(async (req: Request, res: Response) => {
  const { category } = req.query;
  const faqs = await prisma.fAQ.findMany({
    where: {
      isActive: true,
      ...(category ? { category: category as any } : {}),
    },
    orderBy: [{ category: 'asc' }, { displayOrder: 'asc' }],
  });
  return ApiResponse.success(res, faqs);
});

// POST /api/v1/faqs — admin
export const createFAQ = asyncHandler(async (req: AuthRequest, res: Response) => {
  const { question, answer, category, displayOrder } = req.body;
  const faq = await prisma.fAQ.create({ data: { question, answer, category, displayOrder } });
  return ApiResponse.created(res, faq);
});

// PATCH /api/v1/faqs/:id — admin
export const updateFAQ = asyncHandler(async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const faq = await prisma.fAQ.update({ where: { id: Number(id) }, data: req.body });
  return ApiResponse.success(res, faq, 'FAQ updated');
});

// DELETE /api/v1/faqs/:id — admin
export const deleteFAQ = asyncHandler(async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  await prisma.fAQ.delete({ where: { id: Number(id) } });
  return ApiResponse.success(res, null, 'FAQ deleted');
});
