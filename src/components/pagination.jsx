import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function Pagination(props) {
  let pageNums = [];

  for (let i = 1; i <= Math.ceil(props.totalItems / props.pageSize); i++) {
    pageNums.push(i);
  }

  return (
    <ButtonGroup color="secondary" aria-label="outlined primary button group">
      {pageNums.map((page) => (
        <Button
          variant={props.currentPage === page ? "contained" : "outlined"}
          sx={{ borderRadius: "1" }}
          onClick={() => props.onPageChange(page)}
        >
          {page}
        </Button>
      ))}
    </ButtonGroup>
  );
}

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = pageNumber * pageSize;
  const pageContent = [];

  for (let i = startIndex; i < endIndex; i++) {
    items[i] && pageContent.push(items[i]);
  }
  return pageContent;
}
