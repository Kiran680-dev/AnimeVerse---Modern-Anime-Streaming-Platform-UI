import React, { createContext, useState } from 'react'
import heroData from '../data/heroData'

export const heroDataContext = createContext();

const HeroContext = ({children}) => {

    const [hero, setHero] = useState(heroData)

    const globalHero = {
        hero,
        setHero,
    };

  return (
    <heroDataContext.Provider value={globalHero}>
    {children}
    </heroDataContext.Provider>
  )
}

export default HeroContext
