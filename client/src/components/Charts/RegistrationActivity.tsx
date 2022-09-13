import React, { useState, useLayoutEffect } from "react";
import axios from "axios"; 

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";

//state
import { useStateContext } from '../../context/ContextProvider'; 

function RegistrationActivity(props: any) {
  //const totalRegistrations = await getTotalRegistrations();
  // Set data
  var data:any = [];
  const [tempData, setTempData] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const updateData = (data: any) => {
    setTempData(data);
  };

  React.useEffect(() => {
    axios.get("http://localhost:3001/api/RegistrationActivity/GetTotalRegistrations").then((response) => {
      response.data[0].category = "Registrations";
      data = [...data, response.data[0]];
    });
  }, []);
  React.useEffect(() => {
    axios.get("http://localhost:3001/api/RegistrationActivity/GetRegisteredUsers").then((response) => {
      response.data[0].category = "Registered Users";
      data = [...data, response.data[0]];
    });
  }, []);
  React.useEffect(() => {
    axios.get("http://localhost:3001/api/RegistrationActivity/GetRegistrationAttempts").then((response) => {
      response.data[0].category = "Registration Attempts";
      data = [...data, response.data[0]];
    });
  }, []);
  React.useEffect(() => {
    axios.get("http://localhost:3001/api/RegistrationActivity/GetTotalCustomers").then((response) => {
      response.data[0].category = "Total Customers";
      data = [...data, response.data[0]];
      updateData(data);
      console.log(data);
    });
  }, []);
  console.log(data);
  const {currentMode} = useStateContext();
  //const chart = useRef(null);
  const chartID = props.chartID;

  useLayoutEffect(() => {
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
        categoryYField: "category",//
      })
    );

    //Set tooltip appearance
    let tooltip = am5.Tooltip.new(root, {
      autoTextColor: false,
      labelText: "{valueX}"
    });
    
    tooltip.label.setAll({
      fill: am5.color(0xffffff)
    });
    
    series.set("tooltip", tooltip);

    series.columns.template.setAll({ cornerRadiusTR: 5, cornerRadiusBR: 5 });
    series.columns.template.adapters.add("fill", function (fill, target) {
      return chart?.get("colors")?.getIndex(series.columns.indexOf(target));
    });

    series.columns.template.adapters.add("stroke", function (stroke, target) {
      return chart?.get("colors")?.getIndex(series.columns.indexOf(target));
    });

    yAxis.data.setAll(tempData);
    series.data.setAll(tempData);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);

    return () => root.dispose();
  }, [chartID]);

  return (
    <>
      <div id={chartID} style={{ width: "100%", height: "350px" }}></div>
    </>
  );
}


export default RegistrationActivity;
