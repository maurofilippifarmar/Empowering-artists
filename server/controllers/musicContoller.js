import AlbumCollection from '../models/albumModel.js';
import TrackCollection from '../models/trackModel.js';

//get all albums (get)
export const getAllAlbums = async (req, res) => {
    try {
        const albums = await AlbumCollection.find().populate([
            { path: 'tracks', model: 'Track' },
            {
                path: 'artistId',
                model: 'Artist',
                populate: {
                    path: 'albums',
                    model: 'Album',
                    populate: [
                        { path: 'tracks', model: 'Track' },
                        {
                            path: 'artistId',
                            model: 'Artist',
                            populate: { path: 'albums', model: 'Album' },
                        },
                    ],
                },
            },
        ]);
        res.json({ success: true, data: albums });
    } catch (err) {
        res.json({ success: false, message: err.message });
    }
};
// get all tracks (get)
export const getAllTracks = async (req, res) => {
    try {
        const tracks = await TrackCollection.find();
        res.json({ success: true, data: tracks });
    } catch (err) {
        res.json({ success: false, message: err.message });
    }
};

//get album (get)
export const getAlbum = async (req, res) => {
    try {
        const { id } = req.params;
        const album = await AlbumCollection.findById(id).populate('tracks');
        if (album) {
            res.json({ success: true, data: album });
        } else {
            res.json({ success: false, message: 'Album not found' });
        }
    } catch (err) {
        res.json({ success: false, message: err.message });
    }
};

//get track (get)
export const getTrack = async (req, res) => {
    try {
        const { id } = req.params;
        const track = await TrackCollection.findById(id);
        if (track) {
            res.json({ success: true, data: track });
        } else {
            res.json({ success: false, message: 'Track not found' });
        }
    } catch (err) {
        res.json({ success: false, message: err.message });
    }
};
