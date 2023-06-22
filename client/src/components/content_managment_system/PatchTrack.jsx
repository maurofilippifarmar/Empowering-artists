import axios from 'axios';
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../context/context.js';

export default function PatchTrack({ track, setActive }) {
    const navigate = useNavigate();
    const { setAlbums } = useContext(MyContext);
    const [err, setErr] = useState({
        trackName: '',
        trackNumber: '',
        trackLength: '',
        trackImage: '',
        trackFile: '',
    });

    const patchTrack = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        axios
            .patch(
                `http://localhost:4000/artists/${track.artistId}/album/${track.albumId}/track/${track._id}`,
                formData
            )
            .then((response) => {
                if (response.data.success) {
                    console.log(response.data.message);
                    setAlbums(response.data.data);
                    setActive('track');
                    navigate(`/albums/${response.data.albumId}`);
                } else {
                    console.log(response.data.message);
                    setErr({ ...err, ...response.data.message[0] });
                }
            });
    };

    return (
        <div>
            <div className="flex justify-center items-center my-8">
                <div className="">
                    <button
                        className="py-2 px-4 bg-orange-500 text-white rounded"
                        onClick={() => setActive('track')}
                    >
                        back
                    </button>
                    <form onSubmit={patchTrack}>
                        <div className="mb-4">
                            <label htmlFor="artistId" className="hidden">
                                ArtistId
                            </label>
                            <input
                                type="text"
                                name="artistId"
                                defaultValue={track.artistId}
                                disabled
                                id="artistId"
                                className="hidden"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="albumId" className="hidden">
                                AlbumId
                            </label>
                            <input
                                type="text"
                                name="albumId"
                                defaultValue={track._id}
                                disabled
                                id="albumId"
                                className="hidden"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="trackName"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Track Name
                            </label>
                            <input
                                type="text"
                                name="trackName"
                                defaultValue={track.trackName}
                                id="trackName"
                                placeholder="Enter track name"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            {err.trackName && (
                                <p className="text-red-500 text-xs italic">
                                    {err.trackName}
                                </p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="artistName"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Artist Name
                            </label>
                            <input
                                type="text"
                                name="artistName"
                                defaultValue={track.artistName}
                                id="artistName"
                                placeholder="Enter artist name"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            {err.artistName && (
                                <p className="text-red-500 text-xs italic">
                                    {err.artistName}
                                </p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="albumName"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Album Name
                            </label>
                            <input
                                type="text"
                                name="albumName"
                                value={track?.albumName}
                                id="albumName"
                                placeholder="Enter album name"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            {err.albumName && (
                                <p className="text-red-500 text-xs italic">
                                    {err.albumName}
                                </p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="releaseDate"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Release Date
                            </label>
                            <input
                                type="text"
                                name="releaseDate"
                                value={track?.releaseDate}
                                id="releaseDate"
                                placeholder="Enter release date"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            {err.releaseDate && (
                                <p className="text-red-500 text-xs italic">
                                    {err.releaseDate}
                                </p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="genre"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Genre
                            </label>
                            <input
                                type="text"
                                name="genre"
                                value={track?.genre}
                                id="genre"
                                placeholder="Enter genre"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            {err.genre && (
                                <p className="text-red-500 text-xs italic">
                                    {err.genre}
                                </p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="trackFile"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Track File
                            </label>
                            <input
                                type="file"
                                name="trackFile"
                                id="trackFile"
                                placeholder="Enter track file"
                                // className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            {err.trackFile && (
                                <p className="text-red-500 text-xs italic">
                                    {err.trackFile}
                                </p>
                            )}
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
