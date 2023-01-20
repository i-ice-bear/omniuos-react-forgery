import React from "react";
import "./css/App.css";
import NavbarComponent from "./source/router/Navbar";
import HomePage from "./source/content/Home";
import Practice from "./source/content/Practice";
// import SwitchComponent from "./source/components/Switch";
// import { Navbar } from "@nextui-org/react";
// import HomePage from "./source/content/Home";

const AppComponent = () => {
  return (
    <>
      <NavbarComponent heading="Textutils" home={"Home"} />
      <div className="container">
        <Practice name="Name" />
      </div>
    </>
  );
};

export default AppComponent;
