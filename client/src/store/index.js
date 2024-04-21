import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "./city/citySlice";
import vehicleSlice from "./vehicle/vehicleSlice";
import destinationSlice from "./destination/destinationSlice";

const store = configureStore({
  reducer: {
    cities: cityReducer,
    vehicles: vehicleSlice,
    destinations: destinationSlice,
  },
});

export default store;
