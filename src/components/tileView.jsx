import React from "react";
import Card from "@mui/material/Card";
import { CardHeader } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Fade from "@mui/material/Fade";

function TileView(props) {
  return (
    <Fade in>
      <Grid container spacing={2}>
        {props.users.map((user) => (
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardHeader
                avatar={
                  <img
                    style={{ borderRadius: "50%" }}
                    src={user.picture.thumbnail}
                  />
                }
                title={
                  <Typography variant="p" sx={{ fontWeight: "bold" }}>
                    {user.name.last}, {user.name.first}
                  </Typography>
                }
                subheader={user.email}
              ></CardHeader>
              <CardContent>
                <Box sx={{ display: "flex" }}>
                  <AccountCircleIcon sx={{ marginRight: "10px" }} />
                  <Typography variant="p">{user.login.username}</Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <CalendarMonthIcon sx={{ marginRight: "10px" }} />
                  <Typography variant="p">
                    {user.registered.date
                      .substring(0, 10)
                      .split("-")
                      .reverse()
                      .join("-")}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Fade>
  );
}

export default TileView;
