import React from "react";
import { useState, useEffect, useContext } from "react";
import { Card1 } from "../components/Cards";
import { Divider2 } from '../components/Divider1';

import { LanguageContext } from "../LanguageContext";

function ContentGallery({Category}) {

    const { languageData } = useContext(LanguageContext);
    

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4);
    const [transition, setTransition] = useState('translateX(0)');

    const WebProjcetLength = posts.length

    useEffect(() => {
        // Simulate data loading as if it were fetched
        setLoading(true);
        const WebProjcet = languageData.Project.filter((data) => data.Category === Category);
        setPosts(WebProjcet); // Use the imported JSON data
        setLoading(false);
      }, [languageData, Category]);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const handlePagination = (pageNumber, status) => {
        if (status === 'back') {
            setTransition('translateX(-100%)');            
        } else if (status === 'next') {
            setTransition('translateX(100%)');
        }       
        setTimeout(() => {
            setTransition('translateX(100%)')
            setCurrentPage(pageNumber);
            setTransition('translateX(0)');
        }, 400);
    };

    if(loading) {
        return(<div>loading...</div>)
    }
    

    return (
        <>
            <div className="w-full h-full relative ">

                {/** BACKGROUND */}
                <div className="w-full h-full absolute -z-20 bg-radial-pattern"></div>


                {/** GRADIENT */}
                <div className='w-full h-full absolute -z-10 top-0 right-0 flex xs:flex-col items-center bg-gradient-to-t from-white via-transparent to-white'></div>
                
                
                {/** DIVIDER */}
                <div className="lg:w-3/4 xs:w-11/12 place-self-center">
                    <div className="w-full mb-5 place-self-start"><Divider2 projectLength={WebProjcetLength} page={currentPage} handlePagination={handlePagination}/></div>
                </div>
        
                {/** CONTENT */}
                <div className="lg:w-3/4 xs:w-11/12 m-auto relative flex flex-row flex-nowrap overflow-visible gap-6 justify-start">
                    
                    <div className={`w-full m-auto flex flex-row flex-nowrap gap-6 ${currentPosts.length >= postsPerPage ? "justify-between" : "justify-start" }  xl:overflow-visible xs:overflow-y-hidden xs:overflow-x-scroll snap-x snap-mandatory`}
                    style={{
                        transform: transition,
                        transition: 'transform 0.4s ease-in-out', // Optional: adds smooth transition effect
                    }}>
                            {currentPosts.map((item, index) => (
                        <div className="xl:basis-[23%] lg:basis-[40%] md:basis-[50%] xs:basis-[80%] h-full xs:flex-shrink-0 snap-start">
                            <Card1
                            key={index}
                            img={item.Img}
                            title={item.Title}
                            description={item.Description}
                            link={item.Link}
                            technology={item.Technology}
                            attribute={item.Attribute}
                            />
                        </div>
                    ))}  
                    </div>
                </div>           
            </div>
        </>
    );
    
}

export default ContentGallery