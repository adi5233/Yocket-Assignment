import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Result = () => {
  let location = useLocation();
  const { criminalFound, data } = location.state;
  return (
    <div className="my-24">
      {criminalFound ? (
        <div className=" flex items-center flex-col">
          <div className="my-4 text-center">
            <h1 className="text-green-400 text-xl md:text-4xl font-bold">
              Congratutations! Criminal found.
            </h1>
          </div>
          <div>
            <img
              src={data.criminal?.imageURL}
              alt="cop_image"
              className="w-[40vw] mx-auto"
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
        <div className="text-center">
          <div className="text-green-400 text-xl md:text-4xl font-bold text-center">
            Criminal not found. Please try again!
          </div>
          <div className="mt-8">
            <Link
              to="/"
              className="text-white bg-gradient-to-l from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-3xl  px-5 py-2.5 text-center me-2 mb-2 mt-4"
            >
              Go to home page
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Result;
