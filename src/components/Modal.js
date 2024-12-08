import { useContext } from "react";
import { downloadFile } from "../components/download";
import { ThemeContext } from "../Theme";

export default function Modal({open, children, close}) {

    const { theme } =  useContext(ThemeContext);

    if (!open) {
        return null
    }

    const handleDownload = () => {
        downloadFile('files/FadhliNurHimawan-resume.pdf', 'FadhliNurHimawan-resume.pdf');
    };


    const MODAL_STYLE = {
        position: 'fixed',
        display: 'flex', 
        'flex-direction': 'column',
        'align-items': 'center',
        'justify-content': 'center',
        'text-align': 'justify',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '50px',
        'border-radius': '10px',
        zIndex: 1000
    }

    const OVERLAY_STYLES = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, .7)',
        zIndex: 1000
      }

    return (
        <>
        <div style={OVERLAY_STYLES}></div>
        <div style={MODAL_STYLE} className={`drop-shadow text-justify ${theme}`}>
            <h1 className="xs:text-3xl font-bold text-amber-500">PERMISSION</h1>
            <br></br>
            <p className={`text-${theme}`} >Click blue button below to download my resume, i make sure theres no malware or danger file on it 
            <a className="underline text-justify text-sky-500 cursor-pointer" href="https://drive.google.com/drive/folders/14YMTm57JBtQRZDtn9AsMu67C4BEYlPVv?usp=sharing" target="_blank" rel="noreferrer"> If you afraid, you could click this link to download it through the gdrive link</a></p>

            <div className="lg:w-1/2 xs:w-full mt-5 flex lg:gap-0 xs:gap-5 justify-between">
                <button onClick={close} className={`px-6 py-2 border rounded ${theme} border-sky-500 hover:text-sky-500`}>Cancel</button>
                <button onClick={handleDownload} className="px-6 py-2 border rounded text-white bg-blue-950 hover:text-amber-500">Download</button>
            </div>
        </div>
        </>
    )

}