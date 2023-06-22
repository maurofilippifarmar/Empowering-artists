import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MyContext } from '../../context/context.js';
import AlbumName from '../page_components/AlbumName.jsx';
import AlbumImage from '../page_components/AlbumImage.jsx';
import AlbumTrackList from '../page_components/AlbumTrackList.jsx';
import ArtistInformationSidebar from '../ArtistInformationSidebar.jsx';
import DeleteAlbum from '../content_managment_system/DeleteAlbum.jsx';
import PatchAlbum from '../content_managment_system/PatchAlbum.jsx';
import AddTrack from '../content_managment_system/AddTrack.jsx';

const AlbumPage = () => {
    const { id } = useParams();
    const [active, setActive] = useState('album-tracklist');

    const { albums, singleAlbum, setSingleAlbum } = useContext(MyContext);

    useEffect(() => {
        const album = albums.find((album) => album._id === id);
        setSingleAlbum(album);
    }, [id, albums]);

    return (
        <div className="container mx-auto m-20 mx-20">
            <main className="flex flex-row justify-center mt-20">
                <section className="basis-2/3 border-2 border-gray-500 rounded-lg bg-gray-400 mr-10 p-10">
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex flex-col">
                                <AlbumName name={singleAlbum?.albumName} />
                                <AlbumImage url={singleAlbum?.albumImage} />
                            </div>
                        </div>
                        <div
                            id="interactive-buttons-and-tracklist"
                            className="flex items-center space-x-4 mb-4"
                        >
                            <div className="flex flex-col w-1/2">
                                <div className="flex flex-row justify-between">
                                    <button className="py-2 px-4 bg-red-500 text-white rounded">
                                        <DeleteAlbum album={singleAlbum} />
                                    </button>
                                    <button
                                        className={`py-2 px-4 text-black rounded ${
                      active === 'add-track'
                          ? 'bg-orange-500 '
                          : 'bg-gray-200 border-2 border-gray-500'
                  }`}
                                        onClick={() => setActive('add-track')}
                                    >
                                        Add track
                                    </button>

                                    <button
                                        className={`py-2 px-4 text-black rounded ${
                      active === 'edit-album'
                          ? 'bg-orange-500 '
                          : 'bg-gray-200 border-2 border-gray-500'
                  }`}
                                        onClick={() => setActive('edit-album')}
                                    >
                                        Edit Album
                                    </button>
                                </div>

                                <div>
                                    {active === 'album-tracklist' && (
                                        <AlbumTrackList
                                            tracklist={singleAlbum?.tracks}
                                        />
                                    )}
                                    {active === 'add-track' && (
                                        <AddTrack
                                            album={singleAlbum}
                                            setActive={setActive}
                                        />
                                    )}
                                    {active === 'edit-album' && (
                                        <PatchAlbum
                                            album={singleAlbum}
                                            setActive={setActive}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <aside className="basis-1/3 border-2 border-gray-500 rounded-lg bg-gray-400">
                    <ArtistInformationSidebar artist={singleAlbum?.artistId} />
                </aside>
            </main>
        </div>
    );
};

export default AlbumPage;
