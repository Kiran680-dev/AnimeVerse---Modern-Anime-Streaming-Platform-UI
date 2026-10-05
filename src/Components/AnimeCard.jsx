import React, { useContext } from 'react'
import {AnimeDataContext} from '../Context/AnimeContext'

const AnimeCard = ({id}) => {
  const data = useContext(AnimeDataContext)

  const allAnime = [
    ...data.trending,
    ...data.populor,
    ...data.topRated,
  ];

  const anime = allAnime.find((item) => item.id === id);
  return (
    <div>
    <img src={anime.img} alt={anime.title} />
    <h2>{anime.title}</h2>
    <p>{anime.rate}</p>
    </div>
  )
}

export default AnimeCard
