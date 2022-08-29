import React, { useLayoutEffect } from "react";

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
//state
import { useStateContext } from '../../context/ContextProvider'; 

function ActiveUsers(props: any) {
  const {currentMode} = useStateContext();

  //const chart = useRef(null);
  const chartID = props.chartID;
  console.log({ chartID });

  useLayoutEffect(() => {
    console.log(chartID);
    /* Chart code */
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    let root = am5.Root.new(chartID);
    let labelColor = am5.color(0xffffff);
    if (currentMode === 'Light') {
      labelColor = am5.color(0x000000);
    }

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
        maxTooltipDistance: 0,
        pinchZoomX: false,
        
      })
    );

    let date = new Date();
    date.setHours(0, 0, 0, 0);
    let value = 100;

    function generateData() {
      value = Math.round(Math.random() * 10 - 4.2 + value);
      am5.time.add(date, "day", 1);
      return {
        date: date.getTime(),
        value: value,
      };
    }

    function generateDatas(count: any) {
      let data = [];
      for (var i = 0; i < count; ++i) {
        data.push(generateData());
      }
      return data;
    }

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    let xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        maxDeviation: 0.2,
        baseInterval: {
          timeUnit: "day",
          count: 1,
        },
        renderer: am5xy.AxisRendererX.new(root, {}),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    //DATA 1------------------------------------------------
    let series = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "UserID & DesignerID",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        valueXField: "date",
        legendValueText: "{valueY}",
        legendLabelText: "[{stroke}]{name}[/] [bold #888][/]",

      })
    );

    //Set tooltip appearance
    let tooltip = am5.Tooltip.new(root, {
      autoTextColor: false,
      labelText: "{valueY}",
    });

    tooltip.label.setAll({
      fill: am5.color(0xffffff),
    });

    series.set("tooltip", tooltip);

    date = new Date();
    date.setHours(0, 0, 0, 0);
    value = 0;

    let data = generateDatas(500);
    series.data.setAll(data);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear();
    //DATA 2------------------------------------------------
    series = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "IP addresses",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        valueXField: "date",
        legendValueText: "{valueY}",
        legendLabelText: "[{stroke}]{name}[/]",
      })
    );

    //Set tooltip appearance
    tooltip = am5.Tooltip.new(root, {
      autoTextColor: false,
      labelText: "{valueY}",
    });

    tooltip.label.setAll({
      fill: am5.color(0xffffff),
    });

    series.set("tooltip", tooltip);

    date = new Date();
    date.setHours(0, 0, 0, 0);
    value = 0;

    data = generateDatas(500);
    series.data.setAll(data);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear();


    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    let cursor = chart.set(
      "cursor",
      am5xy.XYCursor.new(root, {
        behavior: "none",
      })
    );
    cursor.lineY.set("visible", false);

    // Add legend
    // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
    let legend = chart.rightAxesContainer.children.push(
      am5.Legend.new(root, {
        width: 225,
        paddingLeft: 15,
        height: am5.percent(100),
      })
    );

    legend.data.setAll([{
      color: am5.color(0x297373)
    }]);

    // When legend item container is hovered, dim all the series except the hovered one
    legend.itemContainers.template.events.on("pointerover", function (e) {
      let itemContainer = e.target;

      // As series list is data of a legend, dataContext is series
      let series = itemContainer.dataItem.dataContext;

      chart.series.each(function (chartSeries) {
        if (chartSeries != series) {
          chartSeries.strokes.template.setAll({
            strokeOpacity: 0.15,
            stroke: am5.color(0x000000),
          });
        } else {
          chartSeries.strokes.template.setAll({
            strokeWidth: 3,
          });
        }
      });
    });

    // When legend item container is unhovered, make all series as they are
    legend.itemContainers.template.events.on("pointerout", function (e) {
      let itemContainer = e.target;
      let series = itemContainer.dataItem.dataContext;

      chart.series.each(function (chartSeries) {
        chartSeries.strokes.template.setAll({
          strokeOpacity: 1,
          strokeWidth: 1,
          stroke: chartSeries.get("fill"),
        });
      });
    });

    legend.itemContainers.template.set("width", am5.p100);
    legend.valueLabels.template.setAll({
      width: am5.p100,
      textAlign: "left",
      fill: labelColor,
    });

    // It's is important to set legend data after all the events are set on template, otherwise events won't be copied
    legend.data.setAll(chart.series.values);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);

    return () => root.dispose();
  }, [chartID]);

  return (
    <>
      <div id={chartID} style={{ width: "100%", height: "500px" }}></div>
    </>
  );
}
export default ActiveUsers;
