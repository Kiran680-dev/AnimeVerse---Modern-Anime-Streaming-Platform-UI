import { AnimeDataContext } from "../Context/AnimeContext";
import { useContext, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import your from "../assets/your.png";
import your3 from "../assets/movie.png";
import { FaStar } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FaAngleDown } from "react-icons/fa";

const Movies = () => {
  const { popularMovies, topRatedMovies, latestMovies, trendingMovies } =
    useContext(AnimeDataContext);

  console.log(trendingMovies);
  const popularRef = useRef(null);
  const topRatedRef = useRef(null);
  const latestRef = useRef(null);
  const trendingRef = useRef(null);

  const scroll = (ref, direction) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: direction === "left" ? -500 : 500,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="pt-16 bg-gray-950">
      {/* Hero Section */}
      <div
        className="relative h-[400px] md:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${your})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 h-full flex flex-col justify-center px-5 md:px-8 xl:px-13">
          <h1 className="text-3xl md:text-5xl xl:text-6xl font-medium text-white mt-20 md:mt-30">
            Anime Movies
          </h1>

          <p className="text-gray-300 mt-3 text-base md:text-lg xl:text-xl">
            Explore the best anime movies of all time.
          </p>

          <div className="flex flex-wrap text-white gap-3 md:gap-5 mt-6 max-w-5xl">
            <a
              className="px-5 py-2 rounded-xl bg-slate-900/30 backdrop-blur-lg border border-white/20 shadow-lg hover:bg-blue-950 hover:scale-95 transition-all duration-200 ease-out hover:shadow-lg hover:shadow-blue-950/90"
              href="#"
            >
              All
            </a>

            <a
              className="px-5 py-2 rounded-xl bg-slate-900/30 backdrop-blur-lg border border-white/20 shadow-lg hover:bg-blue-950 hover:scale-95 transition-all duration-200 ease-out hover:shadow-lg hover:shadow-blue-950/90"
              href="#"
            >
              Action
            </a>

            <a
              className="px-5 py-2 rounded-xl bg-slate-900/30 backdrop-blur-lg border border-white/20 shadow-lg hover:bg-blue-950 hover:scale-95 transition-all duration-200 ease-out hover:shadow-lg hover:shadow-blue-950/90"
              href="#"
            >
              Adventure
            </a>

            <a
              className="px-5 py-2 rounded-xl bg-slate-900/30 backdrop-blur-lg border border-white/20 shadow-lg hover:bg-blue-950 hover:scale-95 transition-all duration-200 ease-out hover:shadow-lg hover:shadow-blue-950/90"
              href="#"
            >
              Romance
            </a>

            <a
              className="px-5 py-2 rounded-xl bg-slate-900/30 backdrop-blur-lg border border-white/20 shadow-lg hover:bg-blue-950 hover:scale-95 transition-all duration-200 ease-out hover:shadow-lg hover:shadow-blue-950/90"
              href="#"
            >
              Fantasy
            </a>

            <a
              className="px-5 py-2 rounded-xl bg-slate-900/30 backdrop-blur-lg border border-white/20 shadow-lg hover:bg-blue-950 hover:scale-95 transition-all duration-200 ease-out hover:shadow-lg hover:shadow-blue-950/90"
              href="#"
            >
              Drama
            </a>

            <a
              className="px-5 py-2 rounded-xl bg-slate-900/30 backdrop-blur-lg border flex gap-2 border-white/20 shadow-lg hover:bg-blue-950 hover:scale-95 transition-all duration-200 ease-out hover:shadow-lg hover:shadow-blue-950/90"
              href="#"
            >
              More
              <FaAngleDown className="text-xl mt-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Featured Movie Card */}
      <div className="flex justify-center items-center px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center -mt-12 bg-black-900/90 backdrop-blur-lg border border-white/30 shadow-lg px-4 md:px-5 py-3 rounded-xl text-white max-w-[1400px] w-full">
          <img
            className="h-60 md:h-80 xl:h-85 w-full lg:w-150 object-cover rounded-xl"
            src={your3}
            alt=""
          />

          <div className="px-2 md:px-8 xl:px-15 xl:pr-60 mt-6 lg:mt-0">
            <h1 className="text-2xl md:text-3xl xl:text-4xl font-medium">
              Your Name
            </h1>

            <div className="flex flex-wrap gap-2 mt-5">
              <p className="px-3 py-1 rounded-xl bg-purple-900 flex items-center gap-1">
                <FaStar className="text-sm" />
                9.2
              </p>

              <p className="px-2 py-1">2026</p>
              <p className="px-2 py-1">1h 46m</p>

              <p className="px-2 py-1 rounded-xl bg-black/30 backdrop-blur-lg border border-white/20 shadow-lg">
                Drama
              </p>

              <p className="px-2 py-1 rounded-xl bg-black/30 backdrop-blur-lg border border-white/20 shadow-lg">
                Romance
              </p>

              <p className="px-2 py-1 rounded-xl bg-black/30 backdrop-blur-lg border border-white/20 shadow-lg">
                Fantasy
              </p>
            </div>

            <p className="max-w-[500px] font-sans leading-6 md:leading-8 mt-5 text-white/90 text-sm md:text-base">
              Mitsuha, a high school girl and Taki, a high school boy, dream of
              each other's lives and realize they are living each other's
              dreams. A beautiful story of fate, connection and time.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-5">
              <a
                href="#"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-slate-950/90 border border-white/20 backdrop-blur-lg shadow-2xl rounded-xl hover:scale-95 hover:bg-purple-700 transition-all duration-200 ease-out hover:shadow-lg hover:shadow-purple-500/50"
              >
                <FontAwesomeIcon icon={faPlay} />
                <span>Watch Now</span>
              </a>

              <a
                href="#"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-slate-950/90 border border-white/20 backdrop-blur-lg shadow-2xl rounded-xl hover:scale-95 hover:bg-purple-700 transition-all duration-200 ease-out hover:shadow-lg hover:shadow-purple-500/50"
              >
                <FontAwesomeIcon icon={faPlus} />
                <span>Add To Watchlists</span>
                <FontAwesomeIcon icon={faBookmark} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10">
        <div>
          <div className="flex items-center gap-3 my-5">
            <div className="w-1.5 h-8 bg-red-600 rounded-sm"></div>

            <h2 className="text-4xl font-medium text-white font-serif">
              Popular Movies
            </h2>
          </div>

          <div className="relative">
            <button
              onClick={() => scroll(popularRef, "left")}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-purple-700"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={() => scroll(popularRef, "right")}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-purple-700"
            >
              <FaChevronRight />
            </button>

            <div
              ref={popularRef}
              className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-2"
            >
              {popularMovies.map((movie) => (
                <div
                  key={movie.id}
                  className="w-50 h-100 bg-slate-900 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-all duration-300 flex-shrink-0"
                >
                  <img
                    src={movie.image}
                    alt={movie.name}
                    className="w-full h-70 object-cover"
                  />

                  <div className="p-3">
                    <h2 className="text-white font-semibold">{movie.name}</h2>

                    <p className="text-yellow-400">⭐ {movie.rating}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 my-5">
            <div className="w-1.5 h-8 bg-red-600 rounded-sm"></div>

            <h2 className="text-4xl font-medium text-white font-serif">
              Top Rated Movies
            </h2>
          </div>

          <div className="relative">
            <button
              onClick={() => scroll(topRatedRef, "left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-purple-700 transition"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={() => scroll(topRatedRef, "right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-purple-700 transition"
            >
              <FaChevronRight />
            </button>

            <div
              ref={topRatedRef}
              className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-2"
            >
              {topRatedMovies.map((movie) => (
                <div
                  key={movie.id}
                  className="w-50 h-100 bg-slate-900 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-all duration-300 flex-shrink-0"
                >
                  <img
                    src={movie.image}
                    alt={movie.name}
                    className="w-full h-70 object-cover"
                  />

                  <div className="p-3">
                    <h2 className="text-white font-semibold">{movie.name}</h2>

                    <p className="text-yellow-400">⭐ {movie.rating}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 my-5">
            <div className="w-1.5 h-8 bg-red-600 rounded-sm"></div>

            <h2 className="text-4xl font-medium text-white font-serif">
              Latest Movies
            </h2>
          </div>

          <div className="relative">
            <button
              onClick={() => scroll(latestRef, "left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-purple-700 transition"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={() => scroll(latestRef, "right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-purple-700 transition"
            >
              <FaChevronRight />
            </button>

            <div
              ref={latestRef}
              className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-2"
            >
              {latestMovies.map((movie) => (
                <div
                  key={movie.id}
                  className="w-50 h-100 bg-slate-900 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-all duration-300 flex-shrink-0"
                >
                  <img
                    src={movie.image}
                    alt={movie.name}
                    className="w-full h-70 object-cover"
                  />

                  <div className="p-3">
                    <h2 className="text-white font-semibold">{movie.name}</h2>

                    <p className="text-yellow-400">⭐ {movie.rating}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 my-5">
            <div className="w-1.5 h-8 bg-red-600 rounded-sm"></div>

            <h2 className="text-4xl font-medium text-white font-serif">
              Trending Movies
            </h2>
          </div>

          <div className="relative">
            <button
              onClick={() => scroll(trendingRef, "left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-purple-700 transition"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={() => scroll(trendingRef, "right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-purple-700 transition"
            >
              <FaChevronRight />
            </button>

            <div
              ref={trendingRef}
              className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-2"
            >
              {trendingMovies.map((movie) => (
                <div
                  key={movie.id}
                  className="w-50 h-100 bg-slate-900 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-all duration-300 flex-shrink-0"
                >
                  <img
                    src={movie.image}
                    alt={movie.name}
                    className="w-full h-70 object-cover"
                  />

                  <div className="p-3">
                    <h2 className="text-white font-semibold">{movie.name}</h2>

                    <p className="text-yellow-400">⭐ {movie.rating}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
