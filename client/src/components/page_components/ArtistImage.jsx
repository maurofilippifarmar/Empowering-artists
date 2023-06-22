const Image = ({ url }) => {
    return (
        <div className="w-96">
        <img src={url} alt="Artist" />
        </div>
    );
};

export default Image;
