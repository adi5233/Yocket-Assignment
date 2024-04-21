import React from "react";
import { useLocation } from "react-router-dom";

const Result = () => {
  let location = useLocation();
  const { criminalFound, data } = location.state;
  return (
    <div className="my-24">
      {criminalFound ? (
        <div className=" flex items-center flex-col">
          <div className="my-4">
            <h1 className="text-green-400 text-xl md:text-4xl font-bold">
              Congratutations! Criminal found.
            </h1>
          </div>
          <div>
            <img
              src={data.criminal?.imageURL}
              alt="cop_image"
              className="w-[40vw]"
            />
            <h1 className="text-green-400 text-lg md:text-xl font-bold my-3 text-center">
              Criminal was hiding in city {data.city.name}.
            </h1>
          </div>
          <div className="">
            <h1 className="text-green-400 text-xl md:text-2xl font-bold mt-8 mb-2 ">
              COP Details
            </h1>
            <img
              src={data.copDetails?.imageURL}
              alt="cop_image"
              className="w-[40vw]"
            />
            <h1 className="text-green-400 text-lg md:text-xl font-bold my-3 text-center">
              {data.copDetails.name}.
            </h1>
          </div>
        </div>
      ) : (
        <div className="text-green-400 text-xl md:text-4xl font-bold text-center">
          Criminal not found.
        </div>
      )}
    </div>
  );
};

export default Result;
