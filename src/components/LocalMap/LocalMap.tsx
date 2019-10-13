import React from "react";
import MapGl, { Marker, NavigationControl } from "react-map-gl";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import isEmpty from "lodash/isEmpty";

// Components
import { MapPin } from "../MapPin";
import { LocalMapPopup } from "../LocalMapPopup";

// Material UI Component
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      margin: theme.spacing(2, 1)
    },
    navControl: {
      position: "absolute",
      top: "1em",
      right: "1em"
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

const LocalMap = ({ latitude, longitude, markers }: any) => {
  const classes = useStyles();
  const [popup, setPopup]: any = React.useState({});
  const [isChecked, setIsChecked] = React.useState(false);
  const [viewport, setViewport] = React.useState({
    latitude,
    longitude,
    zoom: 12
  });

  React.useEffect(() => {
    setViewport({
      zoom: 12,
      latitude,
      longitude
    });
  }, [latitude, longitude]);

  const toggleMapStyle = () => {
    setIsChecked(prev => !prev);
  };

  const _onViewportChange = (viewport: any) => setViewport(viewport);

  const _renderPopup = () => {
    const { lat, lng, category, name } = popup;
    return (
      !isEmpty(popup) && (
        <LocalMapPopup
          latitude={lat}
          longitude={lng}
          category={category}
          name={name}
          onClose={() => setPopup({})}
        />
      )
    );
  };

  const handlePinClick = (marker: any) => {
    setPopup(marker);
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <MapGl
          scrollZoom={false}
          mapStyle={
            isChecked
              ? "mapbox://styles/mapbox/satellite-v9"
              : "mapbox://styles/mapbox/streets-v11"
          }
          {...viewport}
          height="500px"
          width="100%"
          onViewportChange={_onViewportChange}
          mapboxApiAccessToken="pk.eyJ1IjoiamhtY2theTkzIiwiYSI6ImNqd29oc2hzdjF3YnM0Ym4wa3o4azFhd2MifQ.dqrE-W1cXNGKpV5FGPZFww"
        >
          {isEmpty(markers) ? (
            <Marker latitude={latitude} longitude={longitude}>
              <MapPin />
            </Marker>
          ) : (
            markers.map((marker: any) => (
              <Marker
                key={`local-map-marker-${marker.id}`}
                latitude={marker.lat}
                longitude={marker.lng}
              >
                <MapPin onClick={() => handlePinClick(marker)} />
              </Marker>
            ))
          )}
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
      </CardContent>
    </Card>
  );
};

export default LocalMap;
