function Pagination1({ postsPerPage, length, handlePagination, currentPage }) {
  
  let paginationNumber = []
    for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
        paginationNumber.push(i);
    }
  
  return (
    <>
      <div className='flex gap-5 items-center justify-center'>
            {
                paginationNumber.map((data) => (
                    <button  key={data} onClick={() => handlePagination(data)} className={currentPage === data ? 'bg-sky-500 rounded-md' : 'bg-blue-950 rounded-md'}>
                        <div className="py-1 px-5 drop-shadow-sm text-white ">
                          {data}
                        </div>
                    </button>
                ))
            }
        </div>

    </>
      
  );
}

export default Pagination1;
