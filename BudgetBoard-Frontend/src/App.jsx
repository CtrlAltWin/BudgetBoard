import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AuthContext from "../utils/AuthContext";
import axios from "axios";
const baseURL = import.meta.env.VITE_API_URL;

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const getStatus = async () => {
    try {
      const res = await axios.get(`${baseURL}/auth/status`, {
        withCredentials: true,
      });
      setLoggedInUser(res.data?.user);
    } catch (err) {}
  };

  useEffect(() => {
    getStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <Toaster position="bottom-right" />
      <Navbar />
      <Outlet />
    </AuthContext.Provider>
  );
}

export default App;
