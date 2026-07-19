import { Router } from 'express';
import { getSponsors, createSponsor, updateSponsor, deleteSponsor } from './sponsors.controller';
import { authenticate, requireRole } from '../../middleware/auth.middleware';

const router = Router();

router.get('/', getSponsors);
router.post('/', authenticate, requireRole('ADMIN'), createSponsor);
router.patch('/:id', authenticate, requireRole('ADMIN'), updateSponsor);
router.delete('/:id', authenticate, requireRole('ADMIN'), deleteSponsor);

export default router;
