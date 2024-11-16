export const Divider1 = ({title}) => {

    return (
        <>
            <div className="w-full flex items-center text-center justify-start">
                <span className="px-6 flex-shrink-0 font-black text-3xl bg-gradient-to-r 
                from-sky-500 to-amber-500 bg-clip-text text-transparent border rounded-md border-amber-500
                ">Fn# {title}</span>
                <span className="h-px w-full bg-amber-500"></span> {/** LINE */}
            </div>
        </>
    )
    
};

export const Divider2 = ({title, page, projectLength, handlePagination, status}) => {

    const OnNext =  () => {
        const newPage = page >= Math.ceil(projectLength / 4) ? page : page + 1;
        handlePagination(newPage, "next");
    }

    const OnBack = () => {
        const newPage = page <= 1 ? page : page - 1;
        handlePagination(newPage, "back");
    }

    return (
        <>
            <div className="w-full flex items-center text-center justify-start">
                <span className="px-3 pr-6 flex-shrink-0 font-black lg:text-3xl xs:text-xl bg-gradient-to-r 
                from-sky-500 to-amber-500 bg-clip-text border rounded-md border-amber-500 text-transparent
                ">Fn# Web Project</span>
                <span className="h-px w-full bg-amber-500"></span> {/** LINE */}
                <button onClick={() => {OnBack();}} className="lg:p-2 xs:p-1 rounded-full border border-amber-500 hover:bg-amber-500 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <span className="h-px w-4 bg-amber-500"></span> {/** LINE */}
                <button onClick={() => {OnNext();}} className="lg:p-2 xs:p-1 rounded-full border border-amber-500 hover:bg-amber-500 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </>
    )
};

export default Divider1;