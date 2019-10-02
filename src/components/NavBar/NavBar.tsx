import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

// Components
import { Auth } from "../Auth";

// Material UI Components
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

// Maertial UI Icons
import MenuIcon from "@material-ui/icons/Menu";

import Logo from "../..//logo.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appbar: { zIndex: theme.zIndex.drawer + 1 },
    listIcon: {
      [theme.breakpoints.down("xs")]: {
        display: "none"
      }
    },
    logo: {
      width: "50px",
      height: "50px",
      margin: ".3em 1em 0 0"
    }
  })
);

const NavBar = ({ toggleListOpen }: any) => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="secondary" className={classes.appbar}>
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <Grid item className={classes.listIcon}>
            <IconButton color="primary" onClick={toggleListOpen}>
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Grid container alignItems="center">
              <Grid item>
                <img
                  className={classes.logo}
                  src={Logo}
                  alt="logo with rivers and mountains"
                />
              </Grid>
              <Grid item>
                <Typography variant="h5" color="primary">
                  River Guide
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Auth />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
