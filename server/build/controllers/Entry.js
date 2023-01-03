"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entry_1 = __importDefault(require("../services/entry"));
const createEntryHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const entry = yield entry_1.default.createEntry(req.body);
    return res.send(entry);
});
const readEntryHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const entryId = req.params.entryId;
    const entry = yield entry_1.default.findEntry({ entryId });
    if (!entry) {
        return res.status(404).json({ message: 'Not Found' });
    }
    return res.send(entry);
});
const updateEntryHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const entryId = req.params.entryId;
    const update = req.body;
    const entry = yield entry_1.default.findEntry({ entryId });
    if (!entry) {
        return res.status(404).json({ message: 'Not Found' });
    }
    const updatedEntry = yield entry_1.default.updateEntry({ entryId }, update, { new: true });
    return res.send(updatedEntry);
});
const deleteEntryHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const entryId = req.params.entryId;
    const entry = yield entry_1.default.findEntry({ entryId });
    if (!entry) {
        return res.status(404).json({ message: 'Not Found' });
    }
    yield entry_1.default.deleteEntry({ entryId });
    return res.sendStatus(200);
});
const readAllHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const entries = yield entry_1.default.readAll();
    return res.send(entries);
});
exports.default = { createEntryHandler, readAllHandler, readEntryHandler, deleteEntryHandler, updateEntryHandler };
