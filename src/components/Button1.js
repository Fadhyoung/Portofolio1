function Button1({title}) {
    return (
      <>

        {/* Hover */}
        <a className="group relative inline-block focus:outline-none focus:ring" href="#">
            <span className="absolute inset-0 translate-x-0 translate-y-0 bg-blue-950 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"></span>
            <span className="relative inline-block border-2 border-sky-500 px-8 py-3 text-red-500 text-sm font-bold uppercase tracking-widest">
            {title}
            </span>
        </a>
  
      </>
        
    );
  }
  
  export default Button1;
  