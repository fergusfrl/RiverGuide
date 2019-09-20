import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

// Material UI Components
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

// Material UI Icons
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttons: {
      [theme.breakpoints.down("xs")]: {
        display: "none"
      }
    },
    leftButton: {
      marginRight: "1em"
    },
    menuIcon: {
      [theme.breakpoints.up("sm")]: {
        display: "none"
      }
    }
  })
);

const Auth = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.buttons}>
        <Button
          size="small"
          variant="contained"
          color="primary"
          className={classes.leftButton}
        >
          Get Started
        </Button>
        <Button size="small">Sign In</Button>
      </div>
      <div className={classes.menuIcon}>
        <IconButton>
          <MenuIcon />
        </IconButton>
      </div>
    </>
  );
};

export default Auth;
