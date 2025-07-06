import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import AuthContext from "../../utils/AuthContext";

const baseURL = import.meta.env.VITE_API_URL;

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setIsLoading(true);
      const res = await axios.post(`${baseURL}/auth/login`, formData, {
        withCredentials: true,
      });
      setLoggedInUser(res.data?.user);
      navigate("/dashboard");
      toast.success("Login successful!");
    } catch (err) {
      toast.error("Login Failed");
      setError(err.response?.data?.error || "Invalid credentials");
    } finally {
      setIsLoading(false);
    }
  };

  const fillDemoCredentials = () => {
    setFormData({
      email: "demo1234@gmail.com",
      password: "Demo@1234",
    });
    toast.success("Demo credentials filled!");
  };

  useEffect(() => {
    if (loggedInUser) {
      navigate("/dashboard");
    }
  }, [loggedInUser]);

  return (
    <div className="flex items-center justify-center mt-1 min-h-[calc(100vh-64px)] bg-gray-50 w-full">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 sm:rounded-lg shadow-md w-full max-w-md"
      >
        <div className="mb-4 py-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-center mb-1">
            Welcome to BudgetBoard
          </h1>
          <p className="text-center text-gray-700">
            Organize your transactions, simply and beautifully
          </p>
        </div>

        <h2 className="font-semibold text-center mb-4">Log In</h2>

        <div className="mb-8">
          <label className="block mb-2 font-semibold text-sm">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-offset-4"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-semibold text-sm">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-offset-4"
            required
          />
        </div>

        {error && <p className="px-1 mb-4 text-red-600 text-sm">{error}</p>}

        <div className="mb-6 space-y-4">
          <button
            type="submit"
            className="w-full bg-violet-500 hover:bg-violet-400 font-semibold text-sm text-white py-3 rounded-lg transition"
          >
            Log In
          </button>

          <button
            type="button"
            onClick={fillDemoCredentials}
            className="w-full border border-gray-300 hover:bg-gray-100 text-sm font-semibold py-3 rounded-lg transition"
          >
            Use Demo Account
          </button>

          {isLoading && <Spinner />}
        </div>

        <p className="text-center text-gray-700">
          Not a user? <Link to={"/signup"} className="text-violet-500">Signup</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

