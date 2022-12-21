"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Entry_1 = __importDefault(require("../models/Entry"));
const createEntry = (req, res, next) => {
    const { name, description, location, date } = req.body;
    const entry = new Entry_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
        name,
        description,
        location,
        date
    });
    return entry
        .save()
        .then((entry) => res.status(201).json({ entry }))
        .catch((error) => res.status(500).json({ error }));
};
const readAll = (req, res, next) => {
    return Entry_1.default.find()
        .then((entry) => res.status(200).json({ entry }))
        .catch((error) => res.status(500).json({ error }));
};
exports.default = { createEntry, readAll };
