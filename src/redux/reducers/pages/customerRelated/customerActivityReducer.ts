import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface CustomerActivityData {
  category: string;
  value: number;
}

interface ThunkData {
  startDate : string,
  endDate : string,
}

export const getCustomerActivityData = createAsyncThunk(
  "customerActivity/getData",
  async (data: ThunkData, thunkApi) => {
    try {
      let response = await axios.get<CustomerActivityData[]>(
        `http://localhost:3001/api/CustomerActivity/GetData/${data.startDate}/${data.endDate}`
      );
      return response.data;
    } catch (err: any) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

interface CustomerDataState {
  loading: boolean;
  error: null | string;
  chartData: null | CustomerActivityData[];
}

const initialState: CustomerDataState = {
  loading: false,
  error: null,
  chartData: null,
};

const customerActivitySlice = createSlice({
  name: "registrationActivitySlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCustomerActivityData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(
        getCustomerActivityData.fulfilled,
        (state, action: PayloadAction<CustomerActivityData[]>) => {
          state.loading = false;
          state.chartData = action.payload;
        }
      )
      .addCase(
        getCustomerActivityData.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export default customerActivitySlice.reducer;
