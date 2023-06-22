import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../context/context.js';

export default function PatchAlbum({ album, setActive }) {
    const { setAlbums, setArtists } = useContext(MyContext);
    const navigate = useNavigate();

    const [err, setErr] = useState({ userName: '', email: '', password: '' });

    const patchAlbum = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        axios
            .patch(
                `http://localhost:4000/artists/${album._id}/album/${album._id}`,
                formData
            )
            .then((response) => {
                if (response.data.success) {
                    console.log(response.data.data);
                    setAlbums(response.data.data);
                    setArtists(response.data.artists);
                    setActive('album-tracklist');
                    navigate(`/albums/${response.data.albumId}`);
                } else {
                    console.log(response.data.message);
                    setErr({ ...err, ...response.data.message[0] });
                }
            });
    };
    return (
        // create a form using tailwind css
        <div className="flex justify-center items-center my-8">
            <div className="">
            <button
                    className="py-2 px-4 bg-orange-500 text-white rounded"
                    onClick={() => setActive("album-tracklist")}
                  >
                    Back
                  </button>
                {/* <h1 className="text-3xl font-bold mb-5">Edit Album</h1> */}

                <form onSubmit={patchAlbum}>
                    <div className="mb-4">
                        <label htmlFor="artistId" className="hidden">
                            ArtistId
                        </label>
                        <input
                            type="text"
                            name="artistId"
                            defaultValue={album?.artistId._id}
                            disabled
                            id="artistId"
                            className="hidden"
                        />
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
                            defaultValue={album.albumName}
                            id="albumName"
                            placeholder="Enter album name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {err?.albumName && (
                            <p className="text-red-500 text-xs italic">
                                {err?.albumName}
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
                            defaultValue={album?.artistName}
                            id="artistName"
                            placeholder="Enter artist name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {err?.artistName && (
                            <p className="text-red-500 text-xs italic">
                                {err?.artistName}
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
                            type="date"
                            name="releaseDate"
                            defaultValue={album?.releaseDate}
                            id="releaseDate"
                            placeholder="Enter release date"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {err?.releaseDate && (
                            <p className="text-red-500 text-xs italic">
                                {err?.releaseDate}
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
                            defaultValue={album?.genre}
                            id="genre"
                            placeholder="Enter genre"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {err?.genre && (
                            <p className="text-red-500 text-xs italic">
                                {err?.genre}
                            </p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="albumImage"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Album Image
                        </label>
                        <input
                            type="file"
                            name="albumImage"
                            id="albumImage"
                            placeholder="Enter album image"
                            //className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {err?.albumImage && (
                            <p className="text-red-500 text-xs italic">
                                {err?.albumImage}
                            </p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="description"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Description
                        </label>
                        <input
                            type="text"
                            name="description"
                            defaultValue={album?.description}
                            id="description"
                            placeholder="Enter description"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {err?.description && (
                            <p className="text-red-500 text-xs italic">
                                {err?.description}
                            </p>
                        )}
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Edit Album
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
