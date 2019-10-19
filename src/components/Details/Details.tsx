import React from "react";
import { connect } from "react-redux";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import _ from "lodash";
import moment from "moment";

// Utils
import { mapAttributes, mapAttributeValues } from "../../utils";

// Actions
import {
  clearDetails,
  getHistoricalRiverData,
  getWeatherData
} from "./actions";

// Components
import { DetailsHeader } from "../DetailsHeader";
import { FlowCard } from "../FlowCard";
import { WeatherCard } from "../WeatherCard";
import { LocalMap } from "../LocalMap";

// Material UI Components
import Typography from "@material-ui/core/Typography";

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
    }
  })
);

const Details = ({
  river,
  clearDetails,
  telemetryData,
  weather,
  weatherForcast,
  getHistoricalRiverData,
  getWeatherData,
  isDialog
}: any) => {
  const classes = useStyles();

  const getRiverData = async () => await getHistoricalRiverData(river.gauge_id);
  const getForcast = async () =>
    await getWeatherData(river.latitude, river.longitude);

  React.useEffect(() => {
    if (river.gauge_id) getRiverData();
    if (river.latitude && river.longitude) getForcast();
    // eslint-disable-next-line
  }, [river.gauge_id, river.latitude, river.longitude]);

  const currentGauge =
    river.gauge_id &&
    telemetryData.find((site: any) => site.id === river.gauge_id);

  const attributes = _(_.merge(river.key_facts_char, river.key_facts_num))
    .map(mapAttributes())
    .map(mapAttributeValues())
    .value();

  return (
    <div className={classes.details}>
      <DetailsHeader
        title={river.section_name}
        river_name={river.river_name}
        region={river.region}
        clearDetails={clearDetails}
        attr={attributes}
        isDialog={isDialog}
      />
      {currentGauge && (
        <FlowCard
          currentFlow={currentGauge.observables
            .find((site: any) => site.type === "flow")
            .latest_value.toFixed(1)}
          unit="cumecs"
          name={currentGauge.name}
          source={currentGauge.data_source}
          lastUpdated={moment(currentGauge.last_updated).format("ddd, h:MMa")}
        />
      )}
      {river.latitude && river.longitude && (
        <WeatherCard
          currentTemp={weather.data.temp}
          sunrise={moment.unix(weather.data.sunrise).format("h:MMa")}
          sunset={moment.unix(weather.data.sunset).format("h:MMa")}
          description={weather.data.description}
          lastUpdated={moment.unix(weather.lastUpdated).format("ddd, h:MMa")}
          iconCode={weather.data.iconCode}
          weatherForcast={weatherForcast}
          isLoading={weather.loading}
        />
      )}
      <Typography
        paragraph
        color="textPrimary"
        dangerouslySetInnerHTML={{ __html: river.description }}
      />
      {river.latitude && river.longitude && (
        <LocalMap
          latitude={river.latitude}
          longitude={river.longitude}
          markers={river.marker_list}
        />
      )}
      <Typography color="textSecondary">
        Last updated on {moment(river.updatedAt).format("DD/MM/YY, h:MMa")}
      </Typography>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  river: state.details.river,
  telemetryData: state.rivers.telemetryData,
  weather: state.details.weather,
  weatherForcast: state.details.weatherForcast
});

export default connect(
  mapStateToProps,
  { clearDetails, getHistoricalRiverData, getWeatherData }
)(Details);
