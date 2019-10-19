import React from "react";
import { connect } from "react-redux";
import ReactMapboxGl, {
  Cluster,
  Marker,
  Popup,
  ZoomControl
} from "react-mapbox-gl";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";

// Actions
import { setCenter, setZoom } from "./actions";

// Components
import { MapPin } from "../MapPin";
import { GlobalMapPopup } from "../GlobalMapPopup";

// Material UI Components
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiamhtY2theTkzIiwiYSI6ImNqd29oc2hzdjF3YnM0Ym4wa3o4azFhd2MifQ.dqrE-W1cXNGKpV5FGPZFww"
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    map: {
      paddingTop: theme.spacing(3),
      [theme.breakpoints.down("xs")]: {
        paddingTop: 0
      }
    },
    cluster: {
      cursor: "pointer",
      borderRadius: "50%",
      minWidth: 30,
      minHeight: 30,
      maxWidth: 70,
      maxHeight: 70,
      backgroundColor: "#1e87e5",
      opacity: 0.7,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "5px solid #78b7ef"
    },
    mapMarker: {
      cursor: "pointer"
    },
    mapSectionName: {
      position: "absolute",
      margin: "-26px 0 0 25px",
      maxWidth: 300,
      fontWeight: "bold",
      WebkitTextStroke: "1px white"
    },
    switch: {
      position: "absolute",
      bottom: theme.spacing(3),
      right: theme.spacing(1)
    },
    checkedLabel: {
      color: "white"
    },
    invertText: {
      WebkitTextStroke: "1px black",
      color: "white"
    },
    zoomControl: {
      margin: theme.spacing(0, 1, 8, 0)
    }
  })
);

const GlobalMap = ({ rivers, zoom, center, setZoom, setCenter }: any) => {
  const classes = useStyles();
  // const [zoom, setZoom] = React.useState(5);
  // const [center, setCenter]: any = React.useState([172.186, -40.5]);
  const [isChecked, setIsChecked] = React.useState(false);
  const [popup, setPopup]: any = React.useState({
    open: false,
    river: {}
  });

  const handleZoom = (mapConfig: any) => {
    setZoom(mapConfig.getZoom());
    setCenter(mapConfig.getCenter());
  };

  const handleMarkerClick = (river: any) => {
    setPopup({
      open: true,
      river
    });
  };

  const handlePopupClose = () => {
    setPopup({
      ...popup,
      open: false
    });
  };

  const toggleMapStyle = () => {
    setIsChecked(prev => !prev);
  };

  const marker = (river: any, index: number) => (
    <Marker
      className={classes.mapMarker}
      coordinates={[river.longitude, river.latitude]}
      key={`map-marker-${index}`}
      onClick={() => handleMarkerClick(river)}
    >
      <>
        <MapPin />
        <Typography
          noWrap
          className={clsx(classes.mapSectionName, {
            [classes.invertText]: isChecked
          })}
        >
          {river.section_name}
        </Typography>
      </>
    </Marker>
  );

  const clusterMarker = (coordinates: number[], pointCount: number) => {
    const size = pointCount * zoom + 15;
    return (
      <Marker
        key={`map-cluster-lat=${coordinates[1]}lon=${coordinates[0]}`}
        coordinates={coordinates}
        className={classes.cluster}
        style={{ width: size, height: size }}
      >
        <Typography color="secondary">{pointCount}</Typography>
      </Marker>
    );
  };

  return (
    <Map
      // eslint-disable-next-line
      style={
        isChecked
          ? "mapbox://styles/mapbox/satellite-streets-v9"
          : "mapbox://styles/mapbox/streets-v11"
      }
      className={classes.map}
      center={center}
      zoom={[zoom]}
      onZoomEnd={handleZoom}
      containerStyle={{
        height: "100vh",
        width: "100%"
      }}
    >
      <Cluster
        zoomOnClick
        zoomOnClickPadding={70}
        radius={70}
        ClusterMarkerFactory={clusterMarker}
      >
        {rivers.map((river: any, index: number) => marker(river, index))}
      </Cluster>
      {popup.open && (
        <Popup coordinates={[popup.river.longitude, popup.river.latitude]}>
          <GlobalMapPopup closePopup={handlePopupClose} river={popup.river} />
        </Popup>
      )}
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
      <ZoomControl
        className={classes.zoomControl}
        zoomDiff={1.3}
        position="bottom-right"
      />
    </Map>
  );
};

const mapStateToProps = (state: any) => ({
  zoom: state.map.zoom,
  center: state.map.center
});

export default connect(
  mapStateToProps,
  { setZoom, setCenter }
)(GlobalMap);
