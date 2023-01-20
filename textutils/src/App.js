import React from "react";
import "./css/App.css";
import NavbarComponent from "./source/router/Navbar";
import SwitchComponent from "./source/components/Switch";
import { Navbar } from "@nextui-org/react";
import HomePage from "./source/content/Home";

const AppComponent = () => {
  return (
    <>
      <NavbarComponent />
      <HomePage />
    </>
  );
};

export default AppComponent;
