import Icon from "../icons/icons";
import { icons } from "../icons/icons";

import Content from "../Content.json"
import { ThemeContext } from "../Theme";
import { useContext } from "react";

const AboutMe = ({ handlePrevious, handleNext, currentSlide}) => {

    const { theme } = useContext(ThemeContext)
    const skills = Object.keys(icons);

      const slides = [
        {
          id: 1,
          content: (
            <div className="w-full h-full lg:flex-shrink-0 grid lg:grid-cols-3 lg:grid-rows-none place-content-center lg:gap-6 xs:gap-0
            xs:w-full lg:GRID_AM_LG xs:GRID_AM_XS">
                {/** LEFT CONTENT */}
                <div className="lg:h-72 xs:h-full flex flex-col text-right lg:items-end lg:justify-between xs:items-center" style={{ gridArea: "information"}}>
                    <div className="w-auto flex flex-col gap-2 lg:items-end xs:items-center">
                        <h1 className="font-bold text-2xl text-sky-500">FADHLI NUR HIMAWAN</h1>
                        <div className="flex gap-2 text-xs xs:items-center lg:items-end text-white">
                            <p className="bg-blue-950 py-1 px-3 rounded ">You can call me <span className="text-amber-500">Hima</span></p>
                            <div className="flex bg-blue-950 py-1 px-3 rounded"><h1 className="font-bold text-amber-500">22 years old <span className="font-normal text-white"> Wonogiri, 11 March 2002</span></h1></div>
                        </div>
                    </div>
                    <p className="lg:p-0 xs:p-3 font-medium text-sm text-justify indent-10">
                    Passionate about application and AI development. Skilled in developing major web applications, with a focus on creating interactive and visually appealing front-end pages, as well as handling computational back-end processes. A day-to-day English consumer, continuously working to stay updated with global news and trends. A keen enthusiasm for artificial intelligence.
                    </p>
                </div>
                {/** CENTER CONTENT */}
                <div className="lg:h-72 xs:h-[23rem] w-full lg:p-0 xs:p-2 " style={{ gridArea: "photo"}}>
                    <img className="object-cover h-full w-full rounded-md" src={`${process.env.PUBLIC_URL}/img/fotoSaya.jpg`} alt="" />
                </div>
                {/** RIGHT CONTENT LG */}
                <div className="h-72 lg:p-0 xs:p-2 xs:hidden lg:grid grid-rows-2 gap-2 text-left items-center justify-items-stretch">
                    {/** LINK TO SOCIAL MEDIA */}
                    {/** LABEL 1 */}
                    <div className="w-full p-1.5 h-full cursor-pointer rounded-lg bg-blue-950
                        transition-all hover:scale-95 
                    " >
                        <div className="w-full h-full grid grid-cols-3">
                            <div className="ml-4 self-center text-4xl font-semibold z-10 text-white">LINKEDIN</div>
                            <div className="col-span-2 relative rounded-md overflow-hidden">
                                <div className="w-full h-full absolute bg-gradient-to-r from-blue-950 to-sky-500"></div>
                                <img className="object-cover h-full w-full" src={`${process.env.PUBLIC_URL}/img/linkedin.png`} alt="" />
                            </div>
                        </div>                        
                    </div>
                    {/** LABEL 2 */}
                    <div className="w-full p-1.5 h-full cursor-pointer rounded-lg bg-blue-950
                        transition-all hover:scale-95
                    " >
                        <div className="w-full h-full grid grid-cols-3">
                            <div className="ml-4 self-center text-4xl font-semibold z-40 text-white">LINKEDIN</div>
                            <div className="col-span-2 relative rounded-md overflow-hidden">
                                <div className="w-full h-full absolute z-10 bg-gradient-to-r from-blue-950 to-sky-500"></div>
                                <img className="object-cover h-full w-full" src={`${process.env.PUBLIC_URL}/img/linkedin.png`} alt="" />
                            </div>
                        </div>                        
                    </div>
                </div>

                {/** RIGHT CONTENT xs */}
                <div className="w-full h-full p-2 lg:hidden xs:flex gap-5 justify-center items-center text-center">
                    <div className={`w-full p-1  flex justify-center border rounded-md border-sky ${theme} text-sky`}>
                        <svg className="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg>
                        <h4 className='flex items-center justify-cente font-bold amber-text-${theme} group-hover:text-amber-500'>LINKEDIN</h4>
                    </div>
                    <div className={`w-full p-1  flex justify-center border rounded-md border-sky ${theme} text-sky`}>
                        <svg className="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"/></svg>
                        <h4 className='flex items-center justify-cente font-bold amber-text-${theme} group-hover:text-amber-500'>LINKEDIN</h4>
                    </div>
                </div>

            </div>
          )
        },
        {
          id: 2,
          content: (
            <div className="h-full px-4 col-span-4">
                <div className="h-full grid lg:grid-cols-4 gap-4 place-content-stretch ">
                    {
                        Content.Education.map((education, index) => (
                            <div key={index} className={`px-4 py-8 flex flex-col justify-center rounded-lg text-center ${theme}`}>
                                <div className="order-last text-lg font-medium text-amber-500">{education.Major}<br></br></div>
                                <div className={`text-3xl font-extrabold uppercase ${theme} md:text-5xl`}>{education.Institution}</div>
                            </div>
                        ))}
                </div>
            </div>
          )
        },
        {
          id: 3,
          content: (
            <div className="w-full p-2 col-span-4 grid lg:grid-cols-8 xs:grid-cols-4 gap-8">
                {
                    skills.map((icon, index) => (
                        <div className={`lg:p-3 xs:p-5 w-full flex flex-col justify-center gap-3 items-center border rounded text-center ${theme} border-${theme}`}>
                            <div className=" p-3 border rounded-md drop-shadow-md"><Icon icon={icon} /></div>
                            <h2 className="text-lg font-semibold text-amber-500">{icon}</h2>
                        </div>
                    ))
                }
            </div>
          )
        }
      ];

    return (
        <>
           <div className="flex flex-col">
                <div className="w-full py-2 text-center text-lg font-medium text-white border-t border-amber gradient-3c1 ">
                    ABOUT ME
                </div>

                <div className="w-full py-4 grid grid-cols-8 justify-items-center border border-amber">

                    {/** Prev Button */}
                    <div className="flex justify-center items-center xs:hidden">
                        <button onClick={() => { handlePrevious(); }} className={`h-12 w-12 xs:hidden lg:flex justify-center items-center rounded-md ${theme} hover:drop-shadow-md`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                        </button>
                    </div>

                    {/** CONTENT */}
                    <div className="w-full lg:col-span-6 xs:col-span-8">
                        <div className="w-full h-full flex flex-row flex-nowrap flex-shrink-0 overflow-hidden">
                        {slides.map((slide, index) => (
                            <div
                            key={slide.id}
                            className={`w-full h-full justify-center flex-shrink-0 ease-in-out duration-1000 
                            }`} style={{
                                transform: `translateX(${-100 * currentSlide}%)`,
                                opacity: currentSlide === index ? 1 : 0,
                            }}
                            >
                            {slide.content}
                            </div>
                        ))}
                        </div>
                    </div>

                    {/** Next Button */}
                    <div className="flex justify-center items-center xs:hidden">
                        <button onClick={() => { handleNext(); }} className={`h-12 w-12 xs:hidden lg:flex justify-center items-center rounded-md ${theme} hover:drop-shadow-md`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                        </button>
                    </div>
                </div>
           </div>
        </>
    )
}

export default AboutMe