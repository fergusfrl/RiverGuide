import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

// Component UI Components
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";

// Material UI Icons
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    details: {
      backgroundColor: "#fafafa",
      padding: theme.spacing(0, 3, 3, 3)
    },
    contentAppBar: {
      backgroundColor: "#fafafa",
      padding: theme.spacing(11, 0, 1, 0),
      boxShadow: "none"
    },
    attributeChip: {
      margin: "1em 1em 1em 0"
    }
  })
);

const DetailsHeader = ({
  title,
  river_name,
  region,
  clearDetails,
  attr
}: any) => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="sticky" className={classes.contentAppBar}>
        <Grid container justify="space-between">
          <Grid item>
            <Typography variant="h4" color="primary">
              {title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {river_name + ", " + region}
            </Typography>
          </Grid>
          <Grid item>
            {/* TODO: add star / unstar icon when logged in */}
            <IconButton onClick={clearDetails}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
      </AppBar>
      {attr.map((item: any, index: number) => (
        <Chip
          key={`${item.label}-${index}`}
          className={classes.attributeChip}
          color="primary"
          variant="outlined"
          label={
            <div>
              <b>{item.label}</b> {item.value}
            </div>
          }
        />
      ))}
    </>
  );
};

export default DetailsHeader;
