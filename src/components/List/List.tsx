import React from "react";
import { connect } from "react-redux";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

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

const mapStateToProps = (state: any) => ({
  regions: Array.from(
    new Set(state.rivers.rivers.map((river: any) => river.region)).values()
  ).sort(),
  rivers: state.rivers.rivers,
  isLoading: state.rivers.loading,
  hasError: state.rivers.error
});

export default connect(
  mapStateToProps,
  { getRiverList }
)(List);
