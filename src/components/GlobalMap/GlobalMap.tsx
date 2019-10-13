import React from "react";
import MapGl, { Marker, NavigationControl } from "react-map-gl";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import isEmpty from "lodash/isEmpty";

// Components
import { MapPin } from "../MapPin";
import { GlobalMapPopup } from "../GlobalMapPopup";

// Material UI Components
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    map: {},
    navControl: {
      position: "absolute",
      bottom: theme.spacing(8),
      right: theme.spacing(2)
    },
    styleControl: {
      position: "absolute",
      bottom: theme.spacing(3),
      right: theme.spacing(1)
    },
    checkedLabel: {
      color: "white"
    }
  })
);

const GlobalMap = ({ rivers, setDetails }: any) => {
  const [popup, setPopup]: any = React.useState({});
  const [isChecked, setIsChecked] = React.useState(false);
  const [viewport, setViewport] = React.useState({
    latitude: -40.5,
    longitude: 172.186,
    zoom: 4.8
  });
  const matches = useMediaQuery((theme: any) => theme.breakpoints.down("xs"));

  const classes = useStyles();

  const toggleMapStyle = () => {
    setIsChecked(prev => !prev);
  };

  const openDetails = (marker: any) => {
    setDetails(marker);
  };

  const handlePinClick = (marker: any) => {
    if (matches) {
      setPopup(marker);
    } else {
      openDetails(marker);
    }
  };

  const handlePinMouseOver = (marker: any) => {
    if (!matches) setPopup(marker);
  };

  const _onViewportChange = (viewport: any) => setViewport(viewport);

  const _renderPopup = () => {
    return (
      !isEmpty(popup) && (
        <GlobalMapPopup
          river={popup}
          setPopup={setPopup}
          openDetails={openDetails}
        />
      )
    );
  };

  return (
    <MapGl
      className={classes.map}
      mapStyle={
        isChecked
          ? "mapbox://styles/mapbox/satellite-v9"
          : "mapbox://styles/mapbox/streets-v11"
      }
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
      <div className={classes.navControl}>
        <NavigationControl />
      </div>
      <div className={classes.styleControl}>
        <FormControlLabel
          control={
            <Switch
              checked={isChecked}
              onChange={toggleMapStyle}
              color="primary"
            />
          }
          label={
            <Typography className={clsx(isChecked && classes.checkedLabel)}>
              Satellite
            </Typography>
          }
        />
      </div>
    </MapGl>
  );
};

export default GlobalMap;
