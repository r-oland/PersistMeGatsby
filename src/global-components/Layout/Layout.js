// Components==============
import React from "react";
import { setConfig } from "react-hot-loader";
import { hot } from "react-hot-loader/root";
import { ThemeProvider } from "styled-components";
import { FirebaseContext, useFirebase } from "../../firebase";
import GlobalStyles from "../../style/GlobalStyles";
import { Variables } from "../../style/themes";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import IEWarning from "./IE/IEWarning";

setConfig({
  showReactDomPatchNotification: false,
});
// =========================

function Layout({ children, location }) {
  const { user, firebase, loading } = useFirebase();

  // CODE ABOVE THIS LINE
  if (location.pathname === "/offline-plugin-app-shell-fallback") return null;
  return (
    <ThemeProvider theme={Variables}>
      <FirebaseContext.Provider value={{ user, firebase, loading }}>
        <IEWarning />
        <Nav />
        {children}
        <Footer />
        <GlobalStyles />
      </FirebaseContext.Provider>
    </ThemeProvider>
  );
}

export default hot(Layout);
