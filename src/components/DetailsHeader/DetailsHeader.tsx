import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";

// Component UI Components
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";

// Material UI Icons
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    details: {
      backgroundColor: "#fafafa",
      padding: theme.spacing(0, 3, 3, 3)
    },
    appBar: {
      backgroundColor: "#fafafa",
      padding: theme.spacing(2, 0, 1, 0),
      boxShadow: "none"
    },
    contentAppBar: {
      paddingTop: theme.spacing(11)
    },
    attributeChip: {
      margin: theme.spacing(1, 1, 0, 0)
    },
    divider: {
      marginTop: theme.spacing(2)
    }
  })
);

const DetailsHeader = ({
  title,
  river_name,
  region,
  clearDetails,
  attr,
  isDialog
}: any) => {
  const classes = useStyles();
  return (
    <>
      <AppBar
        position="sticky"
        className={clsx(classes.appBar, !isDialog && classes.contentAppBar)}
      >
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
      <Divider className={classes.divider} />
    </>
  );
};

export default DetailsHeader;
