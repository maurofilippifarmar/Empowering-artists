import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../context/context.js";
import { BsTrash } from "react-icons/bs";

const DeleteTrack = ({ track, setActive }) => {
  const navigate = useNavigate();
  const { setAlbums } = useContext(MyContext);

  const deleteTrack = (e) => {
    e.preventDefault();

    axios
      .delete(
        `http://localhost:4000/artists/${track.artistId}/album/${track.albumId}/track/${track._id}`
      )
      .then((response) => {
        if (response.data.success) {
          console.log(response.data.message);
          setAlbums(response.data.data);
          setActive("track");
          navigate(`/albums/${response.data.albumId}`);
        } else {
          console.log(response.data.message);
        }
      });
  };

  return (
    <div>
      <button onClick={deleteTrack}>
        <BsTrash />
      </button>
    </div>
  );
};
export default DeleteTrack;
