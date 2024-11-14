function Divider1({title}) {

    return (
        <>
            <span className="w-full flex items-center text-center justify-start">
                <span className="pr-6 font-black text-3xl bg-gradient-to-r 
                from-sky-500 to-amber-500 bg-clip-text text-transparent
                ">Fn# {title}</span>
                <span className="h-px w-3/4 bg-amber-500"></span>
            </span>
        </>
    )
    
}

export default Divider1;