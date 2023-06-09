import { createSlice } from "@reduxjs/toolkit";
import { stationsState } from "types/station.types";
import { getAllStations, addNewStation } from "../services/station.services";

const initialState: stationsState = {
  items: [],
  isLoading: false,
  error: false,
  item: {
    id: "", //MongoDB generated id
    FID: 0,
    ID: 0,
    Nimi: "",
    Namn: "",
    Name: "",
    Osoite: "",
    Adress: "",
    Kaupunki: "",
    Operaattor: "",
    Kapasiteet: 0,
    x: 0,
    y: 0,
  },
};

const stationSlice = createSlice({
  name: "stations",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getAllStations.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });

    builder.addCase(getAllStations.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });

    builder.addCase(getAllStations.fulfilled, (state, action) => {
      state.items = action.payload?.data;
      state.isLoading = false;
      state.error = false;
    });

    builder.addCase(addNewStation.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });

    builder.addCase(addNewStation.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });

    builder.addCase(addNewStation.fulfilled, (state, action) => {
      state.items = [...state.items, action.payload?.data];
      state.isLoading = false;
      state.error = false;
    });
  },
});

export default stationSlice.reducer;
