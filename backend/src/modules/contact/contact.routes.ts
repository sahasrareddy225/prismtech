import { Router } from 'express';
import { submitContact, getContactSubmissions, resolveContact } from './contact.controller';
import { authenticate, requireRole } from '../../middleware/auth.middleware';

const router = Router();

router.post('/', submitContact);
router.get('/', authenticate, requireRole('ADMIN', 'ORGANIZER'), getContactSubmissions);
router.patch('/:id/resolve', authenticate, requireRole('ADMIN'), resolveContact);

export default router;
