const AlbumImage = ({ url }) => {
  return (
    <div className="rounded mb-10">
      <img style={{ width: "50%" }} src={url} alt="Album" className="rounded" />
    </div>
  );
};
export default AlbumImage;
