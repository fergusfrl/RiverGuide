import React from "react";
import { connect } from "react-redux";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";

// Utils
import { applySearchValues, applyFilterValues } from "../../utils";

// Constants
import { drawerWidth } from "../../constants";

// Components
import { Details } from "../Details";
import { GlobalMap } from "../GlobalMap";

// Material UI Components
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      [theme.breakpoints.down("xs")]: {
        width: "100%"
      }
    },
    contentShift: {
      marginLeft: drawerWidth
    }
  })
);

const Transition: any = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Content = ({ listOpen, detailsOpen, rivers }: any) => {
  const classes = useStyles();
  const matches = useMediaQuery((theme: any) => theme.breakpoints.down("xs"));

  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: listOpen
      })}
    >
      {!detailsOpen && !matches && <GlobalMap rivers={rivers} />}
      {matches ? (
        <Dialog fullScreen open={detailsOpen} TransitionComponent={Transition}>
          <Details isDialog />
        </Dialog>
      ) : (
        <Slide
          direction="right"
          in={detailsOpen}
          timeout={400}
          mountOnEnter
          unmountOnExit
        >
          <div>
            <Details isDialog={false} />
          </div>
        </Slide>
      )}
    </main>
  );
};

const mapStateToProps = (state: any) => ({
  detailsOpen: state.details.isSelected,
  rivers: state.rivers.rivers
    .filter(applySearchValues(state.rivers.searchStr))
    .filter(applyFilterValues(state.filters))
});

export default connect(
  mapStateToProps,
  {}
)(Content);
