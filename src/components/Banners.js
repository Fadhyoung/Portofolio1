import { useContext } from "react"
import { ThemeContext } from "../Theme"
import { downloadFile } from "./download";
import Modal from "./Modal";
import { useState } from "react";
import AutoScroll from "./AutoScroll";

export const Banner1 = ({FirstTitle, SecondTitle, Desc, ButtonT, onSectionClick}) => {

    const { theme } = useContext(ThemeContext)

    const BANNER3_SECTION = {
        transform: 'translate(-50%, -50%)',
        zIndex: 10
      }

    return (
        <>
            <div className="relative w-full lg:h-auto xs:h-56 m-auto border border-sky-500" >

                {/** BG IMAGE */}
                <div className="h-full relative top-0 left-0 z-10">
                    <img className="object-cover h-full" style={{ objectPosition: "20% center" }}  src={`${process.env.PUBLIC_URL}/img/Banner1_bg.png`} />
                </div>

                {/** FLYING CONTENT */}
                <section className={`lg:w-1/3 xs:w-2/4 p-6 absolute top-1/2 lg:left-2/3 xs:left-2/3  rounded drop-shadow-lg ${theme}`}
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

export const Banner2 = () => {

    return (
        <>
            <div className="w-full p-10 m-auto flex flex-col gap-4 justify-center items-center 
                rounded-md border border-amber-500
            ">
                <h1 className="font-black text-2xl text-transparent text-center
                bg-gradient-to-r from-sky-500 to-red-500 bg-clip-text 
                " >Get to know for what i used to</h1>
                <p className="text-center">Here bunch of my get used to, so i am a well experienced boy that has a bit knowledge about certain technology</p>
                <AutoScroll />
            </div>
        </>
    );
    
}

export const Banner3 = ({FirstTitle, SecondTitle, Desc, ButtonT}) => {

    const handleDownload = () => {
        downloadFile('files/FadhliNurHimawan-resume.pdf', 'FadhliNurHimawan-resume.pdf');
    };

    const[isOpen, setIsOpen] = useState(false)

    return (
        <>

        <Modal open={isOpen} close={() => {setIsOpen(false);}}>
            children
        </Modal>
        
            <div className="w-full xs:w-3/4 lg:px-0 xs:px-10 m-auto items-center flex flex-col border rounded-md border-amber-500">
                <section className="py-10">
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

export const Banner4 =  ({FirstTitle, SecondTitle, Desc, ButtonT, onSectionClick}) => {

    const { theme } = useContext(ThemeContext)

    const CARD_SHAPE = {
        border : "1 px "
    }

    const BLANK_BORDER_R = {
        mask: "linear-gradient(to top right, black, transparent 20%, transparent 80%, black)",
        WebkitMask: "linear-gradient(to top right, black, transparent 20%, transparent 80%, black)"
    }

    const BLANK_BORDER_L = {
        mask: "linear-gradient(to bottom right, black, transparent 20%, transparent 80%, black)",
        WebkitMask: "linear-gradient(to top right, black, transparent 20%, transparent 80%, black)"
    }

    return (
        <>
         <div className={`w-full h-full lg:GRID_LG xs:GRID_XS`}>
            {/** LEFT SIDE */}
            <div className="lg:block xs:hidden border-2 border-amber-500" style={{ gridArea: "blank", ...BLANK_BORDER_L }}></div>
            <div className={`p-1 flex custom-box b3card-${theme} border-sky`} style={{ gridArea: "photo", 'background-image': "radial-gradient(var(--sky), var(--blue))" }}>
                <img className="w-full h-auto mt-10 object-cover" src={`${process.env.PUBLIC_URL}/img/mr_fadhli.png`} />
            </div>
            <div className={`p-4 flex flex-col gap-3 justify-center items-center custom-box bg-blue border-red`} style={{ gridArea: "figma" }}>
                <div><h1 className="text-xl font-bold text-amber-600">Pleased to share how i built this web</h1></div>
                <div className=" flex items-center gap-5 justify-between">
                    <button className="w-2/5 h-full p-2 text-xl font-semibold rounded-xl text-white bg-sky">FIGMA</button>
                    <p className="text-sm text-white">I know there's some of unfinished thing. but everything is still in development and will be always developed.</p>
                </div>
            </div>

            {/** RIGHT SIDE */}
            <div className="xs:hidden lg:flex justify-center items-center relative" style={{gridArea: "quote"}}>
                <div className="w-full h-full absolute z-10 border-2 border-amber-500" style={BLANK_BORDER_R}>dasf</div>
                <div className="w-2/3 p-4 absolute flex flex-col gap-4 text-xl text-center text-amber-500 border-4 rounded-xl border-blue drop-shadow-md">
                    <p>"The hardest part of fixing a bug isn't fixing it, it's finding it"</p>
                    <h1 className="font-bold text-red-500">Mr. Robot, 2018</h1>
                </div>
            </div>
            <div className={`flex flex-col justify-center custom-box bg-blue border border-amber`} style={{ gridArea: "question" }}>
                <div className="px-5 mx-auto max-w-3xl flex flex-col gap-4 text-center">
                    <h1 className="bg-gradient-to-r from-sky-700 to-red-500 bg-clip-text font-bold font-calibre text-2xl text-transparent">
                        {FirstTitle}
                        <span className="sm:block text-xl"> {SecondTitle} </span>
                    </h1>

                    <p className="text-sm text-white">
                        {Desc}
                    </p>

                    <div className="flex flex-wrap justify-center">
                        <button
                        className="block w-3/4 rounded-full border lg:px-12 sm:px-6 xs:px-2 py-3 lg:text-sm xs:text-xs font-medium text-white 
                    border-amber-500 bg-sky hover:bg-transparent hover:text-red-500"
                        onClick={() => onSectionClick('allProjects')}
                        >
                        {ButtonT}
                        </button>
                    </div>
                </div>
            </div>
         </div>
        </>
    )
}

export default Banner1