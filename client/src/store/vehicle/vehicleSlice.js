import { createSlice } from "@reduxjs/toolkit";
import { getVehicles } from "./actions";

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

export const vehicleSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {
    selectVehicle: (state, action) => {
      const { newValue, prevValue } = action.payload;
      const selectedVehicles = state.data.map((vehicle) => {
        if (vehicle.name === prevValue) {
          return {
            ...vehicle,
            selected: false,
            quantity: vehicle.quantity + 1,
          };
        }
        if (vehicle.name === newValue) {
          return {
            ...vehicle,
            selected: true,
            quantity: vehicle.quantity - 1,
          };
        }
        return vehicle;
      });
      state.data = selectedVehicles;
    },
    resetVehicle: (state) => {
      state.data = state.data.map((vehicle) => {
        return vehicle.selected ? { ...vehicle, selected: false } : vehicle;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getVehicles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getVehicles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload;
      })
      .addCase(getVehicles.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
      });
  },
});
export const { selectVehicle, resetVehicle } = vehicleSlice.actions;
export default vehicleSlice.reducer;
