import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DestinationCard from "../components/Destination/DestinationCard";
import { getCities } from "../store/city/actions";
import { getVehicles } from "../store/vehicle/actions";
import { resetDestination } from "../store/destination/destinationSlice";
import { resetVehicle } from "../store/vehicle/vehicleSlice";
import { resetCity } from "../store/city/citySlice";
import DestinationDetails from "../components/Destination/DestinationDetails";
import axios from "axios";

const Dashboard = () => {
  const destinations = useSelector((state) => state.destinations.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  // const [error, setError] = useState({ status: false, msg: "" });

  useEffect(() => {
    dispatch(getCities());
    dispatch(getVehicles());
  }, [dispatch]);

  const handleReset = () => {
    dispatch(resetDestination());
    dispatch(resetVehicle());
    dispatch(resetCity());
  };

  const handleFindCriminal = async () => {
    setLoader(true);
    // setError((error) => ({ ...error, status: false, msg: "" }));
    try {
      const result = await axios({
        method: "post",
        url: `/api/v1/criminal/find`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: JSON.stringify(destinations),
      });

      setLoader(false);
      handleReset();
      navigate("/result", { state: { ...result.data } });
    } catch (e) {
      if (axios.isCancel(e)) {
        console.log("Request Cancelled!");
      } else {
        setLoader(false);
        // setError((error) => ({
        //   ...error,
        //   status: true,
        //   msg: "Server Error! Please try again.",
        // }));
      }
    }
  };

  return (
    <div className="my-20 ">
      <div className="my-4 mt-10">
        <h1 className="text-green-400 font-bold text-2xl md:text-3xl">
          Choose city and vehicle for respective cop
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {destinations.map((destination, i) => (
          <DestinationCard key={i} destination={destination} />
        ))}
      </div>
      <div className="flex justify-between my-10">
        <div>
          <button
            type="button"
            className="text-white bg-gradient-to-l from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
        <div>
          <button
            type="button"
            className={`text-white ${
              destinations.find((d) => d.vehicle === "")
                ? "bg-gray-400"
                : "bg-gradient-to-l from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800"
            } font-medium rounded-lg text-xl px-5 py-2.5 text-center`}
            onClick={handleFindCriminal}
            disabled={
              destinations.find((d) => d.vehicle === "") &&
              destinations.find((d) => d.city === "")
            }
          >
            {" "}
            {loader ? <>Finding...</> : <>Find Criminal</>}
          </button>
        </div>
      </div>

      <div className="mb-10">
        <DestinationDetails />
      </div>
    </div>
  );
};

export default Dashboard;
