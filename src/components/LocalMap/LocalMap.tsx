import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import ReactMapboxGl, { Marker, Popup, ZoomControl } from "react-mapbox-gl";
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

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiamhtY2theTkzIiwiYSI6ImNqd29oc2hzdjF3YnM0Ym4wa3o4azFhd2MifQ.dqrE-W1cXNGKpV5FGPZFww"
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      margin: theme.spacing(2, 1)
    },
    mapLabel: {
      position: "absolute",
      margin: "-32px 0 0 25px",
      maxWidth: 300,
      fontWeight: "bold",
      WebkitTextStroke: "1px white"
    },
    invertText: {
      WebkitTextStroke: "1px black",
      color: "white"
    },
    marker: {
      cursor: "pointer"
    },
    checkedLabel: {
      color: "white"
    },
    switch: {
      position: "absolute",
      bottom: theme.spacing(3),
      right: theme.spacing(1)
    },
    zoomControl: {
      margin: theme.spacing(0, 1, 8, 0)
    }
  })
);

const LocalMap = ({ latitude, longitude, markers }: any) => {
  const classes = useStyles();
  const [isChecked, setIsChecked] = React.useState(false);
  const [zoom, setZoom] = React.useState(11);
  const [center, setCenter]: any[] = React.useState([longitude, latitude]);
  const [popup, setPopup]: any = React.useState({
    open: false,
    marker: {}
  });

  React.useEffect(() => {
    setCenter([longitude, latitude]);
    setZoom(11);
  }, [latitude, longitude]);

  const handleZoom = (mapConfig: any) => {
    setZoom(mapConfig.getZoom());
    setCenter(mapConfig.getCenter());
  };

  const handleMarkerClick = (marker: any) => {
    setPopup({
      open: true,
      marker
    });
  };

  const handlePopupClickAway = () => {
    setPopup({
      ...popup,
      open: false
    });
  };

  const toggleMapStyle = () => {
    setIsChecked(prev => !prev);
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Map
          // eslint-disable-next-line
          style={
            isChecked
              ? "mapbox://styles/mapbox/satellite-streets-v9"
              : "mapbox://styles/mapbox/streets-v11"
          }
          onZoomEnd={handleZoom}
          center={center}
          zoom={[zoom]}
          containerStyle={{
            height: "400px",
            width: "100%"
          }}
        >
          {isEmpty(markers) ? (
            <Marker
              className={classes.marker}
              coordinates={[longitude, latitude]}
              onClick={() =>
                handleMarkerClick({
                  lng: longitude,
                  lat: latitude,
                  category: "Put In"
                })
              }
            >
              <>
                <MapPin />
                <Typography
                  variant="h6"
                  noWrap
                  className={clsx(classes.mapLabel, {
                    [classes.invertText]: isChecked
                  })}
                >
                  Put In
                </Typography>
              </>
            </Marker>
          ) : (
            markers.map((marker: any, index: number) => (
              <Marker
                className={classes.marker}
                key={`local-map-marker-${index}`}
                coordinates={[marker.lng, marker.lat]}
                onClick={() => handleMarkerClick(marker)}
              >
                <>
                  <MapPin />
                  <Typography
                    variant="h6"
                    noWrap
                    className={clsx(classes.mapLabel, {
                      [classes.invertText]: isChecked
                    })}
                  >
                    {marker.category}
                  </Typography>
                </>
              </Marker>
            ))
          )}
          <ZoomControl
            position="bottom-right"
            className={classes.zoomControl}
          />
          <FormControlLabel
            className={classes.switch}
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
          {popup.open && (
            <Popup coordinates={[popup.marker.lng, popup.marker.lat]}>
              <LocalMapPopup
                latitude={popup.marker.lat}
                longitude={popup.marker.lng}
                category={popup.marker.category}
                name={popup.marker.name}
                closePopup={handlePopupClickAway}
              />
            </Popup>
          )}
        </Map>
      </CardContent>
    </Card>
  );
};

export default LocalMap;
