import mongoose, {Document, Schema} from 'mongoose';

export interface IEntry {
    name: string;
    description: string;
    location: string;
    date: Date;
}

export interface IEntryModel extends IEntry, Document {}

const EntrySchema: Schema = new Schema(
    {
        name: {type: String, required: true},
        description: {type: String, required: false},
        location: {type: String, required: false},
        date: {type: Date, required: true}
    }
)

export default mongoose.model<IEntryModel>('Entry', EntrySchema);