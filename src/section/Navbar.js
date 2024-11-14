import React, { useState } from 'react'; // Import useState hook
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'; // Don't forget to import the styles for the Dropdown
import GetLogoImg from "../img/FullLogoFadhli.png";

import { downloadFile } from '../components/download';

function Navbar1({onSectionClick}) {
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
            <nav className="flex flex-row justify-between items-center w-full px-20 py-3 top-0 z-50 bg-white">
                <div className="w-20 m-2 box-border">
                    <img src={GetLogoImg} alt="Logo" />
                </div>
                <div className="flex flex-row justify-center items-center gap-9 font-medium text-sm">
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
            </nav>
        </>
    );
}

export default Navbar1;
