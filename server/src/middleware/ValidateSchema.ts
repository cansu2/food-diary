import joi, { ObjectSchema } from 'joi';
import { NextFunction, Response, Request } from 'express';
import Logging from '../library/logging';
import Joi from 'joi';
import { IEntry } from '../models/Entry';

export const ValidateSchema = (schema: ObjectSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.validateAsync(req.body);
            next();
        } catch (error) {
            Logging.error(error);
            return res.status(422).json({error});
        }
    }
}

//prevent from injections
export const Schemas = {
    entry: {
        create: Joi.object<IEntry>({
            name: Joi.string().required(),
            description: Joi.string().optional(),
            location: Joi.string().optional(),
            date: Joi.date().required(),  
        }), 
        update: Joi.object<IEntry>({
            name: Joi.string().required(),
            description: Joi.string().optional(),
            location: Joi.string().optional(),
            date: Joi.date().required(), 
        }),
    }
}