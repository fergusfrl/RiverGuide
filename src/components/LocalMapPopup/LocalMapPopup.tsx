import React from "react";
import { Popup } from "react-map-gl";

// Material UI Components
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

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
        <Grid container spacing={1}>
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
        </Grid>
      </>
    </Popup>
  );
};

export default LocalMapPopup;
