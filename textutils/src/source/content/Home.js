import React from "react";
import PropTypes from "prop-types";
import { Container } from "@nextui-org/react";

const HomePage = (props) => {
  return (
    <>
      <Container css={{background:"inherit"}} class="mb-3 p-5">
        <label for="" class="form-label"></label>
        <textarea class="form-control" name="" id="" rows="3"></textarea>
      </Container>
    </>
  );
};

HomePage.propTypes = {};

export default HomePage;
