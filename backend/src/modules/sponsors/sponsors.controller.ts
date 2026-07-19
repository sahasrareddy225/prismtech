import { Request, Response } from 'express';
import { prisma } from '../../config/database';
import { ApiResponse } from '../../utils/ApiResponse';
import { asyncHandler } from '../../utils/asyncHandler';
import { AuthRequest } from '../../middleware/auth.middleware';

// GET /api/v1/sponsors — public (active only)
export const getSponsors = asyncHandler(async (req: Request, res: Response) => {
  const sponsors = await prisma.sponsor.findMany({
    where: { isActive: true },
    orderBy: [{ tier: 'asc' }, { displayOrder: 'asc' }],
  });
  return ApiResponse.success(res, sponsors);
});

// POST /api/v1/sponsors — admin
export const createSponsor = asyncHandler(async (req: AuthRequest, res: Response) => {
  const sponsor = await prisma.sponsor.create({ data: req.body });
  return ApiResponse.created(res, sponsor);
});

// PATCH /api/v1/sponsors/:id — admin
export const updateSponsor = asyncHandler(async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const sponsor = await prisma.sponsor.update({ where: { id: Number(id) }, data: req.body });
  return ApiResponse.success(res, sponsor, 'Sponsor updated');
});

// DELETE /api/v1/sponsors/:id — admin
export const deleteSponsor = asyncHandler(async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  await prisma.sponsor.delete({ where: { id: Number(id) } });
  return ApiResponse.success(res, null, 'Sponsor removed');
});
