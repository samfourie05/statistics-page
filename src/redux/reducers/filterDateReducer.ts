import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface filterDateState {
  startDate: Date;
  endDate: Date;
  startDateAsString: string;
  endDateAsString: string;
  dateRangeValue: string;
}
const initialState: filterDateState = {
  startDate: new Date(),
  endDate: new Date(),
  startDateAsString: "",
  endDateAsString: "",
  dateRangeValue: "30",
};

const filterDateSlice = createSlice({
  name: "filterDate",
  initialState,
  reducers: {
    setStartDate(state, action) {
      let date = action.payload;

      //setting the start date for the default load
      const startYear = date.getFullYear();
      var startMonth = date.getMonth() + 1;
      var startDay = date.getDate();
      var startDateAsString = startYear.toString();
      if (startMonth <= 9) {
        startDateAsString = startDateAsString + "-0" + startMonth.toString();
      } else {
        startDateAsString = startDateAsString + "-" + startMonth.toString();
      }
      if (startDay <= 9) {
        startDateAsString = startDateAsString + "-0" + startDay.toString();
      } else {
        startDateAsString = startDateAsString + "-" + startDay.toString();
      }

      state.startDate = date;
      state.startDateAsString = startDateAsString;
    },
    setEndDate(state, action) {
      let date = action.payload;

      //setting the end date for the default load
      const endYear = date.getFullYear();
      var endMonth = date.getMonth() + 1;
      var endDay = date.getDate();
      var endDateAsString = endYear.toString();
      if (endMonth <= 9) {
        endDateAsString = endDateAsString + "-0" + endMonth.toString();
      } else {
        endDateAsString = endDateAsString + "-" + endMonth.toString();
      }
      if (endDay <= 9) {
        endDateAsString = endDateAsString + "-0" + endDay.toString();
      } else {
        endDateAsString = endDateAsString + "-" + endDay.toString();
      }

      state.endDate = date;
      state.endDateAsString = endDateAsString;
    },

    setDateRange(state, action){
      state.dateRangeValue = action.payload;
    },
  },
});

export const { setStartDate, setEndDate, setDateRange } =
  filterDateSlice.actions;

export default filterDateSlice.reducer;
