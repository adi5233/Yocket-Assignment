import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCities = createAsyncThunk(
  "city/getCities",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/v1/cities`);
      const allCities = data.map((city) => ({ ...city, selected: false }));
      return allCities;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
