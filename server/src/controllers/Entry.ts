import { NextFunction, Request, Response } from 'express';
import entryService from '../services/entry';

const createEntryHandler = async (req: Request, res: Response, next: NextFunction) => {
    const entry = await entryService.createEntry(req.body)

    return res.send(entry)
};

const readEntryHandler = async (req: Request, res: Response, next: NextFunction) => {
    const entryId = req.params.entryId;
    const entry = await entryService.findEntry({entryId})

    if (!entry) {
        return res.status(404).json({message: 'Not Found'})
    }

    return res.send(entry);
}

const updateEntryHandler = async (req: Request, res: Response, next: NextFunction) => {
    const entryId = req.params.entryId;
    const update = req.body;

    const entry = await entryService.findEntry({entryId});

    if (!entry){
        return res.status(404).json({message: 'Not Found'})
    }

    const updatedEntry = await entryService.updateEntry({entryId}, update, {new: true})
    
    return res.send(updatedEntry);
}

const deleteEntryHandler = async (req: Request, res: Response, next: NextFunction) => {
    const entryId = req.params.entryId;

    const entry = await entryService.findEntry({entryId});

    if (!entry){
        return res.status(404).json({message: 'Not Found'})
    }

    await entryService.deleteEntry({entryId});
    return res.sendStatus(200);
}

const readAllHandler = async (req: Request, res: Response, next: NextFunction) => {
    const entries = await entryService.readAll();
    return res.send(entries);
}

export default {createEntryHandler, readAllHandler, readEntryHandler, deleteEntryHandler, updateEntryHandler};