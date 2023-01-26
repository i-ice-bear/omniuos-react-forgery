import React from "react";
import "./css/App.css";
import NavbarComponent from "./source/router/Navbar";
import HomePage from "./source/content/Home";
import Practice from "./source/content/Practice";
import SnackComponent from "./source/components/Snackbar/Snackbar";
// import SwitchComponent from "./source/components/Switch";
// import { Navbar } from "@nextui-org/react";

const AppComponent = () => {
  return (
    <>
      <NavbarComponent heading="Textutils" home={"Home"} />
    </>
  );
};

export default AppComponent;
