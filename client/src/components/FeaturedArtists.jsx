import { useContext } from 'react';
import { MyContext } from '../context/context';
import { Link } from 'react-router-dom';
import Artists from './Artists.jsx';

const FeaturedArtists = () => {
    return <Artists />;
};

export default FeaturedArtists;
