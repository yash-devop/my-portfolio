import React, { useContext, useEffect, useState } from 'react'
import { BsToggleOn } from 'react-icons/bs';
import { BsToggleOff } from 'react-icons/bs';
import { BiMoon, BiSun } from 'react-icons/bi';
import { ThemeContext } from '../context/context';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
  const {darkMode,setDarkMode,activeTab,setActiveTab} = useContext(ThemeContext);

  const navigate = useNavigate();

  const handleThemeToggle=()=>{
    setDarkMode(!darkMode)
  }
  
  function handleHomeClick() {
    setActiveTab("home");
    navigate('/')
  }
  function handleSkillClick() {
    setActiveTab("skill");
  }
  function handleWorkClick() {
    setActiveTab("work");
  }
  function handleExpClick() {
    setActiveTab("experience");
  }
  function handleResumeClick() {
    setActiveTab("resume");
  }

  return (
    <>
      <div className={`flex justify-between items-center pt-6 ${darkMode ? "text-[color:var(--heading-white)]" : "text-[color:var(--bg-black)]" }`}>
        <div>
          <p className=''>yashkamble,webdev</p>
        </div>
        <div className=''>
          <ul className={`flex gap-8 `}>
            <li className={`cursor-pointer ${activeTab  === "home" && darkMode ? "active text-red-400" : "text-yellow-400"} p-1.5`} onClick={handleHomeClick}><Link to={'/'}>Home</Link></li>
            <li className={`cursor-pointer ${activeTab === "skill" ? "active" : ""} p-1.5`} onClick={handleSkillClick}><Link to={'/skill'}>Skills</Link></li>
            <li className={`cursor-pointer ${activeTab === "work" ? "active" : ""} p-1.5` } onClick={handleWorkClick}><Link to={'/work'}>Work</Link></li>
            <li className={`cursor-pointer ${activeTab === "experience" ? "active" : ""} p-1.5`} onClick={handleExpClick}><Link to={'/experience'}>Experience</Link></li>
            <li className={`cursor-pointer ${activeTab === "resume" ? "active" : ""} p-1.5`} onClick={handleResumeClick}><Link to={'/resume'}>Resume.</Link></li>
          </ul>
        </div>
        <div className='flex gap-1 items-center text-[color:var(--heading-white)] transition-all ease-out duration-100'>
          {
            darkMode ? (
              <>
              <p>Dark</p>
              <div className='p-1.5 rounded-lg bg-[#44444452] text-white'>

                <BiSun className='cursor-pointer transition-all ease-out duration-100' onClick={handleThemeToggle} />
              </div>

              </>
            ):(
              <>
              <div className='flex items-center gap-1'>
                <p className='text-[#090909]'>Light</p>
                <div className='p-1.5 rounded-lg bg-[#44444452]/10 text-black'>
                  <BiMoon className='cursor-pointer text-[#9C9C9C] transition-all ease-out duration-100' onClick={handleThemeToggle} />
                </div>
              </div>
              </>
            )
          }
        </div>
      </div>
    </>
  )
}

export default Navbar;



