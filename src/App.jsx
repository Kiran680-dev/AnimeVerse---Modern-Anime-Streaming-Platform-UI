import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Route, Routes, useLocation} from 'react-router-dom'
import Home from './Pages/Home'
import Trending from './Pages/Trending'
import Populor from './Pages/Populor'
import Movies from './Pages/Movies'
import Genre from './Pages/Genre'
import Login from './Pages/Login'
import TopRated from './Pages/TopRated'
import AnimeDetails from './Pages/AnimeDetails'


const App = () => {
  const location = useLocation();

  return (
    <div 
       className='min-h-screen transition-all duration-300 bg-gray-800 text-white'
    >
      <Navbar />

      <main className='min-h-screen bg-black text-white'>
         <Routes>
             <Route path='/' element={<Home />} />
             <Route path='/trending' element={<Trending />} />
             <Route path='/populor' element={<Populor />} />
             <Route path='/movies' element={<Movies />} />

             <Route path='/Genre' element={<Genre />} ></Route>

             <Route path='/login' element={<Login />}></Route>

             <Route path='/top-rated' element={<TopRated />}></Route>
             <Route path='/anime/:id' element={<AnimeDetails /> }></Route>
         </Routes>
      </main>

      {location.pathname !== "/login" && <Footer />}

    </div>
  )
}

export default App