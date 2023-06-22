import { useEffect, useState } from 'react';
import { MyContext } from './context.js';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { axiosWithToken } from '../main.jsx';

export default function Container({ children }) {
    const [user, setUser] = useState(null);
    const [artists, setArtists] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [singleArtist, setSingleArtist] = useState({ albums: [] });
    const [singleAlbum, setSingleAlbum] = useState({ tracks: [] });
    const [artistIdState, setArtistIdState] = useState('');
    const [createArtist, setCreateArtist] = useState({ albums: [] });
    const [createAlbum, setCreateAlbum] = useState({ tracks: [] });
    const [createTrack, setCreateTrack] = useState({});

    //stuff to manage the Now playing bar
    


    ///get all artists and albums on page load

    useEffect(() => {
        if (localStorage.getItem('token')) {
            axiosWithToken
                .get('/users/refreshpage', {
                    headers: { token: localStorage.getItem('token') },
                })
                .then((response) => {
                    if (response.data.success) {
                        setUser(response.data.user);
                    } else {
                        toast.error(res.data.data);
                    }
                });
        }
        axios.get('http://localhost:4000/artists').then((response) => {
            if (response.data.success) {
                console.log('artist data', response.data.data);
                setArtists(response.data.data);
            }
        });
        axios.get('http://localhost:4000/music/albums').then((response) => {
            if (response.data.success) {
                console.log(response.data.data, 'music albums');
                setAlbums(response.data.data);
            }
        });
    }, []);

    // Get single artist from album id of album clicked on

    const [data, setData] = useState({});

    // useEffect(() => {
    //     axios
    //         .get(`http://localhost:4000/artists/${artistIdState}`)
    //         .then((response) => {
    //             console.log(response.data);
    //             if (response.data.success) {
    //                 console.log('response.data.data', response.data.data);

    //                 setData(response.data.data);
    //             } else {
    //                 toast.error(response.data.data);
    //             }
    //         });
    // }, [artistIdState]);

    // useEffect(() => {
    //     setSingleArtist(data);
    // }, [data]);

    ////////////////////////////

    return (
        <MyContext.Provider
            value={{
                user,
                setUser,
                artists,
                setArtists,
                albums,
                setAlbums,
                singleArtist,
                setSingleArtist,
                artistIdState,
                setArtistIdState,
                createArtist,
                setCreateArtist,
                singleAlbum,
                setSingleAlbum,
                createAlbum,
                setCreateAlbum,
                createTrack,
                setCreateTrack,
            }}
        >
            <Toaster />
            {children}
        </MyContext.Provider>
    );
}
