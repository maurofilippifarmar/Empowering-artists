import { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MyContext } from '../../context/context.js';
import ArtistDiscography from '../page_components/ArtistDiscography.jsx';
import AddAlbum from '../content_managment_system/AddAlbum.jsx';
import PatchArtist from '../content_managment_system/PatchArtist.jsx';
import DeleteArtist from '../content_managment_system/DeleteArtist.jsx';
import ArtistAllInfo from '../page_components/ArtistAllInfo.jsx';

export default function ArtistPage() {
    const [activeArtistInfo, setActiveArtistInfo] =
        useState('artist-information');
    const [activeDiscographySection, setActiveDiscographySection] = useState(
        'discography-section'
    );
    const { id } = useParams();
    const { singleArtist, setSingleArtist, artists } = useContext(MyContext);

    useEffect(() => {
        const artist = artists.find((artist) => artist._id === id);
        setSingleArtist(artist);
    }, [id, artists]);

    return (
        <main className="grid grid-cols-2 gap-8 my-20 mx-16">
            <section>
                <div className="flex justify-between mb-4">
                    <button className="py-2 px-4 bg-red-500 text-white rounded">
                        <DeleteArtist artist={singleArtist} />
                    </button>

                    <button
                        className={`px-4 py-2 rounded ${
                            activeArtistInfo === 'edit-artist'
                                ? 'bg-orange-500 text-white'
                                : 'bg-gray-200'
                        }`}
                        onClick={() => setActiveArtistInfo('edit-artist')}
                    >
                        Edit Artist
                    </button>
                </div>

                <div className="p-4  border-2 border-gray-500 rounded-lg bg-gray-400">
                    {activeArtistInfo === 'artist-information' && (
                        <ArtistAllInfo artist={singleArtist} />
                    )}

                    {activeArtistInfo === 'edit-artist' && (
                        <PatchArtist
                            artist={singleArtist}
                            setActiveArtistInfo={setActiveArtistInfo}
                        />
                    )}
                </div>
            </section>

            <section>
                <div className="flex justify-between mb-4">
                    <button
                        className={`px-4 py-2 rounded ${
                            activeDiscographySection === 'add-album'
                                ? 'bg-orange-500 text-white'
                                : 'bg-gray-200'
                        }`}
                        onClick={() => setActiveDiscographySection('add-album')}
                    >
                        Add Album
                    </button>
                </div>

                {activeDiscographySection === 'discography-section' && (
                    <div className="p-4 border-2 border-gray-500 rounded-lg bg-gray-400">
                        <ArtistDiscography
                            discography={singleArtist?.albums}
                            artist={singleArtist}
                        />
                    </div>
                )}

                {activeDiscographySection === 'add-album' && (
                    <div className="p-4 border-2 border-gray-500 rounded-lg bg-gray-400">
                        <AddAlbum
                            artist={singleArtist}
                            setActiveDiscographySection={
                                setActiveDiscographySection
                            }
                        />
                    </div>
                )}
            </section>
        </main>
    );
}
