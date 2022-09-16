import React, { useLayoutEffect } from "react";
import * as styled from "./HorizontalBarChart.styles";

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";

import { useAppSelector, useAppDispatch } from "../../../redux/reducers/hooks";
import { Registry } from "@amcharts/amcharts5/.internal/core/Registry";

function HorizontalBarChart(props: any) {
  const theme = useAppSelector((state) => state.colorTheme);
  
  am5.addLicense("AM5C12312313");

  var data: any = props.data;
  var chartID = props.chartID;

  useLayoutEffect(() => {
    /* Chart code */
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    let root = am5.Root.new(chartID);
    let labelColor = am5.color(theme.textColor);

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    const myTheme = am5.Theme.new(root);

    myTheme.rule("AxisLabel").setAll({
      fill: labelColor,
      fontSize: "16px",
    });

    root.setThemes([myTheme]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        // wheelX: "panX",
        // wheelY: "zoomX",
        pinchZoomX: false,
      })
    );

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineX.set("visible", false);

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    let yRenderer = am5xy.AxisRendererY.new(root, { minGridDistance: 30 });
    yRenderer.labels.template.setAll({
      rotation: 0,
      centerY: am5.p50,
      centerX: am5.p100,
      paddingRight: 15,
      fill: labelColor,
    });

    let yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(root, {
        maxDeviation: 0.3,
        categoryField: "category",
        renderer: yRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    let xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0.3,
        min: 0,
        renderer: am5xy.AxisRendererX.new(root, {}),
      })
    );

    // Create series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    let series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series 1",
        xAxis: xAxis,
        yAxis: yAxis,
        valueXField: "value",
        sequencedInterpolation: true,
        categoryYField: "category",
      })
    );

    //Set tooltip appearance
    let tooltip = am5.Tooltip.new(root, {
      autoTextColor: false,
      labelText: "{valueX}",
    });

    tooltip.label.setAll({
      fill: am5.color(0xffffff),
    });

    series.set("tooltip", tooltip);

    series.columns.template.setAll({ cornerRadiusTR: 5, cornerRadiusBR: 5 });
    series.columns.template.adapters.add("fill", function (fill, target) {
      return chart?.get("colors")?.getIndex(series.columns.indexOf(target));
    });

    series.columns.template.adapters.add("stroke", function (stroke, target) {
      return chart?.get("colors")?.getIndex(series.columns.indexOf(target));
    });

    if (data != null) {
      yAxis.data.setAll(data);
      series.data.setAll(data);
    }

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);

    return () => root.dispose();
  }, [chartID]);

  return <styled.HorizontalBarChartDiv id={chartID} />;
}

export default HorizontalBarChart;
