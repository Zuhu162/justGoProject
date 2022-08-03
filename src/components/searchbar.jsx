import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";

function SearchBar(props) {
  const [value, setValue] = useState("");

  const handleChange = (value) => {
    setValue(value);
    props.onSearch(value);
  };

  return (
    <div>
      <TextField
        onChange={(e) => handleChange(e.currentTarget.value)}
        size="small"
        variant="outlined"
        label={
          <div style={{ display: "flex", alignItems: "center" }}>
            <SearchIcon color="disabled"></SearchIcon>Search
          </div>
        }
      ></TextField>
    </div>
  );
}

export default SearchBar;

export function searching(value, pageContent) {
  if (value) {
    let searchedContent = pageContent.filter(
      (content) =>
        content.email.toLowerCase().includes(value.toLowerCase()) ||
        content.name.first.toLowerCase().includes(value.toLowerCase()) ||
        content.name.last.toLowerCase().includes(value.toLowerCase()) ||
        content.login.username.toLowerCase().includes(value.toLowerCase())
    );
    return searchedContent;
  } else return pageContent;
}
