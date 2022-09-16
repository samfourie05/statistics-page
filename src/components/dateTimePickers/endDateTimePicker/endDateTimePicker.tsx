import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { FormControl, SxProps } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../../redux/reducers/hooks";
import { getRegistrationActivityData } from "../../../redux/reducers/pages/customerRelated/registrationActivityReducer";
import { setEndDate, setDateRange } from "../../../redux/reducers/filterDateReducer";
import { setDateAsString } from "../../../tsutil/setDateAsString";
import { getCustomerActivityData } from "../../../redux/reducers/pages/customerRelated/customerActivityReducer";

export default function endDateTimePicker() {
  const filterDates = useAppSelector((state) => state.filterDates);
  const dispatch = useAppDispatch();

  const handleChange = (endDate: Date | null) => {
    if (endDate === null) {
      //popUpWithError
      return;
    } else {
      if (endDate < filterDates.startDate) {
        console.log("Cannot be smaller than Start Date");
      }
    }
    dispatch(setDateRange(""));
    dispatch(setEndDate(endDate));
    const endDateAsString = setDateAsString(endDate);
    dispatch(
      getRegistrationActivityData({
        startDate: filterDates.startDateAsString,
        endDate: endDateAsString,
      })
    );
    dispatch(
      getCustomerActivityData({
        startDate: filterDates.startDateAsString,
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
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <FormControl sx={style}>
        <DesktopDatePicker
          label="End Date"
          inputFormat="yyyy-MM-dd"
          value={filterDates.endDateAsString}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
          showDaysOutsideCurrentMonth={true}
          minDate={filterDates.startDate}
          maxDate={filterDates.endDate}
        />
      </FormControl>
    </LocalizationProvider>
  );
}
