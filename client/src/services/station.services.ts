import { API_URL } from "secrets/secrets";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Station } from "types/station.types";

const url = API_URL;

export const getAllStations = createAsyncThunk("stations/fetch", async () => {
  const config = {
    method: "GET",
    url: `${url}/stations`,
    headers: {},
  };
  try {
    let res = await axios(config);
    return { data: res.data, status: res.status };
  } catch (error: any) {
    throw new Error("Failed to GET stations");
  }
});

export const addNewStation = createAsyncThunk(
  "stations/addstation",
  async (newStation: Station) => {
    const config = {
      method: "POST",
      url: `${API_URL}/stations/addstation`,
      data: newStation,
      headers: {},
    };
    try {
      let res = await axios(config);
      return { data: res.data, status: res.status };
    } catch (error: any) {
      throw new Error("Failed to add new station");
    }
  }
);
