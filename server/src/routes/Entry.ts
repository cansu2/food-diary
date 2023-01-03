import express, { Router } from 'express';
import controller from '../controllers/Entry';
import { Schemas, ValidateSchema } from '../middleware/ValidateSchema';

const router = express.Router();

router.post('/entry',ValidateSchema(Schemas.entry.create), controller.createEntryHandler);
router.get('/entry', controller.readAllHandler);
router.get('/entry/:entryId', controller.readEntryHandler);
router.delete('/entry/:entryId', controller.deleteEntryHandler);
router.patch('/entry/:entryId',ValidateSchema(Schemas.entry.update), controller.updateEntryHandler);

export = router;