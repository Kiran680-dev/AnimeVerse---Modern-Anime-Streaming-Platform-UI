import React, { createContext } from 'react'
import animeData from '../data/animeData'

export const AnimeDataContext =  createContext()

const AnimeContext = ({children}) => {
  return (
    <AnimeDataContext.Provider value={animeData}>
       {children}
    </AnimeDataContext.Provider>
  )
}

export default AnimeContext
