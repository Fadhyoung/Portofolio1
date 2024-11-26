import React from "react";

// IMPLEMENTED IN CONTENT GALLERY
export const Card1 = ({img, title, description, link, technology, attribute}) => {

    return (
        <>
            <a className="w-full xs:h-96 lg:h-96 group relative block" href={link} target="_blank" rel="noreferrer">
                <span className="absolute inset-0 border-2 rounded-3xl border-dashed border-blue-950"></span>

                <div className={`p-0.5 h-full w-full grid grid-rows-3 transform items-start rounded-3xl bg-sky transition-transform 
                group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:bg-sky`}>
                    <div className="w-full h-full row-span-2">
                        <img className="h-full w-full object-cover -z-20 object-center rounded-3xl group-hover:hidden" src={`${process.env.PUBLIC_URL}${img}`} alt="" />
                    </div>
                              
                    <div className="p-4 !pt-5 w-full lg:h-full min-h-fit self-stretch transition-opacity group-hover:absolute group-hover:hidden">
                       {/** TECH LABEL */} 
                       <div className="w-full flex flex-row flex-nowrap xs:overflow-x-scroll justify-start items-center gap-3">
                            {technology.map((tech, index) => (
                                <div
                                    key={index} // Add a key here for each item
                                    className={`px-3 py-1 text-nowrap rounded-full lg:text-xs bg-blue text-white`}
                                >
                                    {tech}
                                </div>
                            ))}                          
                       </div>

                        <h2 className="mt-4 text-xl font-medium text-white">{title}</h2>

                    </div>

                    <div className="absolute p-4 text-white opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 group-hover:self-end sm:p-6 lg:p-0">
                        <h3 className="mt-4 text-xl font-medium sm:text-2xl">{title}</h3>

                        <p className="mt-4 text-sm sm:text-base">
                            {description}
                        </p>

                        <div  className="mt-8 font-bold"><a href={link} >Visit the site</a></div>
                    </div>
                </div>
                </a>
        </>
    );
}

export const Card2 = ({content}) => {
    return (

        <>
            <div className="m-auto w-full sm:w-1/4 h-full flex flex-row grow justify-center items-stretch">
                <div className="w-full h-auto grid lg:grid-cols-4 border box-border
                xs:grid-cols-1 border-sky-500" style={{ gridAutoRows: 'min-content' }}>
                    
                    {/** LEFT SIDE */}
                    <div className='w-full lg:h-full xs:h-60 col-span-1 relative flex flex-col items-center'>
                        <img class="object-cover object-center h-full w-full" src={`${process.env.PUBLIC_URL}${content.Img}`} alt="" />
                        <div className='absolute p-2 bg-sky-500 bottom-0 left-0 ' >THESIS PROJECT</div>
                    </div>

                    {/** RIGHT SIDE */}
                    <div className='w-full h-full col-span-3 grid grid-rows-[auto] place-content-stretch border-l border-sky-500'>

                        {/** Section-1 */}
                        <div className='w-full p-4 text-justify text-lg font-bold bg-white'>
                            <h1>{content.Title}</h1>
                        </div>

                        {/** Section-2 */}
                        <div className='w-full p-4 h-auto text-justify bg-sky-50 border-y border-sky-500'>
                            <h3 className='font-semibold'>What is this about?</h3>
                            <p className='indent-10'>{content.Description}</p>
                        </div>

                        {/** Section-3 */}
                        <div className='flex w-full justify-around place-items-center bg-blue-950 text-center text-sky-400 font-bold text-sm'>
                            { content.Technology.map((tech, index) => (
                                <div className='p-2 w-full border-x border-sky-500'>{tech}</div>
                            ))}
                            
                        </div>

                        {/** Section-4 link section */}
                        <div className='w-full flex justify-center py-11 bg-gradient-to-r from-cyan-500 to-blue-500 border-y-2 border-sky-500'>                        
                            <a className="cursor-pointer" href={content.Link} target="_blank" rel="noreferrer">
                                <div className='group bg-white p-4 rounded-md drop-shadow-md hover:bg-blue-950 hover:text-amber-500'>
                                    <svg className='size-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                    </svg>
                                </div>
                            </a>
                        </div>

                        {/** Section-5 */}
                        <div className='grid gap-3 grid-cols-1 bg-white'>
                            <h4 className='w-full bg-blue-950 p-2 text-center text-sky-500 font-bold text-base'>Leverage</h4>
                            <div className='px-6 pb-3 w-full grid gap-4 grid-cols-2 '>
                            {   content.Attribute.map((att, index) => (
                                <div className='flex space-x-2 items-center text-xs'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                    </svg>
                                    <p>Responsive web app</p>
                                </div>
                            ))}    
                            </div>  
                        </div>
                    </div>

                </div>

                {/** RIGHT LINE 
                <div className="p-2 rotate-180 [writing-mode:_vertical-lr]">
                    <time
                    datetime="2022-10-10"
                    className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                    >
                    <span>2022</span>
                    <span className="w-px flex-1 bg-gray-900/10"></span>
                    <span>Oct 10</span>
                    </time>
                </div>
                */}

            </div>
        </>

    );
    
}

