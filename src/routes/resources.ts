import { Router } from 'express';

import {
  createResource,
  deleteResource,
  getResource,
  getResources,
  updateResource,
} from '../controllers/resources';

const router = Router();

// /api/v1/resources
router.route('/').get(getResources).post(createResource);

// /api/v1/resources/:id
router
  .route('/:id')
  .get(getResource)
  .put(updateResource)
  .delete(deleteResource);

export default router;
