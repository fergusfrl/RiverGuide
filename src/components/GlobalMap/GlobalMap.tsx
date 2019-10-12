import React from "react";
import MapGl, { Marker, Popup } from "react-map-gl";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import isEmpty from "lodash/isEmpty";

// Components
import { MapPin } from "../MapPin";

// Material UI Components
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    map: {},
    popup: {
      minWidth: "250px"
    }
  })
);

const GlobalMap = ({ rivers, setDetails }: any) => {
  const [viewport, setViewport] = React.useState({
    latitude: -40.5,
    longitude: 172.186,
    zoom: 4.8
  });
  const [popup, setPopup]: any = React.useState({});

  const classes = useStyles();

  const handlePinClick = (marker: any) => {
    setDetails(marker);
  };

  const handlePinMouseOver = (marker: any) => {
    setPopup(marker);
  };

  const _onViewportChange = (viewport: any) => setViewport(viewport);

  const _renderPopup = () => {
    return (
      !isEmpty(popup) && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popup.longitude}
          latitude={popup.latitude}
          closeOnClick={false}
          onClose={() => setPopup({})}
        >
          <div className={classes.popup}>
            <Typography variant="h6">{popup.section_name}</Typography>
            <Typography
              variant="subtitle1"
              color="textSecondary"
            >{`${popup.river_name}, ${popup.region}`}</Typography>
            <Button
              variant="text"
              size="small"
              color="primary"
              onClick={(e: any) => handlePinClick(popup)}
            >
              See More
            </Button>
          </div>
        </Popup>
      )
    );
  };

  return (
    <MapGl
      className={classes.map}
      {...viewport}
      width="100%"
      height="100vh"
      onViewportChange={_onViewportChange}
      mapboxApiAccessToken="pk.eyJ1IjoiamhtY2theTkzIiwiYSI6ImNqd29oc2hzdjF3YnM0Ym4wa3o4azFhd2MifQ.dqrE-W1cXNGKpV5FGPZFww"
    >
      {rivers.map((river: any) => (
        <Marker
          key={`map-pin-${river.river_name}-${river.section_name}`}
          latitude={river.latitude}
          longitude={river.longitude}
        >
          <MapPin
            onClick={() => handlePinClick(river)}
            onMouseOver={() => handlePinMouseOver(river)}
          />
        </Marker>
      ))}
      {_renderPopup()}
    </MapGl>
  );
};

export default GlobalMap;
