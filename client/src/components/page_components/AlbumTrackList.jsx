import { Howl, Howler } from "howler";
import Track from "./Track.jsx";
import { useState } from "react";

const AlbumTrackList = ({ tracklist }) => {
  const [active, setActive] = useState("track");
  return (
    <div className="">
      <ul >
        <li className="">
          {tracklist?.map((track) => {
            console.log("tracklist", track.trackFile);

            return (
              <div key={track?._id} className="pl-0">
                <Track track={track} />
              </div>
            );
          })}
        </li>
      </ul>
    </div>
  );
};
export default AlbumTrackList;
