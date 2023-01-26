import React from "react";
import "./css/App.css";
import NavbarComponent from "./source/router/Navbar";
import HomePage from "./source/content/Home";
import Practice from "./source/content/Practice";
import SnackComponent from "./source/components/Snackbar/Snackbar";
import NewsPage from "./source/content/NewsPage";
import { Router, Routes, Route } from "react-router-dom";

const AppComponent = () => {
  return (
    <>
        <NavbarComponent heading="Textutils" home={"Home"} />
        
    </>
  );
};

export default AppComponent;
