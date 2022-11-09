import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ onClick, per_page, total_pages, total_items }: any) => {
  const pageCount = Math.ceil(total_items / per_page)
  return (
    <>
      <ReactPaginate
        breakLabel=".  .  ."
        nextLabel="Next"
        previousLabel="Preview"
        onPageChange={onClick}
        pageCount={pageCount}
        pageRangeDisplayed={total_pages}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link previous-arrow"
        nextClassName="page-item"
        nextLinkClassName="page-link next-arrow"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination justify-content-center"
        activeClassName="active"
      />
    </>
  );
}
export default Pagination