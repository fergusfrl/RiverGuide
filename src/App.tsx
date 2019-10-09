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
import { FilterPanel } from "./components/FilterPanel";
import { Content } from "./components/Content";

const App: React.FC = () => {
  const [listOpen, setListOpen] = React.useState(true);
  const [filterOpen, setFilterOpen] = React.useState(false);

  function toggleListOpen() {
    setListOpen(prev => !prev);
  }

  function toggleFilterOpen() {
    setFilterOpen(prev => !prev);
  }

  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar toggleListOpen={toggleListOpen} />
        <List open={listOpen} openFilter={toggleFilterOpen} />
        <FilterPanel
          open={listOpen && filterOpen}
          closeFilter={toggleFilterOpen}
        />
        <Content listOpen={listOpen} />
      </MuiThemeProvider>
    </Provider>
  );
};

export default App;
