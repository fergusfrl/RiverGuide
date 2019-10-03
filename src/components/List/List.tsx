import React from "react";
import { connect } from "react-redux";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import uniq from "lodash/uniq";
import isEmpty from "lodash/isEmpty";
import size from "lodash/size";
import keys from "lodash/keys";

// Actions
import { getRiverList } from "./actions";

// Constants
import { drawerWidth } from "../../constants";

// Components
import { ListHeader } from "../ListHeader";
import { ListRow } from "../ListRow";

// Material UI Components
import Drawer from "@material-ui/core/Drawer";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      [theme.breakpoints.down("xs")]: {
        width: "100%"
      }
    },
    drawerPaper: {
      width: drawerWidth,
      [theme.breakpoints.down("xs")]: {
        width: "100%"
      }
    },
    progress: {
      margin: "auto",
      marginTop: theme.spacing(3)
    },
    error: {
      margin: "auto",
      marginTop: theme.spacing(1),
      color: "#ef5350"
    }
  })
);

const List = ({
  open,
  regions,
  rivers,
  isLoading,
  hasError,
  getRiverList,
  openFilter
}: any) => {
  const classes = useStyles();

  React.useEffect(() => {
    getRiverList();
  }, [getRiverList]);

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <ListHeader openFilter={openFilter} />
      {hasError && (
        <Typography className={classes.error}>
          Something went wrong. Please Reload and try again.
        </Typography>
      )}
      {isLoading && <CircularProgress className={classes.progress} />}
      {regions.map((region: any) => {
        const regionRivers = rivers.filter(
          (river: any) => river.region === region
        );
        return (
          <ListRow
            key={`list-row-${region}`}
            region={region}
            rivers={regionRivers}
          />
        );
      })}
    </Drawer>
  );
};

const filterAndSearchRivers = (rivers: any, searchStr: string, filters: any) =>
  rivers
    .filter(
      (river: any) =>
        river.region.toLowerCase().includes(searchStr) ||
        river.river_name.toLowerCase().includes(searchStr) ||
        river.section_name.toLowerCase().includes(searchStr)
    )
    .filter((river: any) => {
      // this code works but is admittedly unreadable
      if (size(filters) === 0) return true;
      if (size(filters) > size(river.key_facts_char)) return false;

      return !isEmpty(
        keys(river.key_facts_char)
          .map((attr: any) => ({
            name: attr,
            value: river.key_facts_char[attr]
          }))
          .map(
            (fil: any) =>
              filters[fil.name] && filters[fil.name].includes(fil.value)
          )
          .filter((val: boolean) => val)
      );
    });

const mapStateToProps = (state: any) => ({
  regions: uniq(
    filterAndSearchRivers(
      state.rivers.rivers,
      state.rivers.searchStr,
      state.rivers.filters
    ).map((river: any) => river.region)
  ).sort(),
  rivers: filterAndSearchRivers(
    state.rivers.rivers,
    state.rivers.searchStr,
    state.rivers.filters
  ),
  isLoading: state.rivers.loading,
  hasError: state.rivers.error
});

export default connect(
  mapStateToProps,
  { getRiverList }
)(List);
