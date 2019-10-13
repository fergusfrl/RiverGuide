import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Popup } from "react-map-gl";

// Material UI Components
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    popup: {
      minWidth: "250px"
    }
  })
);

const GlobalMapPopup = ({ river, setPopup, openDetails }: any) => {
  const classes = useStyles();
  return (
    <Popup
      tipSize={5}
      anchor="top"
      latitude={river.latitude}
      longitude={river.longitude}
      closeOnClick={false}
      onClose={() => setPopup({})}
    >
      <div className={classes.popup}>
        <Typography variant="h6">{river.section_name}</Typography>
        <Typography
          variant="subtitle1"
          color="textSecondary"
        >{`${river.river_name}, ${river.region}`}</Typography>
        <Button
          variant="text"
          size="small"
          color="primary"
          onClick={(e: any) => openDetails(river)}
        >
          See More
        </Button>
      </div>
    </Popup>
  );
};

export default GlobalMapPopup;
