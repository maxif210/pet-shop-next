import React from 'react';

const Pagination = ({ matchesPerPage, totalMatch, paginate}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMatch / matchesPerPage); i++) {
    pageNumbers.push(i);
  }
 

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='item-pagination'>
            <a onClick={() => paginate(number)} className='pagination-number'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;