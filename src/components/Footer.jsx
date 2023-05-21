import React, { useContext } from 'react'
import { ThemeContext } from '../context/context'

const Footer = () => {
    const {darkMode} = useContext(ThemeContext);

  return (
    <>
        <div className={`flex items-center justify-center py-10 ${darkMode ? "text-white" : "text-[#090909]"}`}>
            <p>© 2023 - yashkamble.stmpd. all rights reserved.</p>
        </div>
    </>
  )
}

export default Footer