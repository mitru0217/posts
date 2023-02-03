import React from "react";
import { PaginationWrapper, Pages } from "./Pagination.styled";
import { getPagesArray } from "../../Utils/pages";

const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = getPagesArray(totalPages);
  return (
    <PaginationWrapper>
      {pagesArray.map((p) => (
        <Pages
          key={p}
          onClick={() => {
            changePage(p);
          }}
        >
          {p}
        </Pages>
      ))}
    </PaginationWrapper>
  );
};

export default Pagination;
