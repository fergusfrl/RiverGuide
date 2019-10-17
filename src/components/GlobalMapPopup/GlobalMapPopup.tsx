import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

// Actions
import { setDetails } from "../Details/actions";

// Material UI Components
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles(() =>
  createStyles({
    popup: {
      minWidth: "250px"
    }
  })
);

const GlobalMapPopup = ({ river, closePopup, setDetails, flows }: any) => {
  const classes = useStyles();

  const handleClick = () => {
    setDetails(river);
  };

  return (
    <ClickAwayListener onClickAway={closePopup}>
      <div className={classes.popup}>
        <Typography variant="h6">{river.section_name}</Typography>
        <Typography
          variant="subtitle1"
          color="textSecondary"
        >{`${river.river_name}, ${river.region}`}</Typography>
        {flows.find((site: any) => site.id === river.gauge_id) && (
          <Chip
            label={`${flows
              .find((site: any) => site.id === river.gauge_id)
              .value.toFixed(1)} cumecs`}
          />
        )}

        <Button
          variant="text"
          size="small"
          color="primary"
          onClick={handleClick}
        >
          See More
        </Button>
      </div>
    </ClickAwayListener>
  );
};

const mapStateToProps = (state: any) => ({
  flows: state.rivers.telemetryData
    .filter((tele: any) =>
      tele.observables.find((site: any) => site.type === "flow")
    )
    .map((tele: any) => {
      const value = tele.observables.find((site: any) => site.type === "flow");
      return {
        id: tele.id,
        value: value && value.latest_value
      };
    })
});

export default connect(
  mapStateToProps,
  { setDetails }
)(GlobalMapPopup);
