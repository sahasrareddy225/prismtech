import { Router } from 'express';
import { getOrganizers, createOrganizer, updateOrganizer, deleteOrganizer } from './organizers.controller';
import { authenticate, requireRole } from '../../middleware/auth.middleware';

const router = Router();

router.get('/', getOrganizers);
router.post('/', authenticate, requireRole('ADMIN'), createOrganizer);
router.patch('/:id', authenticate, requireRole('ADMIN'), updateOrganizer);
router.delete('/:id', authenticate, requireRole('ADMIN'), deleteOrganizer);

export default router;
