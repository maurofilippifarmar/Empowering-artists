import Image from '../page_components/Image.jsx';
import Name from '../page_components/Name.jsx';
import Biography from '../page_components/Biography.jsx';
import Discography from '../page_components/Discography.jsx';
import PersonalInfo from '../page_components/PersonalInfo.jsx';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function ArtistPage() {
    const { state } = useLocation();
    return (
        <main>
            <section>
                <Image url={state?.artistImage} />
            </section>
            <section>
                <Name name={state?.artistName} />
            </section>
            <section>
                <Biography biography={state?.biography} />
            </section>
            <section>
                <PersonalInfo
                    city={state?.city}
                    country={state?.state}
                    genre={state?.genre}
                />
            </section>
            <section>
                <Discography />
            </section>
        </main>
    );
}
