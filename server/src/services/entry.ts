import mongoose, { FilterQuery, QueryOptions, UpdateQuery } from 'mongoose';
import Entry, { IEntryModel } from '../models/Entry';

const createEntry = async (entry: FilterQuery<IEntryModel>) => {
    return Entry.create(entry);
}

const findEntry = async (entry: FilterQuery<IEntryModel>) => {
    return Entry.findById(entry.entryId);
}

const updateEntry = async (entry: FilterQuery<IEntryModel>, update: UpdateQuery<IEntryModel>, options: QueryOptions) => {
    return Entry.findByIdAndUpdate(entry.entryId, update, options);
}

const deleteEntry = async (entry: FilterQuery<IEntryModel>) => {
    return Entry.findByIdAndDelete(entry.entryId)
}

const readAll = async () => {
    return Entry.find();
}

export default {createEntry, findEntry, updateEntry, deleteEntry, readAll};