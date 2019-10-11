import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

// Material UI Components
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      margin: theme.spacing(2, 1)
    },
    value: {
      fontWeight: 100
    }
  })
);

const WeatherCard = ({ currentTemp, sunrise, sunset, lastUpdated }: any) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container justify="flex-start" spacing={1}>
          <Grid item>
            <Typography className={classes.value} variant="h4">
              {currentTemp}
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.value} variant="h6">
              °C
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="space-between">
          <Grid item>
            <Typography color="textSecondary">{`Sunrise ${sunrise}`}</Typography>
          </Grid>
          <Grid item>
            <Typography color="textSecondary">{`Sunset ${sunset}`}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption" color="textSecondary">
              Last Updated: {lastUpdated}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
