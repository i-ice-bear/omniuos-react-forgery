import React from "react";
import PropTypes from "prop-types";
import { Container } from "@nextui-org/react";

const HomePage = (props) => {
  return (
    <>
      <div className="container my-5">
        <h1>Text analysis by {props.headingContent}</h1>{" "}
        <div className="mb-3">
          <label for="" className="form-label"></label>
          <textarea
            className="form-control"
            name=""
            id=""
            rows="3"
            placeholder="Enter your text"
          ></textarea>
        </div>
      </div>
    </>
  );
};

HomePage.propTypes = {
  headingContent : PropTypes.string
};

export default HomePage;