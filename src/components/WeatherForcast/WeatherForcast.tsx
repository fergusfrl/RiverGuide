import React from "react";
import moment from "moment";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

// Weather Icons
import { ReactComponent as CloudyIcon } from "../../img/weather/cloudy.svg";
import { ReactComponent as FogIcon } from "../../img/weather/fog.svg";
import { ReactComponent as PartlyCloudyIcon } from "../../img/weather/partlyCloudy.svg";
import { ReactComponent as RainIcon } from "../../img/weather/rain.svg";
import { ReactComponent as SunIcon } from "../../img/weather/sun.svg";
import { ReactComponent as SnowIcon } from "../../img/weather/snow.svg";
import { ReactComponent as SleetIcon } from "../../img/weather/sleet.svg";
import { ReactComponent as WindIcon } from "../../img/weather/wind.svg";

// Material UI Component
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      height: 20,
      width: 20
    },
    container: {
      width: "100%"
    }
  })
);

const WeatherItem = ({ dayOfTheWeek, high, low, icon }: any) => (
  <Grid container justify="space-between" spacing={2}>
    <Grid item>
      <Typography color="textSecondary">{dayOfTheWeek}</Typography>
    </Grid>
    <Grid item>
      <Grid container spacing={1}>
        <Grid item>{icon}</Grid>
        <Grid item>
          <Typography>{`${high}°`}</Typography>
        </Grid>
        <Grid item>
          <Typography color="textSecondary">{`/ ${low}°`}</Typography>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

const WeatherForcast = ({ weatherForcast }: any) => {
  const classes = useStyles();
  const matches = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));

  const weatherIconMap: { [key: string]: any } = {
    "clear-day": <SunIcon className={classes.icon} />,
    "clear-night": <SunIcon className={classes.icon} />,
    "partly-cloudy-day": <PartlyCloudyIcon className={classes.icon} />,
    rain: <RainIcon className={classes.icon} />,
    snow: <SnowIcon className={classes.icon} />,
    sleet: <SleetIcon className={classes.icon} />,
    wind: <WindIcon className={classes.icon} />,
    fog: <FogIcon className={classes.icon} />,
    cloudy: <CloudyIcon className={classes.icon} />
  };

  return (
    <Grid
      container
      direction={matches ? "column" : "row"}
      spacing={1}
      justify="space-between"
    >
      {weatherForcast.map((day: any) => (
        <Grid item>
          <WeatherItem
            dayOfTheWeek={moment.unix(day.time).format("dddd")}
            high={day.temperatureHigh}
            low={day.temperatureLow}
            icon={weatherIconMap[day.icon]}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default WeatherForcast;
