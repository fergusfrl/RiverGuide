import React from "react";
import { connect } from "react-redux";

// amChart
import { useTheme, create } from "@amcharts/amcharts4/core";
import {
  XYChart,
  DateAxis,
  ValueAxis,
  LineSeries,
  XYCursor,
  XYChartScrollbar
} from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

useTheme(am4themes_animated);

const HistoricalFlow = ({ historicalFlow }: any) => {
  React.useEffect(() => {
    let chart = create("chartdiv", XYChart);
    chart.data = historicalFlow;
    let dateAxis = chart.xAxes.push(new DateAxis());
    dateAxis.baseInterval = {
      timeUnit: "hour",
      count: 1
    };
    dateAxis.tooltipDateFormat = "HH:mm, d MMMM";
    dateAxis.renderer.grid.template.location = 0;

    let valueAxis: any = chart.yAxes.push(new ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    let series = chart.series.push(new LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";

    series.tooltipText = "{valueY.value} cumecs";
    chart.cursor = new XYCursor();

    let scrollbarX = new XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;
  });

  return <div id="chartdiv" style={{ width: "100%", height: "300px" }}></div>;
};

const mapStateToProps = (state: any) => ({
  historicalFlow: state.details.historicalFlow.map((reading: any) => ({
    date: new Date(reading.time),
    value: reading.flow && reading.flow.toFixed(2)
  }))
});

export default connect(
  mapStateToProps,
  {}
)(HistoricalFlow);
