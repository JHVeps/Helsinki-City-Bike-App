import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "";

console.log("url: ", url);

export const getAllJourneys = createAsyncThunk("journeys/fetch", async () => {
  const config = {
    method: "GET",
    url: `${url}/journeys`,
    headers: {},
  };
  try {
    let res = await axios(config);
    console.log(res.data);
    return { data: res.data, status: res.status };
  } catch (error: any) {
    console.log("error", error.response.status);
    alert(error);
    return;
  }
});
