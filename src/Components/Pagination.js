import React from "react";
import "./Pagination.css";

const PageNavigation = ({ activePage, totalPageCount, onPageSwitch }) => {
  return (
    <div className="page-navigation">
      <button
        onClick={() => onPageSwitch(activePage - 1)}
        disabled={activePage === 1}
      >
        Previous
      </button>
      <span>{`${activePage} / ${totalPageCount}`}</span>
      <button
        onClick={() => onPageSwitch(activePage + 1)}
        disabled={activePage === totalPageCount}
      >
        Next
      </button>
    </div>
  );
};

export default PageNavigation;
