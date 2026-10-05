import { Link , useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";
import React, { useState } from "react";
import profile from "../assets/profileN.png";
import animeData, { allAnime } from "../data/animeData";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const suggestions = allAnime.filter((anime) =>
    anime.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (anime) => {
    navigate(`/anime/${anime.uniqueId}`);
    setSearch("");
    setMenuOpen(false);
  };


  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white border-b border-black shadow-md">
      <div className="flex items-center justify-between px-4 md:px-7 py-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            className="h-10 w-10 object-cover rounded-full"
            src={logo}
            alt=""
          />

          <h1 className="text-lg md:text-xl font-semibold">
            Anime
            <span className="text-purple-500">Verse</span>
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-10">
          <Link className="hover:text-purple-500" to="/">
            Home
          </Link>
          <Link className="hover:text-purple-500" to="/trending">
            Trending
          </Link>
          <Link className="hover:text-purple-500" to="/populor">
            Populor
          </Link>
          <Link className="hover:text-purple-500" to="/movies">
            Movies
          </Link>
          <Link className="hover:text-purple-500" to="/Genre">
            Genres
          </Link>
        </div>

        {/* Search + Profile */}
        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <div className="flex rounded-xl bg-gray-900 border border-gray-600 overflow-hidden">
              <input
                type="text"
                placeholder="Search anime..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent px-3 py-2 w-48 lg:w-64 outline-none text-white"
              />

              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="px-3 text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              )}

              <FontAwesomeIcon
                className="px-4 py-3 cursor-pointer"
                icon={faMagnifyingGlass}
              />
            </div>

            {search.trim() !== "" && (
              <div className="absolute top-full left-0 w-full mt-2 bg-[#111827] border border-purple-900 rounded-xl overflow-hidden z-50 max-h-80 overflow-y-auto">
                {suggestions.length > 0 ? (
                  suggestions.slice(0, 5).map((anime) => (
                    <div
                      key={anime.id}
                      className="flex items-center gap-3 p-3 hover:bg-purple-900/30 cursor-pointer"
                      onClick={() => handleSearch(anime)}
                    >
                      <img
                        src={anime.img}
                        alt={anime.title}
                        className="w-10 h-14 rounded object-cover"
                      />

                      <div>
                        <h4 className="text-sm text-white">{anime.title}</h4>

                        <p className="text-xs text-gray-400">⭐ {anime.rate}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-3 text-gray-400">No anime found</div>
                )}
              </div>
            )}
          </div>

          <Link to="/login">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src={profile}
              alt=""
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col gap-4 px-6 pb-5 bg-gray-900">
          <Link to="/">Home</Link>
          <Link to="/trending">Trending</Link>
          <Link to="/populor">Populor</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/Genre">Genres</Link>

          <div className="flex rounded-xl border border-gray-600 overflow-hidden">
            <input
              type="text"
              placeholder="Search anime..."
              className="bg-transparent px-3 py-2 w-full outline-none"
            />

            <FontAwesomeIcon className="px-4 py-3" icon={faMagnifyingGlass} />
          </div>

          <Link to="/login">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src={profile}
              alt=""
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
