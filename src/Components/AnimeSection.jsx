import React, { useRef } from "react";
import animeData, { allAnime } from "../data/animeData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AnimeSection = ({ section }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/70 text-white hover:bg-purple-700 flex items-center justify-center"
      >
        <FaChevronLeft />
      </button>

      {/* Anime Cards */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth"
      >
        {animeData[section].map((anime) => {
          const animeWithId = allAnime.find(
            (item) => item.title === anime.title
          );

          if (!animeWithId) return null;

          return (
            <Link
              key={`${section}-${anime.id}`}
              to={`/anime/${animeWithId.uniqueId}`}
              className="w-64 rounded-2xl bg-gray-900 text-white border border-gray-500 overflow-hidden flex-shrink-0 hover:scale-105 transition-all duration-300 block"
            >
              <img
                src={anime.img}
                alt={anime.title}
                className="w-full h-40 object-cover rounded-t-2xl"
              />

              <h3 className="font-semibold px-3 py-2">
                {anime.title}
              </h3>

              <p className="px-3 pb-3 text-yellow-400">
                ⭐ {anime.rate}
              </p>
            </Link>
          );
        })}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/70 text-white hover:bg-purple-700 flex items-center justify-center"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default AnimeSection;