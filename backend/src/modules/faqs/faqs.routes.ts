import { Router } from 'express';
import { getFAQs, createFAQ, updateFAQ, deleteFAQ } from './faqs.controller';
import { authenticate, requireRole } from '../../middleware/auth.middleware';

const router = Router();

router.get('/', getFAQs);
router.post('/', authenticate, requireRole('ADMIN'), createFAQ);
router.patch('/:id', authenticate, requireRole('ADMIN'), updateFAQ);
router.delete('/:id', authenticate, requireRole('ADMIN'), deleteFAQ);

export default router;
