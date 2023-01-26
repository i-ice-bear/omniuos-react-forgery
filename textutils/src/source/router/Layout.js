import { Box } from "./Box.js";
import HomePage from "../content/Home.js";

export const Layout = ({ children }) => (
  <div
  >
    {children}
    <HomePage headingContent={"Textutils"} />
  </div>
);
