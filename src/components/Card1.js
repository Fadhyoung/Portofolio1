import React from "react";
import Content from "../Content.json";

function Card1 ({img, title, description, link, technology, attribute}) {


    return (
        <>
            <a href={link} target="_blank" className="group relative block h-64 sm:h-80 lg:h-96">
                <span className="absolute inset-0 border-2 border-dashed border-blue-950"></span>

                <div className="relative flex h-full transform items-end border
                border-sky-500 bg-white transition-transform 
                group-hover:-translate-x-2 group-hover:-translate-y-2">
                    <img className="
                    h-full w-full absolute object-cover -z-20 object-top
                    group-hover:hidden" src={`${process.env.PUBLIC_URL}${img}`} alt="" />
                    <div className="
                    h-3/4 w-full absolute -z-10 bg-gradient-to-t 
                    group-hover:bg-sky-500 group-hover:bg-none group-hover:h-full"></div>
                    <div
                    className="p-4 !pt-5 w-full transition-opacity group-hover:absolute group-hover:opacity-0  sm:p-6 lg:p-8 bg-white"
                    >
                       <div className="w-full flex flex-row flex-wrap justify-start items-center gap-3">
                            {technology.map((tech, index) => (
                                <div
                                    key={index} // Add a key here for each item
                                    className="px-3 py-1 rounded-full bg-blue-950 text-white text-sm"
                                >
                                    {tech}
                                </div>
                            ))}                          
                       </div>

                        <h2 className="mt-4 text-xl font-medium sm:text-2xl">{title}</h2>
                    </div>

                    <div
                    className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
                    >
                    <h3 className="mt-4 text-xl font-medium sm:text-2xl">Go around the world</h3>

                    <p className="mt-4 text-sm sm:text-base">
                        {description}
                    </p>

                    <p className="mt-8 font-bold">Read more</p>
                    </div>
                </div>
                </a>
        </>
    );
}

export default Card1