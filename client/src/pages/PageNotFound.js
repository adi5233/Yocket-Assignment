import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="mt-40 text-center ">
      <h1 className="text-green-400 text-5xl font-bold"> 404</h1>
      <h1 className="text-green-400 text-2xl font-bold">
        Seems like you're LOST!
      </h1>
      <div className="mt-8">
        <Link
          to="/"
          className="text-white bg-gradient-to-l from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-3xl  px-5 py-2.5 text-center me-2 mb-2 mt-4"
        >
          Go to home page
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
