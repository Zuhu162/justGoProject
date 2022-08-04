import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import Fade from "@mui/material/Fade";

function TableView(props) {
  return (
    <Fade in>
      <TableContainer component={Paper} sx={{ marginBottom: 2 }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead sx={{ backgroundColor: "black" }}>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Name</TableCell>
              <TableCell sx={{ color: "white" }}>Registration Date</TableCell>
              <TableCell sx={{ color: "white" }}>Username</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.users.map((user) => (
              <TableRow>
                <TableCell>
                  <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                    <img
                      style={{ borderRadius: "50%", marginRight: "20px" }}
                      src={user.picture.thumbnail}
                      alt={`${user.email} thumbnail`}
                    ></img>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      {user.name.last}, {user.name.first}
                      <br />
                      <Typography variant="caption">{user.email}</Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  {user.registered.date
                    .substring(0, 10)
                    .split("-")
                    .reverse()
                    .join("-")}
                </TableCell>
                <TableCell>{user.login.username}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fade>
  );
}

export default TableView;
