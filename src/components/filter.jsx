import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

function Filter(props) {
  const [criterias, setCriterias] = useState(props.criterias);

  const handleChange = (event) => {
    props.onFilter(event.target.value);
  };

  return (
    <FormControl>
      <RadioGroup
        onChange={handleChange}
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        defaultValue=""
        name="row-radio-buttons-group"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            marginRight: "5px",
          }}
        >
          <FilterAltIcon sx={{ opacity: "50%" }}></FilterAltIcon> Filter by:
        </div>

        <FormControlLabel
          value=""
          control={<Radio color="secondary" size="small" />}
          label="All"
        />
        {criterias.map((c) => (
          <FormControlLabel
            value={c.value}
            sx={{ fontSize: "10" }}
            control={<Radio color="secondary" size="small" />}
            label={c.label}
          ></FormControlLabel>
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default Filter;

export function filter(criteria, property, pageContent) {
  if (criteria) {
    let filteredContent = pageContent.filter(
      (content) => content[property] === criteria
    );
    return filteredContent;
  } else return pageContent;
}
