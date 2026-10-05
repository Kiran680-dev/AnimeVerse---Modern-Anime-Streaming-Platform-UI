import React from "react";
import { Link } from "react-router-dom";
import footer from "../assets/footer.png";
import { FaYoutube, FaInstagram, FaDiscord, FaGithub } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import logo from "../assets/logo.png";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div
        className="relative min-h-[900px] xl:min-h-0 xl:h-110 bg-cover bg-center"
        style={{ backgroundImage: `url(${footer})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
  
        <div className="relative flex flex-col xl:flex-row justify-center xl:items-center text-white gap-12 xl:gap-25 pt-20 pb-10 px-6 xl:px-0">
          
          {/* Left Section */}
          <div className="w-full xl:w-auto">
            <div className="flex gap-5 justify-center xl:justify-start">
              <img
                className="h-20 w-20 object-cover rounded-full"
                src={logo}
                alt=""
              />
  
              <div>
                <div className="flex">
                  <h2 className="text-4xl font-semibold">Anime</h2>
                  <h2 className="text-4xl font-semibold text-purple-700">
                    Verse
                  </h2>
                </div>
  
                <p className="text-white/60">Explore. Discover. Feel.</p>
              </div>
            </div>
  
            <div>
              <p className="text-white/70 mt-5 xl:ml-3 text-center xl:text-left">
                More than Anime. <br />
                A Universe of stories, emotions and
                <br />
                endless worlds.
              </p>
  
              <div className="flex flex-wrap gap-4 mt-6 justify-center xl:justify-start">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full border border-purple-700 bg-purple-400/30 border-none flex items-center justify-center text-white hover:bg-purple-700 transition-all duration-300 ring-2 ring-purple-700 hover:shadow-lg hover:shadow-purple-700"
                >
                  <FaYoutube size={20} />
                </a>
  
                <a
                  href="#"
                  className="w-12 h-12 rounded-full border border-purple-700 flex items-center bg-purple-400/30 border-none justify-center text-white hover:bg-purple-600 transition-all duration-300 ring-2 ring-purple-700 hover:shadow-lg hover:shadow-purple-700"
                >
                  <FaInstagram size={20} />
                </a>
  
                <a
                  href="#"
                  className="w-12 h-12 rounded-full border border-purple-700 flex items-center bg-purple-400/30 border-none justify-center text-white hover:bg-purple-600 transition-all duration-300 ring-2 ring-purple-700 hover:shadow-lg hover:shadow-purple-700"
                >
                  <IoLogoTwitter size={20} />
                </a>
  
                <a
                  href="#"
                  className="w-12 h-12 rounded-full border border-purple-700 flex items-center bg-purple-400/30 border-none justify-center text-white hover:bg-purple-600 transition-all duration-300 ring-2 ring-purple-700 hover:shadow-lg hover:shadow-purple-700"
                >
                  <FaDiscord size={20} />
                </a>
  
                <a
                  href="#"
                  className="w-12 h-12 rounded-full border border-purple-700 flex items-center bg-purple-400/30 border-none justify-center text-white hover:bg-purple-600 transition-all duration-300 ring-2 ring-purple-700 hover:shadow-lg hover:shadow-purple-700"
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          </div>
  
          {/* Right Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:flex xl:gap-25 gap-10">
  
            {/* Explore */}
            <div>
              <h3 className="text-2xl font-semibold">Explore</h3>
  
              <div className="flex flex-col gap-2 mt-5 text-white/70">
                <Link className="hover:underline" to="/">
                  Home
                </Link>
  
                <Link className="hover:underline" to="/trending">
                  Trending
                </Link>
  
                <Link className="hover:underline" to="/populor">
                  Populor
                </Link>
  
                <Link className="hover:underline" to="/movies">
                  Movies
                </Link>
  
                <Link className="hover:underline" to="/Genre">
                  Genres
                </Link>
              </div>
            </div>
  
            {/* Support */}
            <div>
              <h3 className="text-2xl font-semibold">Support</h3>
  
              <div className="flex flex-col gap-2 mt-5 text-white/70">
                <a className="hover:underline" href="#">
                  Help Center
                </a>
  
                <a className="hover:underline" href="#">
                  FAQ
                </a>
  
                <a className="hover:underline" href="#">
                  Contact Us
                </a>
  
                <a className="hover:underline" href="#">
                  Report an Issue
                </a>
  
                <a className="hover:underline" href="#">
                  Privacy Policy
                </a>
  
                <a className="hover:underline" href="#">
                  Terms of Service
                </a>
              </div>
            </div>
  
            {/* Community */}
            <div>
              <h3 className="text-2xl font-semibold">Community</h3>
  
              <div className="flex flex-col gap-2 mt-5 text-white/70">
                <a className="hover:underline" href="#">
                  About Us
                </a>
  
                <a className="hover:underline" href="#">
                  Our Blog
                </a>
  
                <a className="hover:underline" href="#">
                  Career
                </a>
  
                <a className="hover:underline" href="#">
                  Partner with Us
                </a>
  
                <a className="hover:underline" href="#">
                  Feedback
                </a>
              </div>
            </div>
  
            {/* Stay Updated */}
            <div>
              <h3 className="text-2xl font-semibold">Stay Updated</h3>
  
              <p className="mt-5 text-white/70">
                Subscribe to get the latest anime news,
                <br />
                updates and exclusive content.
              </p>
  
              <div className="flex items-center w-full max-w-md mt-5">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="flex-1 h-12 px-4 bg-[#071226] border border-[#1a2b4d] rounded-l-lg text-white placeholder:text-gray-500 outline-none focus:border-purple-600"
                />
  
                <button className="h-12 w-14 flex items-center justify-center bg-purple-700 hover:bg-purple-800 rounded-r-lg transition-all duration-300">
                  <FaTelegramPlane className="text-white text-lg" />
                </button>
              </div>
  
              <div className="flex gap-2 text-white/70 mt-4 text-sm">
                <input type="checkbox" />
                <p>I agree to receive updates from AnimeVerse.</p>
              </div>
            </div>
  
          </div>
        </div>
  
        <div className="flex justify-center items-center relative px-4">
          <p
            className="italic text-purple-300 text-lg xl:text-xl text-center"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            "Different Stories. Same Passion."
          </p>
        </div>
      </div>
  
      <div className="bg-black/70 text-white/80 flex flex-col md:flex-row justify-between items-center min-h-14 w-full px-6 xl:px-10 py-4 text-sm border-t border-purple-700 gap-2 md:gap-0">
        <p>© 2024 AnimeVerse. All rights reserved.</p>
        <p>Made with 💜 for Anime Lovers</p>
      </div>
    </div>
  );
};

export default Footer;
