import React, { useContext } from "react";
import { AnimeDataContext } from "../Context/AnimeContext";
import shinobu from "../assets/shinobu.png";
import blossom from "../assets/blossom.png";
import shinobuFight from "../assets/shinobu-f.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";

const Genre = () => {
  const { genres } = useContext(AnimeDataContext);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  return (
    <div className="min-h-screen pb-10 pt-16 bg-gray-950 text-white">
      <div
        className="relative h-[500px] overflow-hidden"
        onMouseEnter={() => {
          setIsHovered(true);

          if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
          }
        }}
        onMouseLeave={() => {
          setIsHovered(false);

          if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
          }
        }}
      >
        {/* Image */}
        <img
          src={shinobu}
          alt="Shinobu"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Video */}
        <video
          ref={videoRef}
          src={shinobuFight}
          loop
          playsInline
          preload="metadata"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-[1]"></div>

        {/* Content */}
        <div className="relative z-[2] h-full flex flex-col justify-center px-8 md:px-14 lg:px-16">
          <a
            href="#"
            className="text-amber-400 uppercase tracking-[4px] text-lg md:text-xl font-medium drop-shadow-[0_0_12px_rgba(251,191,36,0.8)]"
          >
            Explore Your World
          </a>

          <div className="flex gap-3 mt-2">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold text-white leading-none drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
              Anime
            </h1>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold text-fuchsia-500 leading-none drop-shadow-[0_0_25px_rgba(217,70,239,0.9)]">
              Genres
            </h1>
          </div>

          <p className="mt-5 text-slate-200 text-lg md:text-xl max-w-xl leading-relaxed font-light drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
            Different stories. Different worlds.
            <br />
            Find the genre that speaks to you.
          </p>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-3 my-8">
          <div className="w-1.5 h-8 bg-red-600 rounded-sm"></div>
          <h2 className="text-4xl font-medium text-white font-serif">
            Browser by Genre
          </h2>
        </div>

        <div className="grid grid-cols-5 gap-4 px-5">
          {genres.map((item) => (
            <div
              key={item.id}
              className="rounded-xl overflow-hidden border border-slate-700 bg-black/80"
            >
              <img
                src={item.img}
                alt={item.heading}
                className="w-full h-40 object-cover"
              />

              <div className="p-3">
                <h3 className="text-white font-semibold">{item.heading}</h3>

                <p className="text-slate-400 text-sm">{item.para}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="relative min-h-[240px] md:h-60 mx-3 md:mx-5 my-10 rounded-2xl bg-cover bg-center border border-gray-600 overflow-hidden"
          style={{ backgroundImage: `url(${blossom})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative flex flex-col md:flex-row justify-between h-full">
            <div className="mt-8 md:mt-10 px-5 md:px-15 text-center md:text-left">
              <h4 className="text-3xl sm:text-4xl md:text-6xl text-amber-500 font-serif">
                More Than <br /> Anime
              </h4>

              <p className="text-purple-200 mt-2 text-sm md:text-base">
                Explore stories emotions and <br />
                worlds through every genre.
              </p>
            </div>

            <div className="px-5 md:px-20 pb-8 md:pb-0 md:mt-30 flex flex-col items-center">
              <button className="flex items-center gap-2 px-6 md:px-8 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:scale-95 transition-all shadow-lg">
                Start Exploring
                <FontAwesomeIcon icon={faArrowRightLong} className="text-sm" />
              </button>

              <p className="uppercase text-purple-200 text-center mt-2 text-xs md:text-sm">
                A Universe awaits
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genre;
