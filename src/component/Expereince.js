import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import LadyPic from "./../Assets/girl.png";
import sign from "./../Assets/sign.png";
import "./style.css";

function Expereince() {
  return (
    <>
    <Grid container className='expParent' >
      <Grid item xs={12} className="expParent1" >
        <Typography className="heroTypo" id="portfolio" border={'1px solid red'}>
          Lorem ipsum dolor Amet
        </Typography>
      </Grid>

        <Grid item xs={12} container>
        <Grid item xs={2}>
          <Typography className="expYears">12+</Typography>
          <Typography className="expYears1" style={{ marginTop: 0 }}>
            Years of <br /> experience
          </Typography>
        </Grid>

        <Grid item xs={7} >
          <Typography className="expContent">
            {" "}
            <span style={{ fontSize: "68px" }}>L</span>orem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Grid>
        <Grid item xs={12} container paddingTop={"10px"}>
        <Grid item xs={2}></Grid>
        <Grid item xs={5} className="numList">
        <Typography className="">
          <span className="Numbers">1. </span>
            Lorem ipsum dolor sit amet, isert consectetur adipiscing elit.ipsum dolor sit amet
          </Typography>
          <Divider className="divider"  />
          <Typography className="TypoText">
          <span className="Numbers">2. </span>

           Lorem ipsum dolor sit amet, isert consectetur adipiscing elit.ipsum dolor sit amet
          </Typography>
          <Divider  className="divider"/>

          <Typography className="TypoText">
          <span className="Numbers">3. </span>

           Lorem ipsum dolor sit amet, isert consectetur adipiscing elit.ipsum dolor sit amet
          </Typography>
          <Divider className="divider"  />
          <Typography className="TypoText">
          <span className="Numbers">4. </span>

           Lorem ipsum dolor sit amet, isert consectetur adipiscing elit.ipsum dolor sit amet
          <Divider  />
          </Typography>
          <span padding={"20px  0px"}>

          <img src={sign} alt="sign" />       
          </span>
           </Grid>
        </Grid>
      </Grid>
    </Grid>


    {/* <Grid container className='expParent' > */}
    {/* <Grid item xs={12} className="expParent1" style={{backgroundImage: `url(${LadyPic})` }}> */}

      {/* <img src={LadyPic} alt='picture'  className='heroPic1'/> */}
      {/* <Grid item xs={12} style={{border:'1px solid red'}}>
        <Typography className="heroTypo" id="portfolio">
          Lorem ipsum dolor Amet
        </Typography>
      </Grid> */}
      {/* <Grid item xs={12} container>
        <Grid item xs={2}>
          <Typography className="expYears">12+</Typography>
          <Typography className="expYears1" style={{ marginTop: 0 }}>
            Years of <br /> experience
          </Typography>
        </Grid>

        <Grid item xs={7} >
          <Typography className="expContent">
            {" "}
            <span style={{ fontSize: "68px" }}>L</span>orem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Grid>
        <Grid item xs={12} container paddingTop={"10px"}>
        <Grid item xs={2}></Grid>
        <Grid item xs={5} className="numList">
        <Typography className="">
          <span className="Numbers">1. </span>
            Lorem ipsum dolor sit amet, isert consectetur adipiscing elit.ipsum dolor sit amet
          </Typography>
          <Divider className="divider"  />
          <Typography className="TypoText">
          <span className="Numbers">2. </span>

           Lorem ipsum dolor sit amet, isert consectetur adipiscing elit.ipsum dolor sit amet
          </Typography>
          <Divider  className="divider"/>

          <Typography className="TypoText">
          <span className="Numbers">3. </span>

           Lorem ipsum dolor sit amet, isert consectetur adipiscing elit.ipsum dolor sit amet
          </Typography>
          <Divider className="divider"  />
          <Typography className="TypoText">
          <span className="Numbers">4. </span>

           Lorem ipsum dolor sit amet, isert consectetur adipiscing elit.ipsum dolor sit amet
          <Divider  />
          </Typography>
          <span padding={"20px  0px"}>

          <img src={sign} alt="sign" />       
          </span>
           </Grid>
        </Grid>
      </Grid> */}
    {/* </Grid> */}
    {/* </Grid> */}
    </>
  );
}

export default Expereince;
