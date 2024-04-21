import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className="flex justify-center items-center">
        <div className="text-center">
          <div className="text-4xl md:text-6xl font-bold text-green-400">
            Let's find <span className="text-black">the criminal</span>.
          </div>
          <Link to="/dashboard">
            <button
              type="button"
              className="text-white bg-gradient-to-l from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-3xl  px-5 py-2.5 text-center me-2 mb-2 mt-4"
            >
              Find Criminal
            </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img
          src="police.jpg"
          alt="home page"
          className="h-[24rem] md:h-[45rem]"
        />
      </div>
    </div>
  );
};

export default Home;