export const Card3 = ({content}) => {

    const DOPE_SHADOW = {
        filter: 'drop-shadow(2px 2px 5px rgb(0 0 0 / 1))'
    }

    return (
        <>
            {/** LEFT BAR */}
            <div className="w-full lg:h-full xs:h-full relative flex flex-col items-end rounded-lg bg-white transition-opacity" style={DOPE_SHADOW}>
                {/** BACKGRUND */}
                <div className="w-full h-full absolute -z-10 rounded-lg">
                    <div className="w-full h-full absolute rounded-md bg-gradient-to-t from-blue-950 to-transparent"></div>
                    <div className="w-full h-full absolute rounded-lg opacity-50 bg-gradient-to-t from-blue-950 to-transparent"></div>
                    <img className="object-cover object-top self-center rounded-lg w-full h-full" src={`${process.env.PUBLIC_URL}${content.home_img}`} alt="home_img"/>
                </div>
                {/** FLOATING DESC */}
                <div className="w-full lg:h-1/2 xs:h-4/6 px-3 absolute flex-shrink-0 bottom-0 grid grid-cols-4 place-content-stretch items-stretch">
                    {/** IMG SIDE */}
                    <div className="w-full h-56 p-5 xl:flex xs:hidden justify-center">
                        <img className="object-cover object-center rounded-lg w-11/12 h-full" src={`${process.env.PUBLIC_URL}${content.cover_img}`} alt="content_cover_img"/>
                    </div>
                    {/** DESC SIDE */}
                    <div className="py-5 xl:col-span-3 xs:col-span-4 flex flex-col justify-between lg:gap-2 xs:gap-0">
                        <div className="flex items-start">
                            <h1 className="lg:text-3xl xs:text-lg font-bold text-white drop-shadow-lg">{content.Title}</h1>
                            {/** FLOATING LINK */}
                            <a className="ml-4 text-white hover:scale-110 transition-transform hover:cursor-pointer" href={content.Link} target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                            </a>
                        </div>
                        <p className="lg:w-3/4 xs:w-full lg:text-sm xs:text-2xs drop-shadow-md text-white">{content.Description}</p>
                        <div className="flex lg:gap-3 xs:gap-1">
                            {content.Technology.map((tech, index) => (
                                <div
                                    key={index} // Add a key here for each item
                                    className="lg:px-3 lg:py-1 xs:px-2 text-nowrap rounded-sm bg-amber-500 text-white lg:text-xs xs:text-2xs"
                                >
                                    {tech}
                                </div>
                            ))}    
                        </div>
                        <div className="flex flex-wrap lg:gap-3 xs:gap-1">
                            {   content.Attribute.map((att, index) => (
                                <div className='py-1 px-2 items-center lg:text-xs xs:text-2xs text-white border rounded-sm border-amber-500'>                                        
                                    <p>{att}</p>
                                </div>
                            ))} 
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card2;