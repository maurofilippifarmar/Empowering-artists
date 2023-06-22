import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { MyContext } from '../../context/context';
import { useNavigate } from 'react-router-dom';

const PatchArtist = ({ artist, setActiveArtistInfo }) => {
    const navigate = useNavigate();
    const { setArtists } = useContext(MyContext);

    const [err, setErr] = useState({
        artistName: '',
        artistImage: '',
        city: '',
        state: '',
        biography: '',
        genres: '',
        albums: '',
    });
    //console.log('patch artist', artist);

    const patchArtist = (e) => {
        const formData = new FormData(e.target);

        axios
            .patch(`http://localhost:4000/artists/${artist._id}`, formData)
            .then((response) => {
                if (response.data.success) {
                    console.log('patched artist', response.data.data);
                    setArtists(response.data.data);
                    navigate(`/artists/${response.data.artistId}`);
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
            onClick={() => setActiveArtistInfo("artist-information")}
          >
            Back
          </button>

                <form onSubmit={patchArtist}>
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
                            defaultValue={artist.artistName}
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
                            htmlFor="artistImage"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Artist Image
                        </label>
                        <input
                            type="file"
                            name="artistImage"
                            id="artistImage"
                            placeholder="Enter artist image"
                            //className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />

                        {err.artistImage && (
                            <p className="text-red-500 text-xs italic">
                                {err.artistImage}
                            </p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="city"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            City
                        </label>
                        <input
                            type="text"
                            name="city"
                            defaultValue={artist.city}
                            id="city"
                            placeholder="Enter city"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {err.city && (
                            <p className="text-red-500 text-xs italic">
                                {err.city}
                            </p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="state"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            State
                        </label>
                        <input
                            type="text"
                            name="state"
                            defaultValue={artist.state}
                            id="state"
                            placeholder="Enter state"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {err.state && (
                            <p className="text-red-500 text-xs italic">
                                {err.state}
                            </p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="biography"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Biography
                        </label>
                        <input
                            type="text"
                            name="biography"
                            defaultValue={artist.biography}
                            id="biography"
                            placeholder="Enter biography"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {err.biography && (
                            <p className="text-red-500 text-xs italic">
                                {err.biography}
                            </p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="genres"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Genres
                        </label>
                        <input
                            type="text"
                            name="genres"
                            defaultValue={artist.genres}
                            id="genres"
                            placeholder="Enter genres"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {err.genres && (
                            <p className="text-red-500 text-xs italic">
                                {err.genres}
                            </p>
                        )}
                    </div>
                    <div className="mb-4">
                        <button
                            type="submit"
                            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Edit Artist
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default PatchArtist;
