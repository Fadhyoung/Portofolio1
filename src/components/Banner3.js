import { downloadFile } from "./download";
import Modal from "./Modal";
import { useState } from "react";

function Banner3({FirstTitle, SecondTitle, Desc, ButtonT}) {

    const handleDownload = () => {
        downloadFile('files/FadhliNurHimawan-resume.pdf', 'FadhliNurHimawan-resume.pdf');
    };

    const[isOpen, setIsOpen] = useState(false)

    return (
        <>

        <Modal open={isOpen} close={() => {setIsOpen(false);}}>
            \children
        </Modal>
        
            <div className="w-3/4 xs:w-3/4 m-auto items-center flex flex-col">
                <section className="py-10 text-blue-950">
                    <div className="mx-auto max-w-screen-xl">
                        <div className="mx-auto h-auto max-w-3xl text-center">
                            <div
                                className="lg:text-3xl xs:text-2xl font-extrabold text-transparent 
                                bg-clip-text bg-gradient-to-r from-blue-950 to-red-500 "
                            >
                                {FirstTitle}
                                <span className="sm:block"> {SecondTitle} </span>
                            </div>

                        <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                            {Desc}
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4 ">
                            <button
                            className="block lg:w-1/5 rounded-full border px-12 py-3 text-sm font-medium text-white 
                          border-amber-500 bg-sky-500
                            hover:bg-transparent hover:text-red-500 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto 
                            xs:w-full"
                            onClick={() => {setIsOpen(true);}}
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

export default Banner3