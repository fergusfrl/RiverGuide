import React from "react";
import theme from "./theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { NavBar } from "./components/NavBar";
import { List } from "./components/List";

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <List />
    </MuiThemeProvider>
  );
};

export default App;
