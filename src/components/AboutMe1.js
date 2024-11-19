import Icon from "../icons/icons";
import { icons } from "../icons/icons";

import Content from "../Content.json"

const AboutMe = ({ handlePrevious, handleNext, currentSlide}) => {

    const skills = Object.keys(icons);

      const slides = [
        {
          id: 1,
          content: (
            <div className="w-full h-full lg:flex-shrink-0 grid lg:grid-cols-3 lg:grid-rows-none lg:place-content-center gap-6
            xs:w-full xs:grid-cols-none xs:flex xs:flex-col">
                {/** LEFT CONTENT */}
                <div className="h-72 flex flex-col text-right lg:items-end lg:justify-between xs:items-center">
                    <div className="w-auto flex flex-col gap-2 lg:items-end xs:items-center">
                        <h1 className="font-bold text-2xl text-sky-500">FADHLI NUR HIMAWAN</h1>
                        <p className="bg-blue-950 py-1 px-3 rounded text-sky-50">You can call me <span className="text-amber-500">Hima</span></p>
                        <div className="flex gap-2 text-lg xs:items-center lg:items-end"><h1 className="font-bold text-amber-500">22 years old </h1><span>Wonogiri, 11 March 2002</span></div>
                    </div>
                    <p className="lg:p-0 xs:p-3 font-medium text-sm text-justify indent-10">
                    Passionate about application and AI development. Skilled in developing major web applications, with a focus on creating interactive and visually appealing front-end pages, as well as handling computational back-end processes. A day-to-day English consumer, continuously working to stay updated with global news and trends. A keen enthusiasm for artificial intelligence.
                    </p>
                </div>
                {/** CENTER CONTENT */}
                <div className="h-72 w-full lg:p-0 xs:p-2">
                    <img className="object-cover h-full w-full rounded-md" src={`${process.env.PUBLIC_URL}/img/fotoSaya.jpg`} alt="" />
                </div>
                {/** RIGHT CONTENT */}
                <div className="h-72 lg:p-0 xs:p-2 grid grid-rows-2 gap-2 text-left items-center justify-items-stretch">
                    {/** LINK TO SOCIAL MEDIA */}
                    {/** LABEL 1 */}
                    <div className="w-full p-1 h-full cursor-pointer border-2 rounded-lg bg-blue-950 border-amber-500
                        transition-all hover:scale-95 
                    " >
                        <div className="w-full h-full grid grid-cols-3">
                            <div className="ml-4 self-center text-4xl font-semibold z-10 text-amber-500">LINKEDIN</div>
                            <div className="col-span-2 relative rounded-md overflow-hidden">
                                <div className="w-full h-full absolute bg-gradient-to-r from-blue-950 to-sky-500"></div>
                                <img className="object-cover h-full w-full" src={`${process.env.PUBLIC_URL}/img/linkedin.png`} alt="" />
                            </div>
                        </div>                        
                    </div>
                    {/** LABEL 2 */}
                    <div className="w-full p-1 h-full cursor-pointer border-2 rounded-lg bg-blue-950 border-amber-500
                        transition-all hover:scale-95
                    " >
                        <div className="w-full h-full grid grid-cols-3">
                            <div className="ml-4 self-center text-4xl font-semibold z-10 text-amber-500">LINKEDIN</div>
                            <div className="col-span-2 relative rounded-md overflow-hidden">
                                <div className="w-full h-full absolute bg-gradient-to-r from-blue-950 to-sky-500"></div>
                                <img className="object-cover h-full w-full" src={`${process.env.PUBLIC_URL}/img/linkedin.png`} alt="" />
                            </div>
                        </div>                        
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
                            <div key={index} className="px-4 py-8 flex flex-col justify-center rounded-lg bg-sky-50 text-center">
                                <div className="order-last text-lg font-medium text-amber-500">{education.Major}<br></br></div>
                                <div className="text-3xl font-extrabold uppercase text-blue-950 md:text-5xl">{education.Institution}</div>
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
                        <div className="lg:p-3 xs:p-5 w-full flex flex-col justify-center gap-3 items-center border rounded text-center text-blue-950 border-blue-950">
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
                <div className="w-full py-2 text-center border-t border-sky-500">
                    ABOUT ME
                </div>

                <div className="w-full py-4 grid grid-cols-8 justify-items-center border border-sky-500">

                    {/** Prev Button */}
                    <div className="flex justify-center items-center xs:hidden">
                        <button onClick={() => { handlePrevious(); }} className="h-12 w-12 xs:hidden lg:flex justify-center items-center rounded-md bg-white text-sky-500 hover:drop-shadow-md">
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
                        <button onClick={() => { handleNext(); }} className="h-12 w-12 xs:hidden lg:flex justify-center items-center rounded-md bg-white text-sky-500 hover:drop-shadow-md">
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