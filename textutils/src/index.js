import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import NavbarComponent from "./source/router/Navbar";
import reportWebVitals from "./reportWebVitals";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./source/content/Home";
import NewsPage from "./source/content/NewsPage";

const lightTheme = createTheme({
  type: "light",
});

const darkTheme = createTheme({
  type: "dark",
});

const router = createBrowserRouter([
  {
    path: "/",
    element: [<HomePage headingContent="Textutils" />],
  },
  {
    path: "/newsApp",
    element: <NewsPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <NextThemesProvider
    attribute="class"
    value={{
      light: lightTheme.className,
      dark: darkTheme.className,
    }}
  >
    <NextUIProvider>
      <RouterProvider router={router} />
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </NextUIProvider>
  </NextThemesProvider>
);

reportWebVitals(console.log);
/*
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals 
*/
