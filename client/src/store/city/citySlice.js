import { createSlice } from "@reduxjs/toolkit";
import { getCities } from "./actions";

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    selectCity: (state, action) => {
      const { newValue, prevValue } = action.payload;
      const selectedCities = state.data.map((city) => {
        if (city.name === prevValue) {
          return { ...city, selected: false };
        }
        if (city.name === newValue) {
          return { ...city, selected: true };
        }
        return city;
      });
      state.data = selectedCities;
    },
    resetCity: (state) => {
      state.data = state.data.map((city) => {
        return city.selected ? { ...city, selected: false } : city;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCities.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCities.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload;
      })
      .addCase(getCities.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
      });
  },
});
export const { selectCity, resetCity } = citySlice.actions;
export default citySlice.reducer;
