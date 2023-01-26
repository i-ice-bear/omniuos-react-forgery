import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import { Stack } from "@mui/system";
import { Alert } from "@mui/material";

export default function SnackComponent(props) {
  
  return (
    <div>
      <Stack sx={{ maxWidth: 3000 }} >
        <Snackbar
          open={props.open}
          onClose={props.handleClose}
          TransitionComponent={props.transition}
          message={props.message}
          key={props.transition ? props.transition.name : ""}
        >
          <Alert  onClose={props.handleClose} severity={props.type} type="filled">
            {props.message}
          </Alert>
        </Snackbar>
      </Stack>
    </div>
  );
}
