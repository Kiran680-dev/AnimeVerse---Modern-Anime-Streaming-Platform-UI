import React, { useContext, useState, useEffect } from "react";
import { heroDataContext } from "../Context/HeroContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPlus,
  faStar,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  const { hero } = useContext(heroDataContext);
  const [currentSlide, setCurrentSlide] = useState(0);
  const currentHero = hero[currentSlide];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === hero.length - 1 ? 0 : prev + 1));
    }, 3000  ); // 5 seconds

    return () => clearInterval(interval);
  }, [hero.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      return prev === hero.length - 1 ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      return prev === 0 ? hero.length - 1 : prev - 1;
    });
  };

  return (
    <section className="relative px-8 pt-6">
      <div
        className="relative h-[550px] rounded-3xl overflow-hidden bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${currentHero.img})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>

        <div className="relative z-10 w-full h-full flex items-center">
          <div className="max-w-xl pl-14">
            <span className="bg-purple-700 px-4 py-1 rounded-full text-sm font-semibold">
              {currentHero.tag}
            </span>

            <h1 className="text-6xl font-extrabold text-white mt-6">
              {currentHero.title}
            </h1>

            <p className="text-gray-300 text-lg mt-5 leading-8">
              {currentHero.description}
            </p>

            <div className="flex items-center gap-6 mt-7 text-white">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faStar} className="text-yellow-400" />

                <span className="font-semibold">{currentHero.rating}</span>
              </div>

              <p>●</p>

              <span>{currentHero.year}</span>

              <p>●</p>

              <span>{currentHero.episodes} Episodes</span>

              <p>●</p>

              <span className="bg-purple-700 px-4 py-1 rounded-full">
                {currentHero.category}
              </span>
            </div>

            <div className="flex gap-5 mt-10">
              <button className="flex items-center gap-3 bg-purple-700 hover:bg-purple-900 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 active:scale-95">
                <FontAwesomeIcon icon={faPlay} />
                Watch Now
              </button>

              <button className="flex items-center gap-3 bg-purple-700 hover:bg-purple-900 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 active:scale-95">
                <FontAwesomeIcon icon={faPlus} />
                Add to Watchlist
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 z-50 bg-black/40 text-white w-14 h-14  hover:bg-gray-950 active:scale-105 duration-500 rounded-full"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 z-50 bg-black/40 hover:bg-gray-950 active:scale-105 duration-500 text-white w-14 h-14 rounded-full"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {hero.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-purple-600 w-8" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
