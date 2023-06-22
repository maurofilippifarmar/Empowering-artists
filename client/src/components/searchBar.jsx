import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [searchResults, setSearchResults] = useState([]);

  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetchAlbums();
    fetchArtists();
    fetchSongs();
  }, []);

  const fetchAlbums = async () => {
    try {
      const response = await axios.get("/albums");
      setAlbums(response.data);
    } catch (error) {
      console.error("Error fetching albums:", error);
    }
  };

  const fetchArtists = async () => {
    try {
      const response = await axios.get("/artists");
      setArtists(response.data);
    } catch (error) {
      console.error("Error fetching artists:", error);
    }
  };

  const fetchSongs = async () => {
    try {
      const response = await axios.get("/songs");
      setSongs(response.data);
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform search with the searchQuery and filter
    console.log("Performing search with query:", searchQuery);
    console.log("Filter:", filter);
    // Replace the console.log with your search logic
    // For example, you can update the searchResults state with the fetched results
    const results = [
      { title: "Song 1", artist: "Artist 1", album: "Album 1" },
      { title: "Song 2", artist: "Artist 2", album: "Album 2" },
      { title: "Song 3", artist: "Artist 3", album: "Album 3" },
    ];
    setSearchResults(results);
    setSearchQuery("");
  };

  return (
    <div>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleChange}
          className="search-input"
        />
        <select
          value={filter}
          onChange={handleFilterChange}
          className="filter-select"
        >
          <option value="all">All</option>
          <option value="artist">Artist</option>
          <option value="album">Album</option>
          <option value="song">Song</option>
        </select>
        <button type="submit" className="search-button">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
      <div className="search-results">
        <p>Showing {searchResults.length} results</p>
        {searchResults.map((result, index) => (
          <div key={index} className="result-item">
            <h3>{result.title}</h3>
            <p>{result.artist}</p>
            <p>{result.album}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
