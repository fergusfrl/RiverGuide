import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

// Components
import { WeatherForcast } from "../WeatherForcast";

// Icons
import { ReactComponent as CloudyIcon } from "../../img/weather/cloudy.svg";
import { ReactComponent as FogIcon } from "../../img/weather/fog.svg";
import { ReactComponent as PartlyCloudyIcon } from "../../img/weather/partlyCloudy.svg";
import { ReactComponent as RainIcon } from "../../img/weather/rain.svg";
import { ReactComponent as SunIcon } from "../../img/weather/sun.svg";
import { ReactComponent as SnowIcon } from "../../img/weather/snow.svg";

// Material UI Components
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Collapse from "@material-ui/core/Collapse";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      margin: theme.spacing(2, 1)
    },
    value: {
      fontWeight: 100
    },
    icon: {
      height: 50,
      width: 50
    },
    smallIcon: {
      height: 20,
      width: 20
    },
    progress: {
      margin: theme.spacing(1)
    }
  })
);

const WeatherCard = ({
  currentTemp,
  description,
  sunrise,
  sunset,
  lastUpdated,
  iconCode,
  weatherForcast,
  isLoading
}: any) => {
  const classes = useStyles();
  const [expand, setExpand] = React.useState(false);

  const weatherIconMap: { [key: string]: any } = {
    "01d": <SunIcon className={classes.icon} />,
    "02d": <PartlyCloudyIcon className={classes.icon} />,
    "03d": <CloudyIcon className={classes.icon} />,
    "04d": <PartlyCloudyIcon className={classes.icon} />,
    "09d": <RainIcon className={classes.icon} />,
    "10d": <RainIcon className={classes.icon} />,
    "11d": <RainIcon className={classes.icon} />,
    "13d": <SnowIcon className={classes.icon} />,
    "50d": <FogIcon className={classes.icon} />,
    "01n": <SunIcon className={classes.icon} />,
    "02n": <PartlyCloudyIcon className={classes.icon} />,
    "03n": <CloudyIcon className={classes.icon} />,
    "04n": <PartlyCloudyIcon className={classes.icon} />,
    "09n": <RainIcon className={classes.icon} />,
    "10n": <RainIcon className={classes.icon} />,
    "11n": <RainIcon className={classes.icon} />,
    "13n": <SnowIcon className={classes.icon} />,
    "50n": <FogIcon className={classes.icon} />
  };

  const toggleExpand = () => {
    setExpand(prev => !prev);
  };

  const renderWeather = () => (
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
      <Grid item>{weatherIconMap[iconCode]}</Grid>
    </Grid>
  );

  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container justify="space-between">
          {isLoading ? (
            <CircularProgress className={classes.progress} />
          ) : (
            renderWeather()
          )}
          <Grid item>
            <Typography color="textSecondary">{description}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption" color="textSecondary">
              Last Updated: {lastUpdated}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <Collapse in={expand}>
        <CardContent>
          <WeatherForcast weatherForcast={weatherForcast} />
        </CardContent>
      </Collapse>
      <Divider />
      <CardActions>
        <Button size="small" color="primary" onClick={toggleExpand}>
          {expand ? "Collapse" : "Expand"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default WeatherCard;
