import * as React from "react";
import PropTypes from "prop-types";
import { Card, Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import {
  FaBackspace,
  FaBug,
  FaClipboard,
  FaHandScissors,
  FaItalic,
  FaShare,
  FaSortAlphaDown,
  FaSortAlphaUp,
} from "react-icons/fa";

const HomePage = (props) => {
  const [changeText, setChangeText] = React.useState("");

  const calculateReadTmie = () => {};

  const upperCase = (e) => {
    setChangeText(changeText.toUpperCase());
  };

  const handleOnChange = (event) => {
    setChangeText(event.target.value);
  };

  const wordCounts = () => {
    let counts = {};
    let word = changeText.split(" ");
    for (let words in word) {
      if (words.length > 0) {
        if (!(words in counts)) {
          //TODO: setWordLength(wordLength[counts] = 0)
        } else {
          //TODO: setWordLength(wordLength[counts] += 1)
        }
      }
    }
    return counts;
  };

  const handleCopyClip = () => {
    navigator.clipboard.writeText(changeText);
  };

  const handleClearCanvas = () => {
    let newText = " ";
    setChangeText(newText);
  };

  const handleLowerCase = () => {
    setChangeText(changeText.toLowerCase());
  };

  const handleExtraSpaces = () => {
    var text = changeText.split(/[ ]+/);
    setChangeText(text.join(" "));
  };

  return (
    <>
      <div className="container my-5">
        <h1>Text analysis by {props.headingContent}</h1>{" "}
        <div className="row my-5">
          <div className="col-md-7 mb-3">
            <Textarea
              color="secondary"
              labelPlaceholder="Enter your text"
              rows={10}
              fullWidth
              onChange={handleOnChange}
              value={changeText}
            ></Textarea>
            <div className="buttons my-3">
              <Button.Group color="secondary" rounded>
                <Button size={"sm"} auto onPress={upperCase}>
                  Convert uppercase <FaSortAlphaUp />
                </Button>
                <Button size={"sm"} auto onPress={handleLowerCase}>
                  Convert lowercase <FaSortAlphaDown />
                </Button>
                <Button size={"sm"} auto onPress={handleClearCanvas}>
                  Clear canvas <FaHandScissors />
                </Button>
              </Button.Group>
              <Button.Group rounded color="primary">
                <Button size={"sm"} auto onPress={handleCopyClip}>
                  Copy to clipboard{" "}
                  <span className="mx-1">
                    <FaClipboard />
                  </span>
                </Button>

                <Button size={"sm"} auto onPress={handleExtraSpaces}>
                  Remove extra spaces
                  <span className="mx-1">
                    <FaBackspace />
                  </span>
                </Button>
              </Button.Group>
            </div>
          </div>
          <div className="col-md-5">
            <Card css={{ mw: "100%" }} isHoverable>
              <Card.Header>
                <h5>Info of your text</h5>
              </Card.Header>
              <Card.Divider />
              <Card.Body>
                <h6 className="fw-normal">
                  Texts lengths is {changeText.length}{" "}
                </h6>
                <h6 className="fw-normal">
                  Words are around {changeText.split(" ").length}
                </h6>
                <h6 className="fw-normal" onChange={calculateReadTmie}>
                  {0.008 * changeText.split(" ").length} minutes to read
                </h6>
              </Card.Body>
              <Card.Divider />
              <Card.Footer>
                <Button color={"error"} auto size="sm">
                  Have any problem
                  <span className="mx-2">
                    <FaBug />
                  </span>
                </Button>
                <Button auto size="sm" className="mx-3">
                  Share your {props.headingContent}{" "}
                  <span className="mx-1">
                    {" "}
                    <FaShare />
                  </span>
                </Button>
              </Card.Footer>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

HomePage.propTypes = {
  headingContent: PropTypes.string.isRequired,
};

HomePage.defaultProps = {
  headingContent: "Enter Content here",
};

export default HomePage;
