import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import { paginate } from "./pagination";
import Pagination from "./pagination";
import Filter, { filter } from "./filter";
import SearchBar, { searching } from "./searchbar";
import Switch from "@mui/material/Switch";
import TableView from "./tableview";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import TileView from "./tileView";
import Grid from "@mui/material/Grid";

function Users() {
  const [users, setUsers] = useState([]);
  const [pageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [criteria, setCriteria] = useState("");
  const [search, setSearch] = useState("");
  const [tileView, setTileView] = useState(false);

  //FILTERING
  const criterias = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];
  const handleFilter = (criteria) => {
    setCurrentPage(1);
    setCriteria(criteria);
  };

  let filtered = filter(criteria, "gender", users);

  //SEARCH
  const handleSearch = (value) => {
    setSearch(value);
    setCurrentPage(1);
  };

  let searched = searching(search, filtered);

  //PAGINATION
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  let paginated = paginate(searched, currentPage, pageSize);

  //FETCH DATA FROM API
  useEffect(() => {
    const fetchUserData = async () => {
      const res = await axios.get(
        process.env.REACT_APP_RANDOMUSERGENERATOR_LINK
      );
      setUsers(res.data.results);
    };
    fetchUserData();
  }, []);

  return (
    <div>
      <h1 style={{ fontWeight: "10" }}>User List</h1>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <SearchBar onSearch={handleSearch}></SearchBar>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Filter onFilter={handleFilter} criterias={criterias}></Filter>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Box
            sx={{
              display: "flex",
              // sm: { justifyContent: "flex-start" },
              justifyContent: "flex-end",
            }}
          >
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    color="secondary"
                    onChange={() => setTileView(!tileView)}
                  />
                }
                label="Tile View"
              />
            </FormGroup>
          </Box>
        </Grid>
      </Grid>
      {tileView ? (
        <TileView users={paginated}></TileView>
      ) : (
        <TableView users={paginated}></TableView>
      )}
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Pagination
          totalItems={searched.length}
          pageSize={pageSize}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        ></Pagination>
      </Box>
    </div>
  );
}

export default Users;
