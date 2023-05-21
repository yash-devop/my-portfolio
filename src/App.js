import { createContext, useContext, useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import { ThemeContext} from './context/context'
import SneakPeak from './components/SneakPeak';
import { Route, Routes } from 'react-router-dom';
import Project from './pages/Project';
import Home from './pages/Home';
import Footer from './components/Footer';
import Skills from './pages/Skills';
import Experiences from './pages/Experiences';
import Resume from './pages/Resume';
function App() {
  const { darkMode } = useContext(ThemeContext);
  console.log('Darkmode',darkMode);
  return (
    <>
      {/* <div className='flex mx-auto flex-col max-w-6xl'> */}
      
          <div className={`px-10 md:px-32 min-h-screen flex flex-col mx-auto ${darkMode ? "bg-[#090909] transition-all ease-in duration-100" : ". transition-all ease-out duration-100"}`}>
            <div className='flex flex-col w-[1150px] mx-auto'>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/work' element={<Project/>}/>
              <Route path='/skill' element={<Skills/>}/>
              <Route path='/experience' element={<Experiences/>}/>
              <Route path='/resume' element={<Resume/>}/>
          </Routes>
            </div>
            
          </div>
    </>
  )
}

export default App
