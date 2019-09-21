import React from "react";
import theme from "./theme";

// Material UI
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

// Redux
import { Provider } from "react-redux";
import store from "./store";

import { NavBar } from "./components/NavBar";
import { List } from "./components/List";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <List />
      </MuiThemeProvider>
    </Provider>
  );
};

export default App;
