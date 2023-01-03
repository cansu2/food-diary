"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const Entry_1 = __importDefault(require("../controllers/Entry"));
const ValidateSchema_1 = require("../middleware/ValidateSchema");
const router = express_1.default.Router();
router.post('/entry', (0, ValidateSchema_1.ValidateSchema)(ValidateSchema_1.Schemas.entry.create), Entry_1.default.createEntryHandler);
router.get('/entry', Entry_1.default.readAllHandler);
router.get('/entry/:entryId', Entry_1.default.readEntryHandler);
router.delete('/entry/:entryId', Entry_1.default.deleteEntryHandler);
router.patch('/entry/:entryId', (0, ValidateSchema_1.ValidateSchema)(ValidateSchema_1.Schemas.entry.update), Entry_1.default.updateEntryHandler);
module.exports = router;
