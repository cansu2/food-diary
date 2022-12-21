"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const Entry_1 = __importDefault(require("../controllers/Entry"));
const router = express_1.default.Router();
router.post('/entry', Entry_1.default.createEntry);
router.get('/entry', Entry_1.default.readAll);
module.exports = router;
