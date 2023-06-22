const PersonalInfo = ({ city, country, genre }) => {
  return (
    <div className="my-4">
      <h4 className="font-bold">Location:</h4>
      <p>
        {city}, {country}
      </p>
      <p>{genre}</p>
    </div>
  );
};

export default PersonalInfo;
