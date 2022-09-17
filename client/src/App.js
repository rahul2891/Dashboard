import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import UsersList from "./Pages/UsersList";
import HomePage from "./Pages/HomePage";
import Register from "./Pages/Register";
//import SideBar from "./Pages/SideBar";
import NavbarH from "./Pages/NavbarH";
import Home from "./Pages/Home";

function App() {
  // let pathName = window.location.pathname;
  // let arr = pathName.toString().split("/");
  // let currentPath = arr[arr.length - 1];
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sidebar" element={<NavbarH />} />
        <Route path="/profile" element={<HomePage />} />
        <Route path="/users" element={<UsersList />} />
      </Routes>
    </>
  );
}

export default App;
