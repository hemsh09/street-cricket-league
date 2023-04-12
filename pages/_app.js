import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { ThemeProvider } from "@material-ui/styles";

import theme from "../src/static/theme";
import { AppWrapper } from "../context/context";

import "../src/static/styles/common.css";
import "../src/static/styles/reset.css";
import "../styles/globals.css";

const LayoutWrapper = dynamic(() => import("../src/Common/LayoutWrapper"));

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   // Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector("#jss-server-side");
  //   if (jssStyles) {
  //     jssStyles.parentElement.removeChild(jssStyles);
  //   }
  // }, []);
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default MyApp;
