import { useContext } from "react";
import { MyContext } from "../context/context.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(MyContext); // import the context

  const loginUser = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:4000/users/login",
        JSON.stringify({
          email: e.target.email.value,
          password: e.target.password.value,
        }),
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => {
        if (response.data.success) {
          localStorage.setItem("token", response.data.token);
          setUser(response.data.data);

          // navigate('/profile')
        } else {
          alert(res.data.message);
        }
      });
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/3">
        <h1 className="text-3xl font-bold mb-5">Login</h1>
        <form onSubmit={loginUser}>
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
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
