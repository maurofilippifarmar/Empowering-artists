import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();
    const [err, setErr] = useState({ userName: '', email: '', password: '' });
    const registerUser = (e) => {
        const user = {
            userName: e.target.userName.value,
            email: e.target.email.value,
            password: e.target.password.value,
            role: e.target.role.value, // this will be erased after we create an admin user
        };
        axios
            .post('/users', JSON.stringify(user), {
                headers: { 'Content-Type': 'application/json' },
            })
            .then((response) => {
                if (response.data.success) {
                    navigate('http://localhost:4000/users/login');
                } else {
                    console.log(response.data.message);
                    setErr(...err, ...response.data.message[0]);
                }
            });
    };
    return (
        // create a login using tailwind css
        <div className="flex justify-center items-center h-screen">
            <div className="w-1/3">
                <h1 className="text-3xl font-bold mb-5">Register</h1>
                <form onSubmit={registerUser}>
                    <div className="mb-4">
                        <label
                            htmlFor="userName"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            name="userName"
                            id="userName"
                            placeholder="Enter username"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {err.userName && (
                            <p className="text-red-500 text-xs italic">
                                {err.userName}
                            </p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {err.email && (
                            <p className="text-red-500 text-xs italic">
                                {err.email}
                            </p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {err.password && (
                            <p className="text-red-500 text-xs italic">
                                {err.password}
                            </p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="role"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Role
                        </label>
                        <select
                            name="role"
                            id="role"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
