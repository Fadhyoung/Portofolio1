function Banner1({FirstTitle, SecondTitle, Desc, ButtonT, onSectionClick}) {

    return (
        <>
            <div className="lg:w-3/4 xs:w-3/4 m-auto" >
                <section className="py-10 text-blue-950">
                    <div className="mx-auto max-w-screen-xl">
                        <div className="mx-auto max-w-3xl text-center">
                        <h1
                            className="bg-gradient-to-r from-blue-950 to-red-500 bg-clip-text font-bold font-calibre text-lg text-transparent sm:text-5xl"
                        >
                            {FirstTitle}
                            <span className="sm:block"> {SecondTitle} </span>
                        </h1>

                        <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed font-normal font-calibre">
                            {Desc}
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <button
                            className="block lg:w-1/5 xs:w-full rounded-full border px-12 py-3 text-sm font-medium text-white 
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