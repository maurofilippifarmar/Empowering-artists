import { Schema, model } from 'mongoose';

const userSchema = new Schema(
    {
        userName: { type: String, required: true, unique: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        role: { type: String, default: 'fan', enum: ['fan', 'admin'] },
        profilePic: { type: String },
        favoriteArtists: [{ type: Schema.Types.ObjectId, ref: 'Artist' }],
        favoriteAlbums: [{ type: Schema.Types.ObjectId, ref: 'Album' }],
        playlist: [{ type: Schema.Types.ObjectId, ref: 'Track' }],
    },
    { timestamps: true }
);

const UserCollection = model('User', userSchema);

export default UserCollection;
