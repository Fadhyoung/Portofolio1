import React, { useState } from 'react';
import './tailwind.css';
import '../output.css';
import Modal from '../components/Modal';
import GetCoverPersonImage from "../img/fotoSaya.jpg";

function LandingPage({onSectionClick}) {

    const[isOpen, setIsOpen] = useState(false)

    const SurroundCard = ({ Title, Glimpse, Icon }) => {
        return (
          <div className=" group
          lg:w-28 md:w-28 xs:w-24 h-32 p-3 grid grid-rows-2 place-content-center place-items-center text-center border rounded border-sky-500 bg-white 
          hover:bg-sky-500 hover:text-white transition-transform duration-300 hover:scale-90">
            <div className='w-3/4 flex items-center justify-center text-sky-500 group-hover:text-white'>{Icon}</div>
            <div className='flex flex-col items-center'>
                <h4 className='flex items-center justify-cente font-bold text-blue-950 group-hover:text-amber-500'>{Title}</h4>
                <p className='text-xs font-thin'>{Glimpse}</p>
            </div>
          </div>
        );
      };

    return (
        
    <header className="relative w-full h-full flex flex-col gap-12 justify-start items-center bg-radial-pattern"
    >

        <div className='w-full h-full absolute top-0 right-0 bg-gradient-to-t from-white via-transparent to-white'></div>

        <Modal open={isOpen} close={() => {setIsOpen(false);}}>
            \children
        </Modal>

        {/** FLYING INFORMATION */}
        <div className='lg:block group hover:w-72 w-auto p-3 absolute top-20 left-20 z-50 rounded drop-shadow animate-fly1 cursor-pointer bg-white
                        xs:hidden'>
        
            <div>INSTANT CONTACT ME</div>            

            {/** EXPANDING CONTENT */}
            <div className='absolute left-0 flex-col w-fit gap-2 transition-transform scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 duration-300 ease-in bg-white rounded p-3'>
                <br></br>
                <h1>All of sudden interested? go contact me down below!</h1>
                <ul className='flex flex-col gap-2'>
                    <li className='p-2 flex cursor-pointer rounded border-y border-gray-200 bg-white hover:drop-shadow'>
                        <a className='w-full h-full' href='https://wa.me/0881026817103' target='_blank'>fadhlinurhimawan@gmail.com</a></li>
                    <li className='p-2 flex cursor-pointer rounded border-y border-gray-200 bg-white hover:drop-shadow'>
                        <a className='w-full h-full' href='https://wa.me/0881026817103' target='_blank'>Whatsapp</a></li>
                        <li className='p-2 flex cursor-pointer rounded border-y border-gray-200 bg-white hover:drop-shadow'>
                        <a className='w-full h-full' href='https://github.com/Fadhyoung' target='_blank'>github</a></li>
                        <li className='p-2 flex cursor-pointer rounded border-y border-gray-200 bg-white hover:drop-shadow'>
                        <a className='w-full h-full' href='https://www.linkedin.com/in/fadhli-nur-himawan-0b70b8246/' target='_blank'>linkedin</a></li>
                </ul>
            </div>
        
        </div>

        <button className='lg:block group hover:w-auto w-auto p-3 absolute top-60 right-28 z-50 rounded drop-shadow animate-fly1 cursor-pointer bg-white
                        xs:hidden hover:bg-blue-950 hover:text-amber-500'
                        onClick={() => {setIsOpen(true)}}>DOWNLOAD MY RESUME</button>
      
        
        {/* TOP NAV */} 
        <div className="p-3 flex flex-row z-10 justify-center w-full" aria-label="Global">
            <h1 className="uppercase tracking-2widest text-3xl">PORTOFOLIO</h1>
        </div>

        {/* COVER */} 
        <div className="relative top-0  flex flex-col gap-2 justify-center items-center w-full h-full">
        
            {/* THE LINE */}
            <div className='absolute w-full h-24 z-10 bg-gradient-to-r from-blue-950 via-sky-500 to-blue-950'></div>
            
            <div className=" p-3 relative top-0 z-30 flex flex-row gap-2 justify-center items-center">
                <div className="absolute self-center -z-30 w-full h-72 border border-amber-400"
                    style={{
                        mask: "linear-gradient(to bottom right, transparent 5%, black 15%, black 35%, transparent 45%, transparent 55%, black 65%, black 85%, transparent 95%)",
                        WebkitMask: "linear-gradient(to bottom right, transparent 5%, black 15%, black 35%, transparent 45%, transparent 55%, black 65%, black 85%, transparent 95%)",
                    }}                
                ></div>
                <div className="flex flex-col gap-2 justify-between items-center ">
                    <SurroundCard 
                    Title="JAVASCRIPT" 
                    Glimpse={"Get used to"}
                    Icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm7.334 13.055q1.08.87 2.156.858q.66 0 1.012-.242a.75.75 0 0 0 .341-.66a.97.97 0 0 0-.34-.748q-.352-.307-1.332-.616q-1.177-.34-1.815-.88q-.626-.54-.638-1.507q0-.913.792-1.529q.77-.616 1.97-.616q1.672 0 2.683.814l-.77 1.199a2.6 2.6 0 0 0-.935-.462a3.2 3.2 0 0 0-.946-.165q-.57 0-.913.209q-.34.21-.34.55q0 .374.417.638q.42.254 1.43.561q1.221.363 1.738.968t.517 1.54q0 .957-.737 1.65q-.726.682-2.112.715q-1.815 0-3.036-1.089zm-5.53.638q.352.22.847.22q.517 0 .858-.297q.34-.308.341-1.067v-5.302h1.485v5.588q-.033 1.298-.748 1.87a2.5 2.5 0 0 1-.891.484a3.3 3.3 0 0 1-.935.143q-.825 0-1.463-.286q-.682-.307-1.144-1.089l1.034-.847q.285.385.616.583"></path></svg>}  
                    />
                    <SurroundCard 
                    Title="AI DEV"
                    Glimpse={"2 Project"}
                    Icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="currentColor" d="M27 19c1.654 0 3-1.346 3-3s-1.346-3-3-3a2.995 2.995 0 0 0-2.816 2h-5.77l7.3-7.3c.392.187.824.3 1.286.3c1.654 0 3-1.346 3-3s-1.346-3-3-3s-3 1.346-3 3c0 .462.114.894.3 1.285L16 14.586V8c0-1.102.897-2 2-2h2V4h-2c-1.2 0-2.266.543-3 1.382A3.98 3.98 0 0 0 12 4h-1c-4.962 0-9 4.037-9 9v6c0 4.963 4.038 9 9 9h1c1.2 0 2.266-.542 3-1.382c.734.84 1.8 1.382 3 1.382h2v-2h-2c-1.103 0-2-.897-2-2v-6.586l8.3 8.301c-.187.391-.3.823-.3 1.285c0 1.655 1.346 3 3 3s3-1.345 3-3s-1.346-3-3-3a2.96 2.96 0 0 0-1.285.301l-7.301-7.3h5.77A2.995 2.995 0 0 0 27 19m0-4a1 1 0 0 1 0 2a1 1 0 0 1 0-2m0-11a1.001 1.001 0 0 1 0 2a1 1 0 0 1 0-2m-13 8h-2v2h2v4h-2c-1.654 0-3 1.346-3 3v2h2v-2a1 1 0 0 1 1-1h2v4c0 1.103-.897 2-2 2h-1c-3.52 0-6.432-2.613-6.92-6H6v-2H4v-4h3c1.654 0 3-1.346 3-3V9H8v2a1 1 0 0 1-1 1H4.08c.488-3.387 3.4-6 6.92-6h1c1.103 0 2 .898 2 2zm14 15a1.001 1.001 0 0 1-2 0c0-.551.449-1 1-1s1 .449 1 1"></path></svg>} 
                    />
                </div>
                <div className="flex flex-col gap-2 justify-center items-center ">
                    <SurroundCard 
                    Title="PYTHON"
                    Glimpse={"4+ years exp"}
                    Icon={<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M314 36.38c-18.59-3.06-45.8-4.47-64.27-4.38a311 311 0 0 0-51.66 4.38c-45.74 8-54.07 24.7-54.07 55.54V128h112v16H107.62C66.06 144 32.33 193.67 32 255.12v.88a163 163 0 0 0 3.13 32c9.29 46.28 38.23 80 72.49 80H128v-54c0-31.3 20.84-59.95 55-66.1l9.87-1.23H314a56 56 0 0 0 15.06-2A52.48 52.48 0 0 0 368 193.68V91.92c0-28.92-24.68-50.73-54-55.54M194.93 105.5a20.37 20.37 0 1 1 20.3-20.3a20.29 20.29 0 0 1-20.3 20.3"/><path fill="currentColor" d="M475.28 217c-10.7-42.61-38.41-73-70.9-73h-17.71v47.45c0 39.57-26 68.22-57.74 73.13a63.5 63.5 0 0 1-9.69.75H198.08a60 60 0 0 0-15.23 1.95C160.54 273.14 144 291.7 144 315.77v101.77c0 29 29.14 46 57.73 54.31c34.21 9.95 71.48 11.75 112.42 0c27.19-7.77 53.85-23.48 53.85-54.31V384H256v-16h148.38c29.44 0 54.95-24.93 67.45-61.31A156.8 156.8 0 0 0 480 256a160.6 160.6 0 0 0-4.72-39M316.51 404a20.37 20.37 0 1 1-20.3 20.3a20.29 20.29 0 0 1 20.3-20.3"/>
                        </svg>}
                    />
                    <div className="bg-white w-36 h-48 p-3 z-30 drop-shadow border border-b-slate-300 rounded transition-transform duration-300 transform 
                    hover:scale-150 hover:drop-shadow-lg hover:border-amber-500">
                        <img className="object-cover h-full w-full rounded-full" src={`${process.env.PUBLIC_URL}/img/fotoSaya.jpg`} alt="" />
                    </div>
                    <SurroundCard 
                    Title="ENGLISH" 
                    Glimpse={"C2 EFSET"}
                    Icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><defs><mask id="ipSEnglish0"><g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4}><rect width={36} height={36} x={6} y={6} fill="#fff" stroke="#fff" rx={3}></rect><path stroke="#000" d="M13 31V17h8m-8 7h7.5M13 31h7.5m5.5 0V19m0 12v-6.5a4.5 4.5 0 0 1 4.5-4.5v0a4.5 4.5 0 0 1 4.5 4.5V31"></path></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSEnglish0)"></path></svg>}
                    />
                </div>
                <div className="flex flex-col gap-2 justify-between items-center ">
                    <SurroundCard 
                    Title="JAVA" 
                    Glimpse={"1 Web App"}
                    Icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3c-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1m-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6c-23.9 35.9 11.7 74.4 60.2 118.2m114.6-176.2c.1 0-175.2 43.8-91.5 140.2c24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3m-6.1 270.5a12.2 12.2 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3a70.5 70.5 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4M348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7c-18.3-7.9 16-19 26.8-21.3c11.2-2.4 17.7-2 17.7-2c-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4M124.44 396c-78.7 22 47.9 67.4 148.1 24.5a186 186 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5c-33.5-3.8-13.9-15.2-13.9-15.2m179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6c0-.1 11.8 9.7 72.4 13.6c92.2 5.9 233.8-3.3 237.1-46.9c0 0-6.4 16.5-76.2 29.7M260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6c-33.5-3.5-11.6-19.7-11.6-19.7c-86.8 28.8 48.2 61.4 169.5 25.9a60.4 60.4 0 0 1-21.1-12.8"></path></svg>}
                    />
                    <SurroundCard 
                    Title="ADOBE AI" 
                    Glimpse={"Mastering"}
                    Icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10.41 9.48c.35 1.14.71 2.28 1.07 3.44H9.36c.36-1.16.7-2.3 1.05-3.44"></path><path fill="currentColor" d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5m-2.51 14.78h-1.56a.24.24 0 0 1-.27-.2c-.19-.56-.39-1.12-.58-1.69a.27.27 0 0 0-.32-.22H9.1a.27.27 0 0 0-.33.23c-.17.56-.36 1.1-.53 1.66a.26.26 0 0 1-.31.22H6.56c-.24 0-.26 0-.18-.25l2.16-6.23c.2-.57.4-1.14.58-1.71a2 2 0 0 0 .08-.52c0-.21.08-.26.27-.25h1.91c.14 0 .21 0 .26.19l2.46 6.93c.19.54.38 1.07.56 1.6c.08.22.07.24-.17.24m3.06-.17c0 .17-.07.22-.23.22h-1.44c-.2 0-.25-.08-.25-.26v-6.28c0-.2.06-.28.27-.27h1.41c.16 0 .24 0 .24.22q-.01 3.18 0 6.37m-1-7.3a1 1 0 0 1-1.06-1.08a1.07 1.07 0 0 1 1.1-1.06a1 1 0 0 1 1 1.08a1 1 0 0 1-1 1.06z"></path><path fill="currentColor" d="M11.48 12.92H9.36c.36-1.16.7-2.3 1-3.44c.4 1.14.76 2.28 1.12 3.44"></path></svg>}
                    />
                    
                </div>
            </div>
            </div>

            <button className='w-40 p-3 absolute lg:-bottom-10 lg:right-10 xs:m-auto xs:-bottom-20 flex gap-3 items-center animate-bounce border rounded-full bg-sky-500 '
                    onClick={() => onSectionClick('introduction')}
            >
                <svg className="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <h1 >Scroll Down</h1>
            </button>

    </header>
    );
  }
  
  export default LandingPage;