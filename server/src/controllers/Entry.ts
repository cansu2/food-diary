import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Entry from '../models/Entry';

const createEntry = (req: Request, res: Response, next: NextFunction) => {
    const {name, description, location, date} = req.body;

    const entry = new Entry({
        _id: new mongoose.Types.ObjectId(),
        name,
        description,
        location,
        date
    });

    return entry
        .save()
        .then((entry) => res.status(201).json({entry}))
        .catch((error) => res.status(500).json({error}))
};

const readAll = (req: Request, res: Response, next: NextFunction) => {
    return Entry.find()
        .then((entry) =>  res.status(200).json({entry}))
        .catch((error) => res.status(500).json({error}))
}

export default {createEntry, readAll};