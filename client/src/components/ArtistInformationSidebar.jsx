import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../context/context";

const ArtistInformationSidebar = ({ artist }) => {
  console.log(artist, "artist in sidebar");

  return (
    <div className="p-4 bg-black-100 flex flex-col items-center">
      <div>
        <Link to={`/artists/${artist?._id}`}>
          <div className="mb-4 text-center flex flex-col items-center justify-center ">
            <h3 className="text-xl font-bold my-10 ">{artist?.artistName}</h3>
            <img
              src={artist?.artistImage}
              alt="artistimage"
              className="w-1/2 rounded "
            />
            {/* <p className="text-white-600">{artist?.city}</p> */}
          </div>
        </Link>
      </div>
      <div>
        <h2 className="flex items-center justify-center font-bold mt-10">Discography:</h2>
        <ul className="flex flex-col list-none ml-0 pl-0">
          {artist?.albums?.map((album) => (
            <li key={album._id} className="my-5">
              <Link to={`/albums/${album._id}`} className="">
                <div className="flex items-center justify-center">
                  <img
                    src={album.albumImage}
                    alt={album.title}
                    className="w-1/2 rounded"
                  />
                  <p>{album.title}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ArtistInformationSidebar;
