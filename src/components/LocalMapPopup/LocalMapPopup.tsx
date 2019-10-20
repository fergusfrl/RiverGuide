import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

// Material UI Components
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

// Material UI Icons
import DirectionsIcon from "@material-ui/icons/Directions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    popup: {
      minWidth: "250px"
    },
    latlng: {}
  })
);

const LocalMapPopup = ({
  longitude,
  latitude,
  category,
  description,
  name,
  closePopup
}: any) => {
  const classes = useStyles();

  return (
    <ClickAwayListener onClickAway={closePopup}>
      <div className={classes.popup}>
        <Grid container spacing={1} justify="space-between">
          <Grid item>
            <Grid container direction="column">
              <Typography color="primary" variant="subtitle1">
                {category}
              </Typography>
              <Grid item>{name}</Grid>
              <Grid item>{description}</Grid>
              <Grid item>{`${latitude}, ${longitude}`}</Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Tooltip title="Directions (Google Maps)">
              <IconButton
                href={`https://maps.google.com/?q=${latitude},${longitude}`}
                target="_blank"
              >
                <DirectionsIcon />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </div>
    </ClickAwayListener>
  );
};

export default LocalMapPopup;
