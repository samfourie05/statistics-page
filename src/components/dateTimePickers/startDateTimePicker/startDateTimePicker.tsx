import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { FormControl, SxProps } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../../redux/reducers/hooks";
import { getRegistrationActivityData } from "../../../redux/reducers/pages/customerRelated/registrationActivityReducer";
import { setStartDate, setDateRange } from "../../../redux/reducers/filterDateReducer";
import { setDateAsString } from "../../../tsutil/setDateAsString";
import { getCustomerActivityData } from "../../../redux/reducers/pages/customerRelated/customerActivityReducer";

export default function startDateTimePicker() {
  const filterDates = useAppSelector((state) => state.filterDates);
  const dispatch = useAppDispatch();

  const handleChange = (startDate: Date | null) => {
    dispatch(setStartDate(startDate));
    dispatch(setDateRange(""));
    const dateAsString = setDateAsString(startDate);
    dispatch(
      getRegistrationActivityData({
        startDate: dateAsString,
        endDate: filterDates.endDateAsString,
      })
    );
    dispatch(
      getCustomerActivityData({
        startDate: dateAsString,
        endDate: filterDates.endDateAsString,
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
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <FormControl sx={style}>
        <DesktopDatePicker
          label="Start Date"
          inputFormat="yyyy-MM-dd"
          value={filterDates.startDate}
          onChange={handleChange}
          maxDate={filterDates.endDate}
          renderInput={(params) => <TextField {...params} />}
          showDaysOutsideCurrentMonth={true}
        />
      </FormControl>
    </LocalizationProvider>
  );
}
