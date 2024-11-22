import React, { useState, useEffect, useRef, useContext } from 'react';
import Divider1 from '../components/Divider1';
import Card2 , {Card3} from '../components/Card';

import { LanguageContext } from '../LanguageContext';

function PriorCard() {

  const { language, languageData, toggleLanguage } = useContext(LanguageContext);  

  // const Projcet = languageData.Project.filter((data) => data.Rate === 'A' && data.Category == "Web");

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPost, setCurrentPost] = useState(0);
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(3);
  const [transition, setTransition] = useState(false);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  console.log("post : ", posts, "current post: ", currentPost)

  useEffect(() => {
    // Simulate data loading as if it were fetched
    setLoading(true);

    const Projcet = languageData.Project.filter(
      (data) => data.Rate === "A" && data.Category === "Web"
    );

    setTimeout(() => {
      setPosts(Projcet)
    }, 300);
    setLoading(false);
  }, [languageData]);

  const handlePost = (postNumber) => {
    setTransition(true); // Trigger fade out

    // Wait for the fade out to finish before changing page
    setTimeout(() => {
        setCurrentPost(postNumber)
        setTransition(false); // Trigger fade in
    }, 300); // Match this time to your CSS transition duration
};

  const RADIAL_BG = {
    background: 'radial-gradient(rgb(14 165 233), rgb(23 37 84))'
  }

  const DOPE_SHADOW = {
    filter: 'drop-shadow(2px 2px 5px rgb(0 0 0 / 1))'
  }
  
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>      

      <div className='max-auto m-auto flex flex-col gap-5'>
        <Divider1 
          title = {"Best Project"} length={posts.length} postsPerPage={postsPerPage}
        />
        <div className="w-full h-auto lg:p-6 xs:p-4 grid lg:grid-cols-4 lg:grid-rows-none xs:grid-rows-4 lg:gap-6 xs:gap-4 rounded-lg" style={RADIAL_BG}>
                {/** LEFT BAR */}
                  {posts.length > 0 ? (
                      <div className={`w-full lg:col-span-3 lg:row-span-1 xs:row-span-3  ${transition ? 'opacity-0 duration-200' : 'opacity-1 duration-200' }`}><Card3 content={posts[currentPost]} /></div>
                  ) : (
                    <div className='w-full col-span-4 text-center text-2xl text-bold text-amber-500 bg-white border rounded-md'>Loading</div>
                  )}
                
                {/** RIGHT BAR */}
                <div className="w-full lg:h-full xs:h-fit grid lg:grid-rows-3 lg:grid-cols-none lg:gap-6 xs:gap-4 place-items-center
                xs:grid-cols-3 xs:grid-rows-none 
                ">
                  {
                    
                    posts
                    .map((data, index) => (
                      <button className='w-full h-full hover:scale-105 transition-transform' style={DOPE_SHADOW} onClick={() => {handlePost(index);}}>
                        <div className="w-full lg:h-32  xs:h-20">
                          <img className="w-full h-full object-cover object-center  border-2 rounded-lg border-amber-500" src={`${process.env.PUBLIC_URL}${data.cover_img}`} />
                        </div>
                      </button>
                    ))}
                </div>
        </div>
        
        {/**
          
            */}

        {/**
        <div className='lg:hidden xs:block'>
        <Pagination1 length={posts.length} postsPerPage={postsPerPage} handlePagination={handlePagination} currentPage={currentPage} />
        </div>

         */}
        
      </div>

    </>
      
  );
}

export default PriorCard;
