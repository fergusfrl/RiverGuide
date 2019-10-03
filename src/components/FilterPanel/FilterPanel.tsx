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

const FilterPanel = ({ open, closeFilter, grades, clearFilters }: any) => {
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
      <FilterItem values={grades} name="Grades" />
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
  grades: uniq(
    state.rivers.rivers
      .filter((river: any) => river.key_facts_char.grade_overall)
      .map((river: any) => river.key_facts_char.grade_overall)
      .filter((grade: string) => grade.length < 3)
  ).sort()
});

export default connect(
  mapStateToProps,
  {}
)(FilterPanel);
