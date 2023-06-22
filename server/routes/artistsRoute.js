import express from 'express';
import { auth } from '../middleware/auth.js';
import { isAdmin } from '../middleware/isAdmin.js';

import {
    addAlbumToArtist,
    addTrackToAlbum,
    createArtist,
    deleteAlbumFromArtist,
    deleteArtist,
    deleteTrackFromAlbum,
    getAllArtists,
    getArtist,
    patchAlbumToArtist,
    patchTrackToAlbum,
    updateArtist,
} from '../controllers/artistController.js';

const router = express.Router();

//routes
//these routes are for the Admin to manage artists

//get all artists (get)
router.get('/', getAllArtists);

//create artist (post)
//router.post('/', auth, isAdmin, createArtist);
router.post('/', createArtist);

//get artist (get)
router.get('/:id', getArtist);

//update user (patch)
//router.patch('/:id', auth, isAdmin, updateArtist);
router.patch('/:id', updateArtist);

//create album (post)
//router.post('/:id/album', auth, isAdmin, addAlbumToArtist);
router.post('/:id/album', addAlbumToArtist);

// modify an album (patch)
//router.patch('/:id/album', auth, isAdmin, addAlbumToArtist);
router.patch('/:id/album/:albumId', patchAlbumToArtist);

//create track (post)
//router.post('/:id/album/:albumId/track', auth, isAdmin, addTrackToAlbum);
router.post('/:id/album/:albumId/track', addTrackToAlbum);


//modify a track from an album (patch)
//router.patch('/:id/album/:albumId/track', auth, isAdmin, addTrackToAlbum);
router.patch('/:id/album/:albumId/track/:trackId', patchTrackToAlbum);


//delete a track from an album (delete)
//router.delete('/:id/album/:albumId/track/:trackId', auth, isAdmin, deleteTrackFromAlbum);
router.delete('/:id/album/:albumId/track/:trackId', deleteTrackFromAlbum);

//delete an album from an artist (delete)
//router.delete('/:id/album/:albumId', auth, isAdmin, deleteAlbumFromArtist);
router.delete('/:id/album/:albumId', deleteAlbumFromArtist);
//delete user (delete)
//router.delete('/:id', auth, isAdmin, deleteArtist);
router.delete('/:id', deleteArtist);

export default router;
