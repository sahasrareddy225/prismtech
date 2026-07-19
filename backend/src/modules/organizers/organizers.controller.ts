import { Request, Response } from 'express';
import { prisma } from '../../config/database';
import { ApiResponse } from '../../utils/ApiResponse';
import { asyncHandler } from '../../utils/asyncHandler';
import { AuthRequest } from '../../middleware/auth.middleware';

// GET /api/v1/organizers — public
export const getOrganizers = asyncHandler(async (req: Request, res: Response) => {
  const organizers = await prisma.organizerProfile.findMany({
    orderBy: [{ isFeatured: 'desc' }, { displayOrder: 'asc' }],
    include: {
      user: {
        select: {
          id: true, name: true, bio: true, profilePhotoUrl: true,
          instagramHandle: true, linkedinUrl: true, githubUrl: true, college: true,
        },
      },
    },
  });
  return ApiResponse.success(res, organizers);
});

// POST /api/v1/organizers — admin
export const createOrganizer = asyncHandler(async (req: AuthRequest, res: Response) => {
  const { userId, title, displayOrder, isFeatured, society } = req.body;
  const profile = await prisma.organizerProfile.create({
    data: { userId, title, displayOrder, isFeatured, society },
  });
  return ApiResponse.created(res, profile);
});

// PATCH /api/v1/organizers/:id — admin
export const updateOrganizer = asyncHandler(async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const profile = await prisma.organizerProfile.update({
    where: { id: Number(id) },
    data: req.body,
  });
  return ApiResponse.success(res, profile, 'Organizer profile updated');
});

// DELETE /api/v1/organizers/:id — admin
export const deleteOrganizer = asyncHandler(async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  await prisma.organizerProfile.delete({ where: { id: Number(id) } });
  return ApiResponse.success(res, null, 'Organizer removed');
});
