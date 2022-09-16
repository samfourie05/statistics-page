import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface RegistrationActivityData {
  category: string;
  value: number;
}

interface ThunkData {
  startDate : string,
  endDate : string,
}

export const getRegistrationActivityData = createAsyncThunk(
  "registrationActivity/getData",
  async (data:ThunkData, thunkApi) => {
    try {
      let response = await axios.get<RegistrationActivityData[]>(
        `http://localhost:3001/api/RegistrationActivity/GetData/${data.startDate}/${data.endDate}`
      );
      return response.data;
    } catch (err: any) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

interface RegistrationDataState {
  loading: boolean;
  error: null | string;
  chartData: null | RegistrationActivityData[];
}

const initialState: RegistrationDataState = {
  loading: false,
  error: null,
  chartData: null,
};

const registrationActivitySlice = createSlice({
  name: "registrationActivitySlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getRegistrationActivityData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(
        getRegistrationActivityData.fulfilled,
        (state, action: PayloadAction<RegistrationActivityData[]>) => {
          state.loading = false;
          state.chartData = action.payload;
        }
      )
      .addCase(
        getRegistrationActivityData.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export default registrationActivitySlice.reducer;
