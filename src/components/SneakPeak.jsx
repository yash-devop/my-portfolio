import React, { useContext, useState } from "react";
import { ReactDOM } from "react";
import { ThemeContext } from "../context/context";
import sneakpeak1 from "../assets/sneakpeak-1.png"
import sneakpeak2 from "../assets/sneakpeak-2.png"
import sneakpeak3 from "../assets/sneakpeak-3.png"
import { useNavigate } from "react-router-dom";
import {HiArrowNarrowRight} from 'react-icons/hi'

const SneakPeak=()=>{
    const {darkMode} = useContext(ThemeContext);

    const [hover , setHover] = useState(false);
    const [text , setText] = useState(null)

    const navigate = useNavigate();

    const onhandleHover=(e)=>{
         setHover(true);
         setText(<h1>Wanna see the my projects ?</h1>)
    }
    const handleHoverOff=(e)=>{
        setHover(false);
        setText(null)
    }
    const goToWork=()=>{
        navigate("/work")
    }
    return(
        <>
            <div className={`py-4 relative`}>
                <div className="pb-4">
                    <p className={`text-2xl ${darkMode ? "text-[#A5A5A5]" : "text-[#090909]"}`}>SneakPeek</p>    
                    <div className="flex items-center gap-2">
                        <p className={`text-md ${darkMode ? "text-[#353535]" : "text-[#9C9C9C]"} whitespace-nowrap`}>
                        have a sneak peek to my work

                        </p>    
                        <HiArrowNarrowRight className={`${darkMode ? "text-[#353535]" : "text-[#9C9C9C]"}`}/>
                    </div>
                </div>
                <div onMouseEnter={onhandleHover} onMouseLeave={handleHoverOff} className="grid-image-container  hover:opacity-60 transition-all duration-100 ease-out hover:transition-all hover:duration-300 hover:ease-in">
                    <div className="grid-image-subcontainer">
                        <img src={sneakpeak1} alt="" className="w-full h-full object-cover aspect-auto"/>
                    </div>
                    <div className="grid-image-subcontainer-2">
                        <div className="">
                            <img src={sneakpeak2} alt="" className="w-full h-full object-cover aspect-auto"/>
                        </div>
                        <div className="">
                            <img src={sneakpeak3} alt="" className="w-full h-full object-cover aspect-auto"/>
                        </div>
                    </div>
                <div onMouseEnter={onhandleHover} onMouseLeave={handleHoverOff} className={`absolute flex flex-col items-center justify-center ${hover ? "opacity-100" : null}  w-full h-[650px] text-center  transition-all duration-100 ease-out hover:transition-all hover:duration-300 hover:ease-out`}>
                    <h1 className={`text-[#FDFDF2] text-center text-3xl shadow-whitexl`}>{text}</h1>
                    {hover ? <button onClick={goToWork} className="flex gap-2 items-center p-4 bg-black border border-white mt-4 text-white cursor-pointer">
                    <p>Projects</p>
                    <HiArrowNarrowRight/>
                    </button>: null}
                </div>
                </div>
            </div>
        </>
    )
}

export default SneakPeak;