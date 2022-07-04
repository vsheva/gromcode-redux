import React from 'react';

const Pagination = ({ goPrev, goNext, itemsPerPage, totalItems, currentPage }) => {
  const isPrevPageAvailable = currentPage > 1;
  const isNextPageAvailable = currentPage < Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="pagination">
      <button disabled={!isPrevPageAvailable} onClick={goPrev} className="btn">
         {isPrevPageAvailable && '←'}

      </button>
      <span className="pagination__page">{currentPage}</span>
      <button disabled={!isNextPageAvailable} onClick={goNext} className="btn">
          {isNextPageAvailable && '→'}
      </button>
    </div>
  );
};

export default Pagination;


/* old version
const Pagination = ({ goPrev, goNext, itemsPerPage, totalItems, currentPage }) => {
    const isPrevPageAvailable = currentPage > 1;
    const isNextPageAvailable = currentPage < Math.ceil(totalItems / itemsPerPage);

    return (
        <div className="pagination">
            <button disabled={!isPrevPageAvailable} onClick={()=>goPrev()} className="btn">
                {isPrevPageAvailable ? '←' : false}

            </button>
            <span className="pagination__page">{currentPage}</span>
            <button disabled={!isNextPageAvailable} onClick={()=>goNext()} className="btn">
                {isNextPageAvailable ? '→' : false}
            </button>
        </div>
    );
};

export default Pagination;
*/
