import React from "react";
import { connect } from "react-redux";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import debounce from "lodash/debounce";

// Actions
import { searchRivers } from "./actions";

// Material UI Components
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";

// Material UI Icons
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import FilterIcon from "@material-ui/icons/FilterList";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listHeader: {
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      paddingTop: theme.spacing(8)
    },
    paper: {
      margin: "1.5em 1em 1.5em 1em",
      padding: "2px 4px",
      display: "flex",
      alignItems: "center"
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1
    },
    iconButton: {
      padding: 10
    },
    divider: {
      height: 28,
      margin: 4
    }
  })
);

const ListHeader = ({ searchRivers, openFilter }: any) => {
  const classes = useStyles();
  const [searchValue, setSearchValue] = React.useState("");

  function searchList(event: any) {
    handleSearch(event.target.value);
  }

  function handleClear() {
    if (searchValue) {
      handleSearch("");
    }
  }

  function handleSearch(value: string) {
    setSearchValue(value);
    debounce(() => searchRivers(value), 300)();
  }

  return (
    <AppBar position="sticky" className={classes.listHeader}>
      <Paper className={classes.paper} elevation={4}>
        <InputBase
          value={searchValue}
          className={classes.input}
          placeholder="Search"
          inputProps={{ "aria-label": "search google maps" }}
          onChange={searchList}
        />
        <IconButton
          className={classes.iconButton}
          onClick={handleClear}
          aria-label="search"
        >
          {searchValue ? <CloseIcon /> : <SearchIcon />}
        </IconButton>
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton
          className={classes.iconButton}
          aria-label="directions"
          onClick={openFilter}
        >
          <FilterIcon />
        </IconButton>
      </Paper>
    </AppBar>
  );
};

export default connect(
  null,
  { searchRivers }
)(ListHeader);
