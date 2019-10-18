import React from "react";
import { connect } from "react-redux";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import uniq from "lodash/uniq";

// Components
import { FilterItem } from "../FilterItem";

// Constants
import { drawerWidth } from "../../constants";

// Material UI Components
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

// Material UI Icons
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    subdrawerpaper: {
      width: drawerWidth - 1,
      paddingBottom: "2em",
      height: "100%",
      paddingTop: theme.spacing(8),
      [theme.breakpoints.down("xs")]: {
        width: "100%"
      }
    },
    title: {
      margin: ".5em 0 0 1em"
    },
    closeButton: {
      margin: ".1em .1em 0 0"
    },
    resetButton: {
      width: "100px",
      marginLeft: ".7em"
    },
    buttons: {
      backgroundColor: "white",
      position: "absolute",
      paddingBottom: "2em",
      bottom: "0"
    },
    filterButton: {
      margin: "1em 1em 0 0"
    }
  })
);

const FilterPanel = ({
  open,
  closeFilter,
  filterValues,
  clearFilters
}: any) => {
  const classes = useStyles();

  return (
    <Drawer
      anchor="bottom"
      variant="persistent"
      open={open}
      classes={{
        paper: classes.subdrawerpaper
      }}
    >
      <Grid container justify="space-between">
        <Grid item>
          <Typography variant="h6" className={classes.title}>
            Filters
          </Typography>
        </Grid>
        <Grid item>
          <IconButton onClick={closeFilter} className={classes.closeButton}>
            <CloseIcon />
          </IconButton>
        </Grid>
      </Grid>
      {Object.keys(filterValues).map((key: any, index: Number) => (
        <FilterItem
          key={`filter-item-${index}`}
          name={key}
          values={filterValues[key]}
        />
      ))}
      <Grid container justify="flex-end" className={classes.buttons}>
        <Grid item>
          <Button onClick={closeFilter} className={classes.filterButton}>
            Cancel
          </Button>
        </Grid>
        <Grid item>
          <Button
            onClick={closeFilter}
            className={classes.filterButton}
            variant="contained"
            color="primary"
          >
            Apply
          </Button>
        </Grid>
      </Grid>
    </Drawer>
  );
};

const mapStateToProps = (state: any) => ({
  filterValues: state.rivers.rivers
    .map((river: any) => river.key_facts_char)
    .reduce((acc: any, curr: any) => {
      Object.keys(curr).forEach((key: string) => {
        if (key in acc) {
          acc[key] = uniq([...acc[key], curr[key]]);
        } else {
          acc[key] = [curr[key]];
        }
      });
      return acc;
    }, {})
});

export default connect(
  mapStateToProps,
  {}
)(FilterPanel);
