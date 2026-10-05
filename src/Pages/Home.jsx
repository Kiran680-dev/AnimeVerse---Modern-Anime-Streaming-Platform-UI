import React, { useContext } from "react";
import AnimeSection from "../Components/AnimeSection";
import Hero from "../Components/Hero";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div className="h-422 w-full pt-3 pt-20 bg-black/70 text-white">
      <Hero />

      <div className="px-10">
        <div className="flex justify-between">
          <h3 className="font-semibold text-xl pt-6 pb-3 text-white">
            ⭐ Trending Today
          </h3>
          <Link
            to="/trending"
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition"
          >
            View All
            <FaArrowRight />
          </Link>
        </div>
        <AnimeSection title="Trending" section="trending" />
      </div>

      <div className="px-10">
        <div className="flex justify-between">
          <h3 className="font-semibold text-xl pt-6 pb-3 text-white">
            📈 Populor Anime
          </h3>
          <Link
            to="/populor"
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition"
          >
            View All
            <FaArrowRight />
          </Link>
        </div>
        <AnimeSection title="Populor" section="populor" />
      </div>

      <div className="px-10">
        <div className="flex justify-between">
          <h3 className="font-semibold text-xl pt-6 pb-3 text-white">
            ⭐ Top Rated
          </h3>
          <Link
            to="/top-rated"
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition"
          >
            View All
            <FaArrowRight />
          </Link>
        </div>
        <AnimeSection title="Top Rated" section="topRated" />
      </div>
    </div>
  );
};

export default Home;
