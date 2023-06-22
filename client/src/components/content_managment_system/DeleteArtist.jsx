import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../context/context.js";

const DeleteArtist = ({ artist }) => {
  const navigate = useNavigate();
  const { setArtists } = useContext(MyContext);
  const deleteArtist = (e) => {
    e.preventDefault();

    axios
      .delete(`http://localhost:4000/artists/${artist._id}`)
      .then((response) => {
        if (response.data.success) {
          console.log(response.data.message);
          setArtists(response.data.data);
          navigate("/artists");
        } else {
          console.log(response.data.message);
        }
      });
  };

  return (
    <>
      <button onClick={deleteArtist}>Delete Artist</button>
    </>
  );
};

export default DeleteArtist;
