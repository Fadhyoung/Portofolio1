import React from "react";
import Content from "../Content.json";

function Card1 ({img, title, description, link, technology, attribute}) {


    return (
        <>
            <a href={link} target="_blank" className="w-full xs:h-96 lg:h-96 group relative block overflow-hidden">
                <span className="absolute inset-0 border-2 border-dashed border-blue-950"></span>

                <div className="h-full w-full grid grid-rows-3 transform items-start border
                border-sky-500 bg-white transition-transform 
                group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:bg-sky-500">
                    <div className="w-full h-full row-span-2">
                        <img className="
                        h-full w-full object-cover -z-20 object-center
                        group-hover:hidden" src={`${process.env.PUBLIC_URL}${img}`} alt="" />
                    </div>
                              
                    <div className="p-4 !pt-5 w-full lg:h-full min-h-fit self-stretch transition-opacity group-hover:absolute group-hover:hidden">
                       {/** TECH LABEL */} 
                       <div className="w-full flex flex-row flex-nowrap md:overflow-x-hidden xs:overflow-x-scroll justify-start items-center gap-3">
                            {technology.map((tech, index) => (
                                <div
                                    key={index} // Add a key here for each item
                                    className="px-3 py-1 text-nowrap rounded-full bg-blue-950 text-white lg:text-xs "
                                >
                                    {tech}
                                </div>
                            ))}                          
                       </div>

                        <h2 className="mt-4 text-xl font-medium">{title}</h2>

                    </div>

                    <div
                    className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 group-hover:self-end sm:p-6 lg:p-8"
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