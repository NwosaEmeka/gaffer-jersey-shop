import React from 'react';
import { Link } from 'react-router-dom';
import './pagination.css';

function Pagination({ size, productsPerPage, changePage }) {
  let pages = [];
  let totalPages = Math.ceil(size / productsPerPage);
  for (let i = 1; i <= totalPages; i++){
    pages.push(i);
  }

  return (
    <div>
      <ul className="pagination__list">
        {pages.map(page => 
         <li key={page} className="pagination__list-item">
            <Link className="page-number" to={"/products"+page}
            onClick={()=>changePage(page)}
            >{page}
            </Link>
          </li>
          )}
      </ul>
    </div>
  )
}

export default Pagination
