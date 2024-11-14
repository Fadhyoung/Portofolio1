import Step1 from "../components/Step1";
import AboutMe from "../components/AboutMe1";
import { useState } from "react";

function Introduction() {

    const [Progress, SetProgress] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);

    const totalSlide = 3;

    // Handlers for navigation
    const handleNext = () => {
        setCurrentSlide((prevIndex) => (prevIndex + 1) % totalSlide);
        if (Progress < 100) {
            SetProgress(Progress + 50);
        } else if (Progress === 100) {SetProgress(0)}
    };

    const handlePrevious = () => {
        setCurrentSlide((prevIndex) =>
        prevIndex === 0 ? totalSlide - 1 : prevIndex - 1
        );
        if (Progress > 0) {
            SetProgress(Progress - 50);
        } else if (Progress === 0) {SetProgress(100)}
    };

    const goToSlide = (index) => {
    if (index >= 0 && index < totalSlide) {
        setCurrentSlide(index);
        SetProgress((index / 2) * 100 )
    }
    };


    return (
      <>
        
        <dv className=" w-full flex flex-col items-center gap-6">
        <AboutMe currentSlide={currentSlide} handlePrevious={handlePrevious} handleNext={handleNext} />

        <div className="lg:w-1/2 xs:w-5/6">
          <Step1 progress={Progress} currentSlide={currentSlide} goToSlide={goToSlide}  />
        </div>      
        </dv>    

      </>
        
    );
  }
  
  export default Introduction;
  