import { Box } from "./Box.js";
import HomePage from "../content/Home.js";

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: "100%",
    }}
  >
    {children}
    <HomePage headingContent={"Textutils"}/>
  </Box>
);
