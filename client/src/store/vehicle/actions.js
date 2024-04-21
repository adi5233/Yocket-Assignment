import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getVehicles = createAsyncThunk(
  "vehicle/getVehicles",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/v1/vehicles`);
      const allVehicles = data.map((vehicle) => ({
        ...vehicle,
        selected: false,
      }));
      return allVehicles;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
