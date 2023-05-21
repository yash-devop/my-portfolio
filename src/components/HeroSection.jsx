import React, { useContext } from 'react'
import stmpdWhite from '../assets/stmpd-white.png'
import stmpdBlack from '../assets/stmpd-black.png'
import {BsInstagram, BsLinkedin, BsTwitter} from 'react-icons/bs'
import { ThemeContext } from '../context/context'
const HeroSection = () => {
  const {darkMode,setDarkMode} = useContext(ThemeContext);
  return (
    <>
        <div className='pb-52'>
            <div className='flex pt-10 cursor-default'>
            {darkMode ? (
              <>
              <svg width="278" height="278" viewBox="0 0 326 373" fill="none" xmlns="http://www.w3.org/2000/svg" className='mx-20 mt-20'>
                    <path d="M189.5 194.5L195.5 162.5L237 155.5L232 171.5L189.5 194.5Z" stroke="white"/>
                    <path d="M238 171.5L242.5 154.5L255.5 152.5L251 177.5L238 171.5Z" stroke="white"/>
                    <path d="M193 145.5L179 222.5" stroke="white"/>
                    <path d="M25 282L1 93L163 1L324 93.5L299 282L162 371.5L25 282Z" stroke="white"/>
                    <path d="M29.5 274L7.5 101.5L64 150L75 218.5L29.5 274Z" stroke="white"/>
                    <path d="M65.5 145L8 94.5L74 57.5L160 106.5V130L101 97.5L65.5 145Z" stroke="white"/>
                    <path d="M165 130.5V106.5L250.5 57.5L316.5 95L272.5 134L286 102.5L265 74.5L165 130.5Z" stroke="white"/>
                    <path d="M160 101L79 54L160 7.5V101Z" stroke="white"/>
                    <path d="M164.5 101V7L245.5 54.5L164.5 101Z" stroke="white"/>
                    <path d="M77.5 223L32 277L101.5 244.5L77.5 223Z" stroke="white"/>
                    <path d="M79 217.5L74 183L91 176.5L137 200.5L140.5 217.5H79Z" stroke="white"/>
                    <path d="M73 178.5L69 153L82 154L87.5 171.5L73 178.5Z" stroke="white"/>
                    <path d="M193 145.5H165V260.5L195 247L189 266L184 264.5L186 256.5L165 266V274L189 276.5V281.5L165 278.5V295L192.5 285.5L214.5 247L239.5 222.5H178.5M87.5 156L92 170.5L141.5 197L146 222.5H85.5L108 243.5L132 285.5L160 295V278.5L135 281.5V276.5L160 274V266L138.5 256.5L141 264.5L136 266L129 247L160 260.5V145.5H131.5L135.5 163L87.5 156ZM160 140L130 140.5L126 117L160 136V140ZM165 136V140.5H195L199 117.5L165 136ZM70.5 147.5L128 156L120 114L102 104.5L70.5 147.5ZM205 114L222 104.5L254 147.5L197 156L205 114Z" stroke="white"/>
                    <path d="M185 218L188 200.5L235 176L250 182.5L245 218H185Z" stroke="white"/>
                    <path d="M224 98L259 145.5L265.5 139L232.5 93.5M239.5 94.5L267 132L280.5 104L264 81.5L239.5 94.5Z" stroke="white"/>
                    <path d="M317 102L261 151L250 219L295.5 274L317 102Z" stroke="white"/>
                    <path d="M223.5 244.5L247 223.5L287 274L223.5 244.5Z" stroke="white"/>
                    <path d="M290.5 281L220.5 249L198 286.5L234 319L290.5 281Z" stroke="white"/>
                    <path d="M105 249L32.5 281L91.5 318.5L127 286.5L105 249Z" stroke="white"/>
                    <path d="M129 291.5L96 322L157 362L129 291.5Z" stroke="white"/>
                    <path d="M160 355L135 291.5L160 300V355Z" stroke="white"/>
                    <path d="M165 355V300L190 291.5L165 355Z" stroke="white"/>
                    <path d="M229 322L169 362L195.5 291.5L229 322Z" stroke="white"/> 
                </svg>
              </>
                
            ) : (
              <>
                <svg width="278" height="278" viewBox="0 0 326 373" fill="none" xmlns="http://www.w3.org/2000/svg" className='mx-20 mt-20'>
                    <path d="M190 194.5L196 162.5L237.5 155.5L232.5 171.5L190 194.5Z" stroke="black"/>
                    <path d="M238.5 171.5L243 154.5L256 152.5L251.5 177.5L238.5 171.5Z" stroke="black"/>
                    <path d="M193.5 145.5L179.5 222.5" stroke="black"/>
                    <path d="M25.5 282L1.5 93L163.5 1L324.5 93.5L299.5 282L162.5 371.5L25.5 282Z" stroke="black"/>
                    <path d="M30 274L8 101.5L64.5 150L75.5 218.5L30 274Z" stroke="black"/>
                    <path d="M66 145L8.5 94.5L74.5 57.5L160.5 106.5V130L101.5 97.5L66 145Z" stroke="black"/>
                    <path d="M165.5 130.5V106.5L251 57.5L317 95L273 134L286.5 102.5L265.5 74.5L165.5 130.5Z" stroke="black"/>
                    <path d="M160.5 101L79.5 54L160.5 7.5V101Z" stroke="black"/>
                    <path d="M165 101V7L246 54.5L165 101Z" stroke="black"/>
                    <path d="M78 223L32.5 277L102 244.5L78 223Z" stroke="black"/>
                    <path d="M79.5 217.5L74.5 183L91.5 176.5L137.5 200.5L141 217.5H79.5Z" stroke="black"/>
                    <path d="M73.5 178.5L69.5 153L82.5 154L88 171.5L73.5 178.5Z" stroke="black"/>
                    <path d="M193.5 145.5H165.5V260.5L195.5 247L189.5 266L184.5 264.5L186.5 256.5L165.5 266V274L189.5 276.5V281.5L165.5 278.5V295L193 285.5L215 247L240 222.5H179M88 156L92.5 170.5L142 197L146.5 222.5H86L108.5 243.5L132.5 285.5L160.5 295V278.5L135.5 281.5V276.5L160.5 274V266L139 256.5L141.5 264.5L136.5 266L129.5 247L160.5 260.5V145.5H132L136 163L88 156ZM160.5 140L130.5 140.5L126.5 117L160.5 136V140ZM165.5 136V140.5H195.5L199.5 117.5L165.5 136ZM71 147.5L128.5 156L120.5 114L102.5 104.5L71 147.5ZM205.5 114L222.5 104.5L254.5 147.5L197.5 156L205.5 114Z" stroke="black"/>
                    <path d="M185.5 218L188.5 200.5L235.5 176L250.5 182.5L245.5 218H185.5Z" stroke="black"/>
                    <path d="M224.5 98L259.5 145.5L266 139L233 93.5M240 94.5L267.5 132L281 104L264.5 81.5L240 94.5Z" stroke="black"/>
                    <path d="M317.5 102L261.5 151L250.5 219L296 274L317.5 102Z" stroke="black"/>
                    <path d="M224 244.5L247.5 223.5L287.5 274L224 244.5Z" stroke="black"/>
                    <path d="M291 281L221 249L198.5 286.5L234.5 319L291 281Z" stroke="black"/>
                    <path d="M105.5 249L33 281L92 318.5L127.5 286.5L105.5 249Z" stroke="black"/>
                    <path d="M129.5 291.5L96.5 322L157.5 362L129.5 291.5Z" stroke="black"/>
                    <path d="M160.5 355L135.5 291.5L160.5 300V355Z" stroke="black"/>
                    <path d="M165.5 355V300L190.5 291.5L165.5 355Z" stroke="black"/>
                    <path d="M229.5 322L169.5 362L196 291.5L229.5 322Z" stroke="black"/>
                </svg>
              </>
            )}
              
              <div className='flex flex-col'>
                <div className='pt-14 pb-7'>
                  <h1 className={`text-7xl ${darkMode ? "text-[#353535]" : ""}`}>hi i’m<br/><span className={`${darkMode ? "text-[#ACACAC]" : ""}`}>yashkamble.</span></h1>
                  <p className='text-[#575757] leading-[28px] max-w-[520px] pt-8 tracking-[-1.5%] text-left'>I’m a designer working on the Human Interface Team at Apple. My passion is to create emotional experiences at the intersection of art, design, and AI.</p>
                </div>
                <div className=''>
                  <p className='text-[color:var(--heading-gray)] text-2xl pb-3'>Connect with me</p>
                  <div className='flex gap-4'>
                      <BsInstagram className='text-[#C13584] w-[35px] h-[35px] cursor-pointer'/>
                      <BsLinkedin className='text-[#0077B5] w-[35px] h-[35px] bg-white rounded-[5px] cursor-pointer'/>
                      <BsTwitter className='text-[#1DA1F2] w-[35px] h-[35px] cursor-pointer'/>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default HeroSection