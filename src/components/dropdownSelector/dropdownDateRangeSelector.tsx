import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useAppDispatch, useAppSelector } from "../../redux/reducers/hooks";
import { getRegistrationActivityData } from "../../redux/reducers/pages/customerRelated/registrationActivityReducer";
import { getCustomerActivityData } from "../../redux/reducers/pages/customerRelated/customerActivityReducer";
import { useEffect } from "react";
import {
  setEndDate,
  setStartDate,
  setDateRange,
} from "../../redux/reducers/filterDateReducer";
import { setDateAsString } from "../../tsutil/setDateAsString";

export default function dropdownDateRangeSelector() {
  const dispatch = useAppDispatch();
  const filterDates = useAppSelector((state) => state.filterDates);

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setDateRange(event.target.value));
    const endDate = new Date();
    const endDateAsString = setDateAsString(endDate);
    //setting the start date for the default load
    const numberOfDaysToSubstract = Number(event.target.value);
    const startDateInTime = new Date().setDate(
      filterDates.endDate.getDate() - numberOfDaysToSubstract
    );
    const startDate = new Date(startDateInTime);
    const startDateAsString = setDateAsString(startDate);
    dispatch(setStartDate(startDate));
    dispatch(setEndDate(endDate));
    dispatch(
      getRegistrationActivityData({
        startDate: startDateAsString,
        endDate: endDateAsString,
      })
    );
    dispatch(
      getCustomerActivityData({
        startDate: startDateAsString,
        endDate: endDateAsString,
      })
    );
  };

  const style = {
    ".MuiInputBase-root": {
      color: "white",
      "& .MuiSvgIcon-root": {
        color: "white",
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "white !important",
      },
    },
    ".MuiFormLabel-root": {
      color: "white !important",
    },
    m: 1,
    minWidth: 220,
  };

  return (
    <FormControl sx={style} size="medium">
      <InputLabel id="inputDateRangeId">Select Date Range</InputLabel>
      <Select
        labelId="selectDateRangeId"
        id="selectDateRangeId"
        value={filterDates.dateRangeValue}
        label="Select Date Range"
        onChange={handleChange}
      >
        <MenuItem value={7}>Past 7 Days</MenuItem>
        <MenuItem value={30}>Past 30 Days</MenuItem>
        <MenuItem value={60}>Past 60 Days</MenuItem>
        <MenuItem value={90}>Past 90 Days</MenuItem>
      </Select>
    </FormControl>
  );
}
