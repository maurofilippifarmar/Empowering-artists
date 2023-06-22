import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MyContext } from '../context/context';
import Header from './Header.jsx';

export default function Navbar() {
    const { user } = useContext(MyContext);
    return (
        <nav className="fixed top-0 bg-black rounded w-screen pt-5 px-10">
                <div className='fixed left-10 top-2'>
                    <Header />
                </div>
            <ul className="">

                <li>
                    {' '}
                    <NavLink to="/search"> Search </NavLink>{' '}
                </li>

                <li>
                    {' '}
                    <NavLink to="/"> Home </NavLink>{' '}
                </li>
                <li>
                    <NavLink to="/artists"> Artists </NavLink>
                </li>
                <li>
                    <NavLink to="/albums"> Albums </NavLink>
                </li>
                {/* // if user is admin show the crate artist link */}
                {!user ? (
                    <li>
                        <NavLink to="/createartist"> Create Artist </NavLink>
                    </li>
                ) : (
                    <li>
                        <NavLink to="/login"> Login </NavLink>
                    </li>
                )}
            </ul>
        </nav>
    );
}
