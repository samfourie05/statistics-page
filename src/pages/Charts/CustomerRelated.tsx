import React from "react";
import { useStateContext } from "../../context/ContextProvider";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { bgcolor, borderColor } from "@mui/system";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { makeStyles } from "@mui/styles";
import ColumnChart from "../../components/Charts/ColumnChart";

// Chart Imports
import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5xy from "@amcharts/amcharts5/xy";

const CustomerRelated = () => {
  const [range, setRange] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setRange(event.target.value as string);
    console.log("Date range changed! " + event.target.value);
  };

  return (
    <div className="">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div
          className="bg-white text-white dark:text-gray-200 dark:bg-secondary-dark-bg 
        h-44 rounded-xl w-full p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center"
        >
          <div className="flex justify-between items-center">
            <div>
              <p>Insights Portal - Statistics</p>
              <p className="text-3xl font-bold">Customer Related</p>
            </div>
            <FormControl
              variant="filled"
              sx={{ m: 1, minWidth: 150, bgcolor: "" }}
            >
              <InputLabel id="rangeSelectLabel" style={{ color: "white" }}>
                Select Range
              </InputLabel>
              <Select
                labelId="rangeSelectLabel"
                id="rangeSelect"
                value={range}
                onChange={handleChange}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      color: "red",
                      bgcolor: "pink",
                    },
                  },
                }}
              >
                <MenuItem value={7}>Last 7 Days</MenuItem>
                <MenuItem value={14}>Last 14 Days</MenuItem>
                <MenuItem value={30}>Last 30 Days</MenuItem>
                <MenuItem value={60}>Last 60 Days</MenuItem>
                <MenuItem value={90}>Last 90 Days</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
      <ColumnChart chartID="CustomerActvitiy"/>
      </div>
    </div>
  );
};

export default CustomerRelated;

