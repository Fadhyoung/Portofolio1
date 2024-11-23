import './App.css';
import React, { useState, useEffect, useRef, useContext } from 'react';

import LandingPage from './section/landingPage';
import Navbar1 from './section/Navbar';
import Introduction from './section/Introduction';
import PriorCard from './section/PriorCard';
import Pagination1 from './components/Pagination1';
import Banner1, { Banner2, Banner4 } from './components/Banners';
import Banner3 from './components/Banner3';
import ContentGallery from './section/ContentGallery';
import Footer from './section/Footer';

import { ThemeContext } from './Theme';

function App() {

  const { theme } = useContext(ThemeContext)

  // State to control the visibility and opacity of the navbar
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling down
      if (currentScrollY > lastScrollY) {
        setScrollingDown(true);
      } else {
        // If scrolling up, hide navbar if at the top
        if (currentScrollY <= 100) {
          setScrollingDown(false);
        }
      }

      // Show navbar on scroll down
      if (currentScrollY > 0) {
        setNavbarVisible(true);
      } else {
        setNavbarVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);


  const sectionRefs = {
    priorCard: useRef(null),
    allProjects: useRef(null),
    introduction: useRef(null),
    footer: useRef(null)
  };

    // Function to handle the scroll action
  const scrollToSection = (section) => {
    if (sectionRefs[section] && sectionRefs[section].current) {
      sectionRefs[section].current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <>
      
      <div className={`${theme} lg:w-full xs:w-fit max-w-[2024px] m-auto grid grid-cols-1 font-calibre`}>

        {/** TOP BACKGROUND */}
        <div className='flex flex-col gap-10'>
          <div className=''><LandingPage onSectionClick={scrollToSection}/></div>
          
          <br></br>
          
          <div
            className={` fixed top-0 w-full z-50 transition-opacity duration-300 ${
              navbarVisible ? (scrollingDown ? 'opacity-100' : 'opacity-0') : 'hidden'
            }`}
          >
            <Navbar1 onSectionClick={scrollToSection} /> {/* Pass the scroll function to Navbar */}
          </div>

          <div className='' ref={sectionRefs.introduction}><Introduction /></div>
        </div>

        {/** TRANSITION BACKGROUND */}
        <div className='w-full h-full pb-16 mt-20 gradient-tb-2c'>
          
          <div className='m-auto lg:w-3/4 xs:w-11/12 ' ref={sectionRefs.priorCard}><PriorCard /></div>
          
          <div className='w-3/4 mx-auto my-28'>
            <Banner4 
              FirstTitle={"What do you think about my portofolio?"}
              SecondTitle={"Roll down please"}
              Desc={"I know there's some of unfinished thing. but everything is still in development and will be always developed. So don't hasitate to hire me :v"}
              ButtonT={"Scroll Down"}
              onSectionClick={scrollToSection}
            />
          </div>

        </div>         

        {/** BOTTOM BACKGOUND */}
        <div className={`w-full h-full pt-36 -mt-24 flex flex-col gap-10 rounded-[6rem] ${theme}`}>
          
          <div className='w-full' ref={sectionRefs.allProjects}><ContentGallery Category={"Web"} /></div>

          <div className='mx-auto lg:w-3/4 xs:w-full lg:p-0 xs:p-2'><Banner2 /></div>

          <div className='w-full'><ContentGallery Category={"UIUX"} /></div>


          <div className='lg:w-3/4 xs:w-11/12 m-auto '>
            <Banner3 
              FirstTitle={"Are you pleased?"}
              SecondTitle={"Check my resume for more detail about me"}
              Desc={"If you please about my works, get to know about me by reading my resume down below"}
              ButtonT={"Download resume here"}
            />
          </div>

          <Footer />

        </div>        

      </div>
      

    </>
      
  );
}

export default App;
