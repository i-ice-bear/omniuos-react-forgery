import * as React from "react";
import PropTypes from "prop-types";
import { Card, Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import {
  FaBackspace,
  FaBug,
  FaClipboard,
  FaHandScissors,
  FaShare,
  FaSortAlphaDown,
  FaSortAlphaUp,
} from "react-icons/fa";
import { Slide } from "@mui/material";
import SnackComponent from "../components/Snackbar/Snackbar";
import ModalCallOutComponent from "../components/ModalBox";
import NavbarComponent from "../router/Navbar";

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

function ModalCallOut() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <>
      <Button color={"error"} auto size="sm" onPress={handler}>
        Have any problem
        <span className="mx-2">
          <FaBug />
        </span>
      </Button>
      <ModalCallOutComponent
        visible={visible}
        handler={handler}
        closeHandler={closeHandler}
      />
    </>
  );
}

const HomePage = (props) => {
  const [changeText, setChangeText] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);

  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [alertMessage, setAlertMessage] = React.useState("");

  const showAlert = (message, type) => {
    setAlertMessage({
      message: message,
      type: type,
    });
  };

  const upperCase = (e) => {
    setChangeText(changeText.toUpperCase());
    showAlert("Changed to uppercase", "success");
  };

  const calculateReadTmie = () => {};

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
    showAlert("Copied to clipboard", "success");
  };

  const handleClearCanvas = () => {
    let newText = " ";
    showAlert("Cleared the canvas", "success");
    setChangeText(newText);
  };

  const handleLowerCase = () => {
    showAlert("Changed to lowercase", "success");
    setChangeText(changeText.toLowerCase());
  };

  const handleExtraSpaces = () => {
    var text = changeText.split(/[ ]+/);
    showAlert("Cleared extra spaces", "success");
    setChangeText(text.join(" "));
  };

  return (
    <>
      <div className="container bg-none my-5">
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
                <Button
                  size={"sm"}
                  auto
                  onPress={upperCase}
                  onClick={handleClick(TransitionUp)}
                >
                  Convert uppercase <FaSortAlphaUp />
                </Button>
                <Button
                  size={"sm"}
                  auto
                  onPress={handleLowerCase}
                  onClick={handleClick(TransitionUp)}
                >
                  Convert lowercase <FaSortAlphaDown />
                </Button>
                <Button
                  onClick={handleClick(TransitionUp)}
                  size={"sm"}
                  auto
                  onPress={handleClearCanvas}
                >
                  Clear canvas <FaHandScissors />
                </Button>
              </Button.Group>
              <Button.Group rounded color="primary">
                <Button
                  size={"sm"}
                  auto
                  onClick={handleClick(TransitionUp)}
                  onPress={handleCopyClip}
                >
                  Copy to clipboard{" "}
                  <span className="mx-1">
                    <FaClipboard />
                  </span>
                </Button>

                <Button
                  size={"sm"}
                  auto
                  onPress={handleExtraSpaces}
                  onClick={handleClick(TransitionUp)}
                >
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
                <ModalCallOut />
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
      <SnackComponent
        handleClick={handleClick(TransitionUp)}
        open={open}
        handleClose={handleClose}
        transition={transition}
        type={"success"}
        variant={alertMessage.variant}
        message={alertMessage.message}
      />
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
