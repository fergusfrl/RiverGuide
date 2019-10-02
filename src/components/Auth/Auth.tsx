import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

// Material UI Components
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

// Material UI Icons
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttons: {
      [theme.breakpoints.down("xs")]: {
        display: "none"
      }
    },
    rightButton: {
      marginLeft: "1em"
    },
    menuIcon: {
      [theme.breakpoints.up("sm")]: {
        display: "none"
      }
    }
  })
);

const AuthMenu = ({ anchorEl, handleClose }: any) => {
  return (
    <Menu open={Boolean(anchorEl)} onClose={handleClose} anchorEl={anchorEl}>
      <MenuItem onClick={handleClose}>Get Started</MenuItem>
      <MenuItem onClick={handleClose}>Sign Up</MenuItem>
    </Menu>
  );
};

const Auth = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function toggleMenu(event: any) {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  }

  return (
    <>
      <div className={classes.buttons}>
        <Button size="small" variant="contained" color="primary">
          Get Started
        </Button>
        <Button size="small" className={classes.rightButton}>
          Sign In
        </Button>
      </div>
      <div className={classes.menuIcon}>
        <IconButton onClick={toggleMenu}>
          <MenuIcon />
        </IconButton>
      </div>
      <AuthMenu anchorEl={anchorEl} handleClose={toggleMenu} />
    </>
  );
};

export default Auth;
