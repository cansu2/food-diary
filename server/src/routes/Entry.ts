import express, { Router } from 'express';
import controller from '../controllers/Entry';

const router = express.Router();

router.post('/entry', controller.createEntry);
router.get('/entry', controller.readAll)

export = router;