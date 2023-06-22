import { Schema, model } from 'mongoose';

const trackSchema = new Schema(
    {
        artistId: { type: Schema.Types.ObjectId, ref: 'Artist' },
        albumId: { type: Schema.Types.ObjectId, ref: 'Album' },
        trackName: { type: String, required: true },
        artistName: { type: String, required: true },
        albumName: { type: String, required: true },
        releaseDate: { type: String, required: true },
        genre: { type: String, required: true },
        trackFile: { type: String, required: true },
    },
    { timestamps: true }
);

const TrackCollection = model('Track', trackSchema);

export default TrackCollection;
