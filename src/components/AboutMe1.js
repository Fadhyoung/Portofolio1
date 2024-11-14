import { useState, useEffect } from "react";
import GetCoverPersonImage from "../img/fotoSaya.jpg";
import Icon from "../icons/icons";
import { icons } from "../icons/icons";

import Content from "../Content.json"

const AboutMe = ({ handlePrevious, handleNext, currentSlide}) => {

    const skills = Object.keys(icons);
    console.log(skills)

      const slides = [
        {
          id: 1,
          content: (
            <div className="w-full h-full lg:flex-shrink-0 grid lg:grid-cols-3 lg:grid-rows-none lg:place-content-center gap-6
            xs:grid-cols-none xs:flex xs:flex-col">
                <div className="h-full p-4 flex flex-col text-right lg:items-end lg:justify-between xs:items-center">
                    <div className="w-auto flex flex-col lg:items-end xs:items-center"><h1 className="font-bold text-2xl text-sky-500">FADHLI NUR HIMAWAN</h1>
                    <p className="bg-blue-950 py-1 px-3 rounded text-sky-50">You can call me <span className="text-amber-500">Hima</span></p></div>
                    <div className="flex flex-col xs:items-center lg:items-end"><h1 className="font-bold text-xl text-amber-500">22 years old</h1><p>Wonogiri, 11 March 2002</p></div>
                </div>
                <div className="h-72">
                    <img className="object-cover h-full w-full rounded-md" src={GetCoverPersonImage} alt="" />
                </div>
                <div className="flex flex-col text-left items-start justify-end">
                    <p className="lg:p-0 xs:p-3 font-medium text-base text-justify indent-10">
                    Passionate about application and AI development. Skilled in developing major web applications, with a focus on creating interactive and visually appealing front-end pages, as well as handling computational back-end processes. A day-to-day English consumer, continuously working to stay updated with global news and trends. A keen enthusiasm for artificial intelligence.
                    </p>
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

                <div className="w-full p-4 grid grid-cols-8 justify-items-center border border-sky-500">

                    {/** Prev Button */}
                    <div className="flex justify-center items-center">
                        <button onClick={() => { handlePrevious(); }} className="h-12 w-12 lg:flex xs:hidden justify-center items-center rounded-md bg-white text-sky-500 hover:drop-shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                        </button>
                    </div>

                    {/** CONTENT */}
                    <div className="col-span-6">
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
                    <div className="flex justify-center items-center">
                        <button onClick={() => { handleNext(); }} className="h-12 w-12 lg:flex xs:hidden justify-center items-center rounded-md bg-white text-sky-500 hover:drop-shadow-md">
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