import React from "react";
import MapGl, { Marker } from "react-map-gl";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

// Components
import { MapPin } from "../MapPin";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    map: {
      //   marginTop: theme.spacing(5)
    }
  })
);

const GlobalMap = ({ rivers }: any) => {
  const [viewport, setViewport] = React.useState({
    latitude: -40.5,
    longitude: 172.186,
    zoom: 4.8
  });

  const classes = useStyles();

  const _onViewportChange = (viewport: any) => setViewport(viewport);

  const handlePinClick = (marker: any) => {
    console.log(marker);
  };

  const handlePinMouseOver = (marker: any) => {
    console.log(marker);
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
          key={`map-pin-${river.section_name}`}
          latitude={river.latitude}
          longitude={river.longitude}
        >
          <MapPin
            onClick={() => handlePinClick(river)}
            onMouseOver={() => handlePinMouseOver(river)}
          />
        </Marker>
      ))}
    </MapGl>
  );
};

export default GlobalMap;
