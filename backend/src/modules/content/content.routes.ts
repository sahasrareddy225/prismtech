import { Router } from 'express';
import { getAllContent, getContentByKey, updateContent } from './content.controller';
import { authenticate, requireRole } from '../../middleware/auth.middleware';

const router = Router();

router.get('/', getAllContent);
router.get('/:key', getContentByKey);
router.patch('/:key', authenticate, requireRole('ADMIN'), updateContent);

export default router;
