import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Selector from "../common/Selector";
import {
  addCityToDestination,
  addVehicleToDestination,
} from "../store/destination/destinationSlice";
import { selectCity } from "../store/city/citySlice";
import { selectVehicle } from "../store/vehicle/vehicleSlice";

const DestinationCard = ({ destination }) => {
  const cities = useSelector((state) => state.cities.data);
  const dispatch = useDispatch();
  const vehicles = useSelector((state) => state.vehicles.data);

  const handleCityChange = ({ newValue, prevValue }) => {
    dispatch(selectCity({ newValue, prevValue }));
    dispatch(
      addCityToDestination({ copId: destination.id, newCity: newValue })
    );
  };

  const handleVehicleChange = ({ newValue, prevValue }) => {
    dispatch(selectVehicle({ newValue, prevValue }));
    dispatch(
      addVehicleToDestination({ copId: destination.id, newVehicle: newValue })
    );
  };

  const isDisabledCityOption = (city) => city.selected;
  const isDisabledVehicleOption = (vehicle) =>
    vehicle.selected && vehicle.quantity <= 0;

  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <div className="mb-5">
        <img src={destination.imageURL} alt="cop_image" />
        <h1 className="text-center my-1 ">{destination.name}</h1>
      </div>
      <div>
        <Selector
          label="City"
          value={destination.city}
          options={cities}
          disabledOption={isDisabledCityOption}
          handleChange={handleCityChange}
        />
      </div>
      <div>
        <Selector
          label="Vehicle"
          value={destination.vehicle}
          options={vehicles}
          showQuantity={true}
          disabledOption={isDisabledVehicleOption}
          handleChange={handleVehicleChange}
        />
      </div>
    </div>
  );
};

export default DestinationCard;
