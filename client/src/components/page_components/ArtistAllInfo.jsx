import ArtistImage from '../page_components/ArtistImage';
import ArtistName from '../page_components/ArtistName';
import ArtistBiography from '../page_components/ArtistBiography';
import ArtistPersonalInfo from '../page_components/ArtistPersonalInfo';

const ArtistAllInfo = ({ artist }) => {
    return (
        <div id="artist-information" >
            <div className="name-section font-bold text-xl mb-6">
                <ArtistName name={artist?.artistName} />
            </div>
            <div className="image-section">
                <ArtistImage url={artist?.artistImage} />
            </div>
            <div className="biography-section">
                <ArtistBiography biography={artist?.biography} />
            </div>
            <div className="personal-section">
                <ArtistPersonalInfo
                    city={artist?.city}
                    country={artist?.state}
                    genre={artist?.genre}
                />
            </div>
        </div>
    );
};
export default ArtistAllInfo;
