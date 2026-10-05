import React, { useContext } from 'react'
import { AnimeDataContext } from '../Context/AnimeContext'
import { Link } from 'react-router-dom';

const Populor = () => {
  const {topRated} = useContext(AnimeDataContext);

  return (
    <div className='min-h-screen  px-6 py-10 pt-25 bg-gray-950 text-white'>

      <h1 className='text-6xl font-bold mb-2 text-white'>
        Top Rated Anime
      </h1>

      <p className='font-seri mb-14 text-white'>
      Explore the best-rated anime masterpieces, featuring legendary adventures, unforgettable characters, and stories that have captivated millions of fans worldwide..</p>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {topRated.map((anime) => (
        <Link
          key={anime.uniqueId}
          to={`/anime/${anime.uniqueId}`}
          className="bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 duration-300 cursor-pointer block"
        >
          <img
            src={anime.img}
            alt={anime.title}
            className="w-full h-40 object-cover"
          />
      
          <div className="p-4">
            <h2 className="text-white font-semibold text-lg line-clamp-1">
              {anime.title}
            </h2>
      
            <p className="text-yellow-400 mt-2">
              ⭐ {anime.rate}
            </p>
          </div>
        </Link>
      ))}
      </div>
    </div>
  )
}

export default Populor
