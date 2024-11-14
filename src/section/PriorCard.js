import React, { useState, useEffect, useRef } from 'react';
import Pagination1 from '../components/Pagination1';
import Divider1 from '../components/Divider1';
import Card2 from '../components/Card2';

import Content from "../Content.json"

function PriorCard() {

  const Projcet = Content.Projcet.filter((data) => data.Rate === 'A');

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(1);
  const [fade, setFade] = useState(true); 

  useEffect(() => {
    // Simulate data loading as if it were fetched
    setLoading(true);
    setPosts(Projcet); // Use the imported JSON data
    setLoading(false);
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePagination = (pageNumber) => {
    setFade(false); // Trigger fade out

    // Wait for the fade out to finish before changing page
    setTimeout(() => {
        setCurrentPage(pageNumber); // Update the current page
        setFade(true); // Trigger fade in
    }, 500); // Match this time to your CSS transition duration
};


  if (loading) {
    return (
        <h1>Loading.....</h1>
    );
  }

  

  return (
    <>      

      <div className='max-auto m-auto flex flex-col gap-5'>
        <Divider1 
          title = {"Best Project"}
        />

        <div className='w-full h-full flex flex-nowrap gap-20 snap-x snap-mandatory'>
          {
            currentPosts
            .map((data, index) => (
              <div 
              key={`${currentPage}-${data.id}`}
              className={`w-full flex-shrink-0 snap-center  box-border ${fade ? 'opacity-100 duration-300' : 'opacity-0'}`}
              >
                <Card2 
                content= {data}
                />
              </div>
            )

            )
          }
        </div>

        <Pagination1 length={posts.length} postsPerPage={postsPerPage} handlePagination={handlePagination} currentPage={currentPage} />
      </div>

    </>
      
  );
}

export default PriorCard;
