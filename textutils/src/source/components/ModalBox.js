import React from "react";
import {
  Modal,
  Button,
  Image,
  Text,
  Link,
  Container,
  Input,
  Row,
  Checkbox,
  Textarea,
  Spacer,
} from "@nextui-org/react";
import { FaBug } from "react-icons/fa";

export default function ModalCallOutComponent(props) {
  return (
    <div>
      <Modal
        open={props.visible}
        onClose={props.closeHandler}
        css={{ padding: 10 }}
        closeButton
        blur
        aria-labelledby="modal-title"
      >
        <Modal.Header>
          <Text h5 id="modal-title">
            Encounterd by any bug ? <FaBug />
          </Text>
        </Modal.Header>

        <Modal.Body>
          <Spacer y={0.22} />
          <Input
            clearable
            fullWidth
            color="primary"
            size="md"
            labelPlaceholder="Your Email"
          />
          <Spacer y={0.22} />

          <Input
            clearable
            fullWidth
            color="primary"
            size="md"
            labelPlaceholder="Your name"
          />
          <Spacer y={0.22} />

          <Textarea labelPlaceholder="Describe your issue" />
          <Row justify="space-between">
            <Checkbox>
              <Text h6 size={14} className="my-1">
                Remember me
              </Text>
            </Checkbox>
            <Text h6 size={14} className="my-1">
              Forget password ?
            </Text>
          </Row>
          <Text
            size={14}
            h6
            className="text-dark fw-light"
            style={{ lineHeight: 1.2 }}
          >
            Note : By clicking on submit, you're agree to our{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Terms and conditions
            </a>{" "}
            to agree for inspecting the issue, We will fix the bug as soon as
            possible with an alert mail to the reporter
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto color="secondary" size="sm">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
