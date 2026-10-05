import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { allAnime } from "../data/animeData";
import { FaArrowLeft } from "react-icons/fa";
import {
  FaStar,
  FaPlay,
  FaHeart,
  FaShareAlt,
  FaPlus,
} from "react-icons/fa";

const AnimeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const anime = allAnime.find((item) => item.uniqueId === Number(id));

  if (!anime) {
    return (
      <div className="min-h-screen bg-black text-white flex justify-center items-center">
        Anime Not Found
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {/* HERO SECTION */}
      <section
        className="relative h-[90vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${anime.img})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <button
          onClick={() => navigate(-1)}
          className="absolute top-24 left-8 z-50 w-12 h-12 flex items-center justify-center bg-black/70 backdrop-blur-md border border-gray-600 rounded-full hover:bg-purple-700 hover:scale-110 transition-all duration-300"
        >
          <FaArrowLeft  className="text-xl" />
        </button>

        <div className="relative z-10 max-w-7xl mx-auto px-8 h-full flex items-center justify-between">
          {/* LEFT SIDE */}
          <div className="max-w-xl">
            <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
              #1 Trending
            </span>

            <h1 className="text-7xl font-bold mt-4">{anime.title}</h1>

            <div className="flex items-center gap-6 mt-5">
              <div className="flex items-center gap-2 text-yellow-400">
                <FaStar />
                <span>{anime.rate}/10</span>
              </div>

              <span>2024</span>

              <span className="bg-purple-900 px-4 py-1 rounded-full">
                Action
              </span>

              <span className="bg-purple-900 px-4 py-1 rounded-full">
                Fantasy
              </span>
            </div>

            <p className="text-gray-300 mt-6 leading-8">{anime.description}</p>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-8">
              <button className="px-8 py-3 bg-purple-600 rounded-xl flex items-center gap-3 hover:bg-purple-700 hover:scale-95 transition-all">
                <FaPlay />
                Play Now
              </button>

              <a href={anime.trailer} target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-3 border border-white rounded-xl hover:bg-amber-500 hover:text-black hover:border-black hover:scale-95 transition-all duration-300 ease-in-out">
                  Watch Trailer
                </button>
              </a>

              <button className="w-12 h-12 rounded-full border border-gray-500 flex justify-center items-center hover:border-purple-900 hover:bg-purple-300/30 hover:scale-95 transition-all duration-300 ease-in-out">
                <FaPlus />
              </button>

              <button className="w-12 h-12 rounded-full border border-gray-500 flex justify-center items-center hover:border-purple-900 hover:bg-purple-300/30 hover:scale-95   duration-300 transition-all duration-300 ease-in-out">
                <FaHeart />
              </button>

              <button className="w-12 h-12 rounded-full border border-gray-500 flex justify-center items-center hover:border-purple-900 hover:bg-purple-300/30 hover:scale-95  duration-300 transition-all duration-300 ease-in-out">
                <FaShareAlt />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex flex-col gap-4">
            <img
              src={anime.img}
              alt=""
              className="w-60 h-32 object-cover rounded-xl border-2 hover:border-2 hover:border-purple-500"
            />

            <img
              src={anime.img}
              alt=""
              className="w-60 h-32 object-cover rounded-xl hover:border-2 hover:border-purple-500"
            />

            <img
              src={anime.img}
              alt=""
              className="w-60 h-32 object-cover rounded-xl hover:border-2 hover:border-purple-500"
            />
          </div>
        </div>
      </section>

      {/* TABS */}
      <div className="max-w-7xl mx-auto px-8 border-b border-gray-800">
        <div className="flex gap-8 py-5">
          <button className="text-purple-500 border-b-2 border-purple-500 pb-2">
            Overview
          </button>

          <button>Episodes</button>
          <button>Characters</button>
          <button>Reviews</button>
        </div>
      </div>

      {/* INFO SECTION */}
      <section className="max-w-7xl mx-auto px-8 py-10">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Poster */}
          <div>
            <img src={anime.img} alt="" className="rounded-2xl w-full" />
          </div>

          {/* Details */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Anime Information</h2>

            <div className="space-y-3 text-gray-300">
              <p>
                <b>Title:</b> {anime.title}
              </p>

              <p>
                <b>Rating:</b> {anime.rate}
              </p>

              <p>
                <b>Status:</b> Ongoing
              </p>

              <p>
                <b>Episodes:</b>
                {anime.episodes}{" "}
              </p>

              <p>
                <b>Studio:</b> {anime.studio}
              </p>

              <p>
                <span className="font-bold">Genre:</span>{" "}
                {anime.genre.join(", ")}
              </p>
            </div>
          </div>

          {/* Synopsis */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Synopsis</h2>

            <p className="text-gray-300 leading-8">{anime.synopsis}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnimeDetails;
