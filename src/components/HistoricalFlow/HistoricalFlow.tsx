import React from "react";
import { connect } from "react-redux";

// amChart
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

const HistoricalFlow = ({ historicalFlow, isLoading }: any) => {
  React.useEffect(() => {
    let chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.data = historicalFlow;
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.baseInterval = {
      timeUnit: "hour",
      count: 1
    };
    dateAxis.tooltipDateFormat = "HH:mm, d MMMM";
    dateAxis.renderer.grid.template.location = 0;

    let valueAxis: any = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";

    series.tooltipText = "{valueY.value} cumecs";
    chart.cursor = new am4charts.XYCursor();

    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;
  });

  return <div id="chartdiv" style={{ width: "100%", height: "300px" }}></div>;
};

const mapStateToProps = (state: any) => ({
  historicalFlow: state.details.historicalFlow.map((reading: any) => ({
    date: new Date(reading.time),
    value: reading.flow && reading.flow.toFixed(2)
  })),
  isLoading: state.details.isFlowLoading
});

export default connect(
  mapStateToProps,
  {}
)(HistoricalFlow);
