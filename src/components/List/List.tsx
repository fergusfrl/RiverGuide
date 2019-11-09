import React from "react";
import { connect } from "react-redux";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import uniq from "lodash/uniq";

// Utils
import {
  applySearchValues,
  applyGradeFilter,
  applyRunTimeFilter
} from "../../utils";

// Actions
import { getRiverList, getTelemetryData } from "./actions";
import { setDetails } from "../Details/actions";

// Constants
import { drawerWidth } from "../../constants";

// Components
import { ListHeader } from "../ListHeader";
import { ListRow } from "../ListRow";
import { GlobalMap } from "../GlobalMap";

// Material UI Components
import useMediaQuery from "@material-ui/core/useMediaQuery";
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
      border: "none",
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
  getTelemetryData,
  openFilter,
  setDetails
}: any) => {
  const classes = useStyles();
  const [isMapView, setIsMapView] = React.useState(false);

  const matches = useMediaQuery((theme: any) => theme.breakpoints.down("xs"));

  React.useEffect(() => {
    getRiverList();
    getTelemetryData();
  }, [getRiverList, getTelemetryData]);

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
      <ListHeader openFilter={openFilter} setMapView={setIsMapView} />
      {hasError && (
        <Typography className={classes.error}>
          Something went wrong. Please Reload and try again.
        </Typography>
      )}
      {isLoading && <CircularProgress className={classes.progress} />}
      {!matches || !isMapView ? (
        regions.map((region: any) => {
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
        })
      ) : (
        <GlobalMap rivers={rivers} setDetails={setDetails} />
      )}
    </Drawer>
  );
};

const filterAndSearchRivers = (rivers: any, searchStr: string, filters: any) =>
  rivers
    .filter(applySearchValues(searchStr))
    .filter(applyGradeFilter(filters.grade))
    .filter(applyRunTimeFilter(filters.runTime));

const mapStateToProps = (state: any) => ({
  regions: uniq(
    filterAndSearchRivers(
      state.rivers.rivers,
      state.rivers.searchStr,
      state.filters
    ).map((river: any) => river.region)
  ).sort(),
  rivers: filterAndSearchRivers(
    state.rivers.rivers,
    state.rivers.searchStr,
    state.filters
  ),
  isLoading: state.rivers.loading,
  hasError: state.rivers.error
});

export default connect(
  mapStateToProps,
  { getRiverList, getTelemetryData, setDetails }
)(List);
