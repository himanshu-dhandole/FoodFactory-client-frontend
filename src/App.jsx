import React from "react";
import Navbar from "./Components/Header/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/HomePageStuff/Footer";
import './App.css'
const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;