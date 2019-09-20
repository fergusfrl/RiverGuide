import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

// Material UI Components
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

// Maertial UI Icons
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appbar: { zIndex: theme.zIndex.drawer + 1 },
    listIcon: {
      [theme.breakpoints.down("xs")]: {
        display: "none"
      }
    },
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

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="secondary" className={classes.appbar}>
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <Grid item className={classes.listIcon}>
            <IconButton color="primary">
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h5" color="primary">
              River Guide
            </Typography>
          </Grid>
          <Grid item>
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
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
