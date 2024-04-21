import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: "cop1",
      name: "COP_1",
      imageURL:
        "https://ik.imagekit.io/yocket/COP_1.png?updatedAt=1713594546424",
      city: "",
      vehicle: "",
    },
    {
      id: "cop2",
      name: "COP_2",
      imageURL:
        "https://ik.imagekit.io/yocket/COP_2.png?updatedAt=1713594660007",
      city: "",
      vehicle: "",
    },
    {
      id: "cop3",
      name: "COP_3",
      imageURL:
        "https://ik.imagekit.io/yocket/COP_3.png?updatedAt=1713594696413",
      city: "",
      vehicle: "",
    },
  ],
};

export const destinationSlice = createSlice({
  name: "destination",
  initialState,
  reducers: {
    addCityToDestination: (state, action) => {
      const { copId, newCity } = action.payload;
      state.data = state.data.map((destination) =>
        destination.id === copId
          ? {
              ...destination,
              city: newCity,
              // vehicle: "",
            }
          : destination
      );
    },
    addVehicleToDestination: (state, action) => {
      const { copId, newVehicle } = action.payload;
      state.data = state.data.map((destination) =>
        destination.id === copId
          ? {
              ...destination,
              vehicle: newVehicle,
            }
          : destination
      );
    },
    resetDestination: (state) => {
      state.data = state.data.map((destination) => {
        return { ...destination, vehicle: "", city: "" };
      });
    },
  },
});

export const {
  addCityToDestination,
  addVehicleToDestination,
  resetDestination,
} = destinationSlice.actions;
export default destinationSlice.reducer;
