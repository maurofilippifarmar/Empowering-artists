import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../context/context.js";

const DeleteAlbum = ({ album }) => {
  const { setAlbums, setArtists } = useContext(MyContext);
  const navigate = useNavigate();
  const deleteAlbum = (e) => {
    e.preventDefault();

    axios
      .delete(
        `http://localhost:4000/artists/${album.artistId._id}/album/${album._id}`
      )
      .then((response) => {
        if (response.data.success) {
          console.log(response.data.message);
          setAlbums(response.data.data);
          setArtists(response.data.artists);
          navigate(`/artists/${response.data.artistId}`);
        } else {
          console.log(response.data.message);
        }
      });
  };

  return (
    <div>
      <button onClick={deleteAlbum}>Delete Album</button>
    </div>
  );
};
export default DeleteAlbum;
