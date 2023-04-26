import { createSlice } from "@reduxjs/toolkit";
import { journeysState } from "types";
import { getAllJourneys } from "../services/journey.services";

const initialState: journeysState = {
  items: [],
  isLoading: false,
  error: false,
  item: {
    id: "",
    Departure: new Date(),
    Return: new Date(),
    DepartureStationId: 0,
    DepartureStationName: "",
    ReturnStationName: "",
    ReturnStationId: 0,
    CoveredDistance: 0,
    Duration: 0,
  },
};

const journeySlice = createSlice({
  name: "journeys",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getAllJourneys.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });

    builder.addCase(getAllJourneys.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });

    builder.addCase(getAllJourneys.fulfilled, (state, action) => {
      state.items = action.payload?.data;
      state.isLoading = false;
      state.error = false;
    });
  },
});

export default journeySlice.reducer;
