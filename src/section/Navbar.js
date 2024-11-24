import React, { useContext, useState } from 'react'; // Import useState hook
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'; // Don't forget to import the styles for the Dropdown
import GetLogoImg from "../img/FullLogoFadhli.png";

import { downloadFile } from '../components/download';
import { ThemeContext } from '../Theme';
import { LanguageContext } from '../LanguageContext';

function Navbar1({onSectionClick}) {

    const { theme, toggleTheme } = useContext(ThemeContext)
    const { toggleLanguage } = useContext(LanguageContext);

    const options = ['About Me', 'Download My Resume', 'Personal Activity', 'My Personality'];
    const defaultOption = options[0];

    // State to manage selected option
    const [selectedOption, setSelectedOption] = useState(defaultOption);

    // Handle selection change
    const _onSelect = (option) => {
        console.log("Selected option:", option); // Log the selected option
        setSelectedOption(option.value); // Update the state with the selected option value
    };

    return (
        <>
            <nav className={`w-full px-20 flex flex-row justify-between items-center top-0 z-50 ${theme}`}>
                <div className={`w-20 m-2 p-2 box-border rounded bg-white`}>
                    <img src={GetLogoImg} alt="Logo" />
                </div>
                <div className="lg:flex xs:hidden flex-row justify-center items-center gap-9 font-medium text-sm">
                    <div className='hover:drop-shadow'><button onClick={() => onSectionClick('priorCard')}>Best Project</button></div>
                    <div className='hover:drop-shadow'><button onClick={() => onSectionClick('allProjects')}>All Project</button></div>
                    {/** 
                    <div>
                        <Dropdown
                            options={options.map(option => ({ value: option, label: option }))} // Map options to {value, label} format
                            onChange={_onSelect} // Use the _onSelect method
                            value={selectedOption} // Use state to manage selected value
                            placeholder="Select an option"
                        /></div>
                    */}
                    <div className='px-3 py-1 rounded text-white bg-blue-950 hover:scale-150 duration-300'><a href='https://github.com/Fadhyoung' target='_blank'>Github</a></div> 
                </div>
                <div className='flex gap-8'>
                    {/** TOGGLE LANGUAGE */}
                    <button className='text-amber-500' onClick={toggleLanguage}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                        </svg>
                    </button>
                    {/** TOGGLE THEME BUTTON */}
                    <button className='border-none' onClick={toggleTheme}>
                        {
                        theme === "light-theme" ? (
                            <svg className='size-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                            </svg>
                        ) : (
                            <svg className='size-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                            </svg>
                        )
                    }                                        
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Navbar1;
