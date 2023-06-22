import { Schema, model } from 'mongoose';

const albumSchema = new Schema(
    {
        artistId: { type: Schema.Types.ObjectId, ref: 'Artist', required: true },
        albumName: { type: String, required: true },
        artistName: { type: String, required: true },
        releaseDate: { type: String, required: true },
        genre: { type: String, required: true },
        albumImage: { type: String},
        tracks: [{ type: Schema.Types.ObjectId, ref: 'Track' }],
        description: { type: String },
        
        
    },
    { timestamps: true }
);

const AlbumCollection = model('Album', albumSchema);

export default AlbumCollection;
