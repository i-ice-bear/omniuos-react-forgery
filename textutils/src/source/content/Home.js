import React from "react";
import PropTypes from "prop-types";
import { Card, Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { FaBug, FaShare, FaWatchmanMonitoring } from "react-icons/fa";

const HomePage = (props) => {
  const [changeText, setChangeText] = React.useState("");
  const [wordLength, setWordLength] = React.useState(0)
  const upperCase = (e) => {
    setChangeText(changeText.toUpperCase());
  };
  const handleOnChange = (event) => {
    setChangeText(event.target.value)
  };
  
  const wordCounts = () => {
    let counts = {};
    let word = changeText.split(" ");
    for (let words in word) {
      if (words.length > 0) {
        if (!(words in counts)) {
          setWordLength(wordLength[counts] = 0)
        } else {
          setWordLength(wordLength[counts] += 1)
        }
      }
    }
    return counts
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
                  Convert uppercase
                </Button>
                <Button size={"sm"} auto>
                  Convert lowercase
                </Button>
                <Button size={"sm"} auto>
                  Clear canvas
                </Button>
              </Button.Group>
            </div>
          </div>
          <div className="col-md-5">
            <Card css={{ mw: "100%" }} isHoverable>
              <Card.Header bordered>
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
              </Card.Body>
              <Card.Divider />
              <Card.Footer>
                <Button color={"error"} auto size="sm">
                  Have any problem <FaBug className="mx-2" />
                </Button>
                <Button auto size="sm" className="mx-3">
                  Share your {props.headingContent} <FaShare className="mx-1" />
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
