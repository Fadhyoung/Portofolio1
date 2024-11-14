function Card2({content}) {

    return (

        <>
            <div className="m-auto w-full sm:w-1/4 h-fit flex flex-row grow justify-center items-stretch drop-shadow-xl">
                <div className="w-full h-full grid lg:grid-cols-2 border box-border
                sm:grid-cols-1 border-sky-500">
                    
                    {/** LEFT SIDE */}
                    <div className='w-full relative flex flex-col items-center'>
                        <img class="object-cover h-full w-full" src={content.Img} alt="" />
                        <div className='absolute p-2 bg-sky-500 bottom-0 left-0 ' >THESIS PROJECT</div>
                    </div>

                    {/** RIGHT SIDE */}
                    <div className='w-full grid grid-rows-[auto] place-content-stretch border-l border-sky-500'>

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
                            <a className="cursor-pointer" href={content.Link} target="_blank">
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

export default Card2