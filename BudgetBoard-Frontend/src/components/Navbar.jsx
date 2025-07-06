import React, { useContext, useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import AuthContext from "../../utils/AuthContext";
import toast from "react-hot-toast";
import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { setLoggedInUser, loggedInUser } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await axios.post(`${baseURL}/auth/logout`, {}, { withCredentials: true });
      setLoggedInUser(null);
      toast.success("Logged out successfully!");
    } catch (err) {
      console.log(err);
      toast.error("Logout failed!");
    }
  };

  return (
    <div className="h-15 shadow text-gray-700 font-semibold">
      <div className="h-full max-w-[1230px] mx-auto grid grid-cols-2 items-center">
        <div className="flex items-center h-full mx-2 gap-2">
          <Logo />
          <h1 className="text-violet-400 text-xl"> BudgetBoard</h1>
        </div>

        <div className="flex gap-8 justify-end items-center h-full text-sm mx-2">
          <div className="hidden sm:flex gap-8">
            <Link to={"/"}>Home</Link>
            <Link to={"/dashboard"}>Dashboard</Link>
            <Link to={"/analytics"}>Analytics</Link>
          </div>

          {/* Mobile Menu Button */}
          <div
            className="sm:hidden cursor-pointer"
            onClick={() => setShowMobileMenu((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width={20}
            >
              <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
            </svg>
          </div>

          {/* Logout Button */}
          {loggedInUser && (
            <div
              className="text-gray-500 hover:bg-gray-100 py-2 px-4 rounded-lg cursor-pointer"
              onClick={handleLogout}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width={20}
              >
                <path d="M4 18H6V20H18V4H6V6H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V18ZM6 11H13V13H6V16L1 12L6 8V11Z"></path>
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {showMobileMenu && (
        <div className="absolute sm:hidden z-10 w-full bg-white shadow opacity-95">
          <ul>
            <Link to={"/"}>
              <li className="px-4 py-2 hover:bg-gray-100">Home</li>
            </Link>
            <Link to={"/dashboard"}>
              <li className="px-4 py-2 hover:bg-gray-100">Dashboard</li>
            </Link>
            <Link to={"/analytics"}>
              <li className="px-4 py-2 hover:bg-gray-100">Analytics</li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
