import { downloadFile } from "../components/download";

export default function Modal({open, children, close}) {

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
        'text-align': 'center',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#FFF',
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
        <div style={MODAL_STYLE} className="drop-shadow">
            <h1>PERMISSION</h1>
            <p>Click blue button below to download my resume, i make sure theres no malware or danger file on it</p>
            <p className="underline text-sky-500 cursor-pointer"><a href="https://drive.google.com/drive/folders/14YMTm57JBtQRZDtn9AsMu67C4BEYlPVv?usp=sharing" target="_blank">If you afraid, you could click this link to download it through the gdrive link</a></p>

            <div className="w-1/2 mt-5 flex justify-between">
                <button onClick={close} className="px-6 py-2 border rounded bg-white border-sky-500 hover:text-sky-500">Cancel</button>
                <button onClick={handleDownload} className="px-6 py-2 border rounded text-white bg-blue-950 hover:text-amber-500">Download</button>
            </div>
        </div>
        </>
    )

}