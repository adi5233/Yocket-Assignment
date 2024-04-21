import React from "react";
import { useSelector } from "react-redux";

const DestinationDetails = () => {
  const cities = useSelector((state) => state.cities.data);
  const vehicles = useSelector((state) => state.vehicles.data);
  return (
    <div className="mb-4">
      <div>
        <h4 className="text-green-400 font-bold text-2xl md:text-3xl mb-4">
          Avialable Cities
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {cities.map((city) => (
            <div className="p-4 shadow-lg flex flex-row md:flex-col">
              <img src={city.imageURL} alt="city" className="w-16 md:w-56" />
              <div className="text-green-400 mt-4 font-semibold text-md ml-6 md:ml-0 my-auto">
                <div>{city.name}</div>
                <div>Distance - {city.distance} KM</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <h4 className="text-green-400 font-bold text-2xl md:text-3xl mb-4">
          Avialable Vehicles
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 ">
          {vehicles.map((vehicle) => (
            <div className="p-4 shadow-lg flex flex-row md:flex-col">
              <img
                src={vehicle.imageURL}
                alt="vehicle"
                className="w-16 md:w-56"
              />
              <div className="text-green-400 mt-4 font-semibold text-md ml-6 md:ml-0 my-auto">
                <div>{vehicle.name}</div>
                <div>Range - {vehicle.range} KM</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
