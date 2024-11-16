import React, { useState, useEffect, useRef } from 'react';
import Pagination1 from '../components/Pagination1';
import Divider1 from '../components/Divider1';
import Card2 from '../components/Card2';

import Content from "../Content.json"

function PriorCard() {

  const Projcet = Content.Projcet.filter((data) => data.Rate === 'A' && data.Category == "Web");

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(1);
  const [transition, setTransition] = useState(false);

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
    setTransition(true); // Trigger fade out

    // Wait for the fade out to finish before changing page
    setTimeout(() => {
        setCurrentPage(pageNumber); // Update the current page
        setTransition(false); // Trigger fade in
    }, 400); // Match this time to your CSS transition duration
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

        <div className='w-full h-full flex flex-nowrap gap-20 snap-x snap-mandatory'
        style={{
          opacity: transition ? 0 : 1,
          transition: 'opacity  0.4s linear', // Optional: adds smooth transition effect
      }}>
          {
            currentPosts
            .map((data, index) => (
              <div 
              key={`${currentPage}-${data.id}`}
              className={`w-full flex-shrink-0 snap-center  box-border`}
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
