import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

// Material UI Components
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() =>
  createStyles({
    popup: {
      minWidth: "250px"
    }
  })
);

const GlobalMapPopup = ({ river, closePopup, openDetails }: any) => {
  const classes = useStyles();
  return (
    <ClickAwayListener onClickAway={closePopup}>
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
    </ClickAwayListener>
  );
};

export default GlobalMapPopup;
