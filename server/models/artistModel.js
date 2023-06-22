import { Schema, model } from 'mongoose';

const artistSchema = new Schema(
    {
        artistName: { type: String, required: true },
        artistImage: { type: String  },
        city: { type: String },
        state: { type: String },
        biography: { type: String },
        genres: [{ type: String }],
        albums: [{ type: Schema.Types.ObjectId, ref: 'Album' }],
    },
    { timestamps: true }
);

const ArtistCollection = model('Artist', artistSchema);

export default ArtistCollection;
