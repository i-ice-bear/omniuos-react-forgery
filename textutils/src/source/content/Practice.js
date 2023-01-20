import { Button } from "@nextui-org/react";
import PropTypes from "prop-types";
import React, { Component } from "react";

export default class Practice extends Component {
  static propTypes = { name: PropTypes.string };
  something() {
    console.log("called outside")
  }
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <>
        <div className="container">
          <h1>I'm {this.props.name}</h1>
          <Button onPress={this.something}>
            Click to console something
          </Button>
        </div>
      </>
    );
  }
}
