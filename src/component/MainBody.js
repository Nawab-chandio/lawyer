import { Grid, Typography } from "@mui/material";
import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import "./style.css";
import { Button } from "@mui/base";
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';


function MainBody() {
  return (
    <Grid container className="mainBody">
      <Grid item xs={12}>
        <Typography className="for_justice">WE FIGHT FOR JUSTICE</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="h1"
          sx={{
            fontSize: "128px",
            color: "#fff",
            fontWeight: 400,
            fontFamily: "Californian FB",
          }}
        >
          Market
          <span style={{ color: "#CF8E35" }}> Leader </span> <br />
          Since 1949
        </Typography>
        <Typography className="leaderTypo" fontFamily={"'Californian FB"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod <br /> tempor.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do <br /> eiusmod Lorem ipsum dolor sit amet
        </Typography>
      </Grid>
      <Grid item xs={2} style={{padding:'20px 0px'}}>
        <Button className="get_qoute" >
          Contact Us <ArrowOutwardIcon className="ArrowOutwardIcon" />
        </Button>
      </Grid>
      <Grid item xs={12} className="arrowStyle" padding={"20px 0px"}>
        <WestIcon className="arrowIcon"/>
        <Typography style={{fontFamily:'Californian FB', fontSize:'18px'}}>01/04</Typography>
        <EastIcon className="arrowIcon"/>
      </Grid>
    </Grid>
  );
}

export default MainBody;
