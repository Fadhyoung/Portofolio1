function Banner1({FirstTitle, SecondTitle, Desc, ButtonT, onSectionClick}) {

    const BANNER3_SECTION = {
        transform: 'translate(-50%, -50%)',
        zIndex: 10
      }

    return (
        <>
            <div className="relative w-full lg:h-auto xs:h-56 m-auto border border-sky-500" >

                {/** BG IMAGE */}
                <div className="h-full relative top-0 left-0 -z-10">
                    <img className="object-cover h-full" style={{ objectPosition: "20% center" }}  src={`${process.env.PUBLIC_URL}/img/Banner1_bg.png`} />
                </div>

                {/** FLYING CONTENT */}
                <section className="lg:w-1/3 xs:w-2/4 p-6 absolute top-1/2 lg:left-2/3 xs:left-2/3 text-blue-950 rounded drop-shadow-lg bg-white
                           
                "
                 style={BANNER3_SECTION}>
                    <div className="mx-auto max-w-screen-xl">
                        <div className="mx-auto max-w-3xl text-center">
                            <h1
                                className="bg-gradient-to-r from-blue-950 to-red-500 bg-clip-text font-bold font-calibre lg:text-2xl xs:text-base text-transparent "
                            >
                                {FirstTitle}
                                <span className="sm:block lg:text-2xl xs:text-base"> {SecondTitle} </span>
                            </h1>

                            <p className="mx-auto mt-4 max-w-xl xl:block lg:hidden xs:hidden font-normal font-calibre lg:text-base">
                                {Desc}
                            </p>

                            <div className="lg:mt-8 xs:mt-2 flex flex-wrap justify-center gap-4 ">
                                <button
                                className="block lg:w-1/5 xs:w-full rounded-full border lg:px-12 sm:px-6 xs:px-2 py-3 lg:text-sm xs:text-xs font-medium text-white 
                            border-amber-500 bg-sky-500
                                hover:bg-transparent hover:text-red-500 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto "
                                onClick={() => onSectionClick('allProjects')}
                                >
                                {ButtonT}
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
    
}

export default Banner1