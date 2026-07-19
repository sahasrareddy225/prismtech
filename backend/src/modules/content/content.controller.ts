import { Request, Response } from 'express';
import { prisma } from '../../config/database';
import { ApiResponse } from '../../utils/ApiResponse';
import { asyncHandler } from '../../utils/asyncHandler';
import { AuthRequest } from '../../middleware/auth.middleware';
import { ApiError } from '../../utils/ApiError';

// GET /api/v1/content — public
export const getAllContent = asyncHandler(async (req: Request, res: Response) => {
  const blocks = await prisma.contentBlock.findMany({
    select: { key: true, value: true, type: true },
  });
  // Convert to key-value object for easy consumption
  const content = blocks.reduce((acc, block) => {
    acc[block.key] = block.value;
    return acc;
  }, {} as Record<string, string>);
  return ApiResponse.success(res, content);
});

// GET /api/v1/content/:key — public
export const getContentByKey = asyncHandler(async (req: Request, res: Response) => {
  const { key } = req.params;
  const block = await prisma.contentBlock.findUnique({ where: { key } });
  if (!block) throw ApiError.notFound(`Content block '${key}' not found`);
  return ApiResponse.success(res, block);
});

// PATCH /api/v1/content/:key — admin only
export const updateContent = asyncHandler(async (req: AuthRequest, res: Response) => {
  const { key } = req.params;
  const { value } = req.body;
  const block = await prisma.contentBlock.upsert({
    where: { key },
    update: { value, updatedById: req.user!.userId },
    create: { key, value, updatedById: req.user!.userId },
  });
  return ApiResponse.success(res, block, 'Content updated');
});
