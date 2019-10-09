import React from "react";
import { connect } from "react-redux";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";

// Constants
import { drawerWidth } from "../../constants";

// Components
import { Details } from "../Details";

// Material UI Components
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: drawerWidth
    }
  })
);

const Content = ({ listOpen, detailsOpen }: any) => {
  const classes = useStyles();

  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: listOpen
      })}
    >
      {/* <Map /> */}
      <Slide
        direction="right"
        in={detailsOpen}
        timeout={400}
        mountOnEnter
        unmountOnExit
      >
        <div>
          <Details />
        </div>
      </Slide>
    </main>
  );
};

const mapStateToProps = (state: any) => ({
  detailsOpen: state.details.isSelected
});

export default connect(
  mapStateToProps,
  {}
)(Content);
