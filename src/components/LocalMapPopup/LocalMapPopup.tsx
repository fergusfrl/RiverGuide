import React from "react";
import { Popup } from "react-map-gl";

// Material UI Components
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const LocalMapPopup = ({
  longitude,
  latitude,
  category,
  name,
  onClose
}: any) => {
  return (
    <Popup
      tipSize={5}
      anchor="top"
      longitude={longitude}
      latitude={latitude}
      onClose={onClose}
    >
      <>
        <Typography color="primary" variant="subtitle1">
          {category}
        </Typography>
        <Typography variant="h5">{name}</Typography>
        <Grid container direction="column" spacing={1}>
          <Grid item>
            <Typography
              paragraph
              color="textSecondary"
            >{`lat: ${latitude}`}</Typography>
          </Grid>
          <Grid item>
            <Typography
              paragraph
              color="textSecondary"
            >{`lon: ${longitude}`}</Typography>
          </Grid>
          <Grid item>
            <Button
              variant="text"
              href={`https://maps.google.com/?q=${latitude},${longitude}`}
              target="_blank"
            >
              Google Maps
            </Button>
          </Grid>
        </Grid>
      </>
    </Popup>
  );
};

export default LocalMapPopup;
