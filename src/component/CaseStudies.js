import React from 'react';
import { Card, CardMedia, Grid, Typography } from '@mui/material';
import firstPc from "./../Assets/firstPc.png";
import secondPc from "./../Assets/secondPc.png";
import thirdPc from "./../Assets/thirdPc.png";
import fourthPc from "./../Assets/fourthPc.png";
import "./style.css";
import dot from "./../Assets/dot.png"

const pictures = [
  { image: firstPc, alt: 'First PC' },
  { image: secondPc, alt: 'Second PC' },
  { image: thirdPc, alt: 'Third PC' },
  { image: fourthPc, alt: 'Fourth PC' }
];

const itemsToRender = [1, 2, 3];

function CaseStudies() {
  return (
    <Grid container spacing={2} className='expParent'>
      <Grid item xs={12}>
        <Typography variant="h4" className='latestWork'>Latest Work</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" className='CaseStudy'>Our Case Studies</Typography>
      </Grid>
      {pictures.map((picture, index) => (
        <Grid key={index} item xs={12} sm={6} md={3}>
          <Card className='card' sx={{ cursor: 'pointer' }}>
            <CardMedia
              component="img"
              image={picture.image}
              alt={picture.alt}
              style={{ width: 400, height: 300 }}
            />
          </Card>
        </Grid>
      ))}
   {/* <Grid container spacing={2} direction="row">
      <Grid item xs={4} container  style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
        <marquee className='marquee'>
          Lorem Ipsum <img src={dot} alt='dot'/>
        </marquee>
      </Grid>
  </Grid> */}
  <Grid id="scroll-container">
  <Grid id="scroll-text"> Lorem Ipsum <img src={dot} alt='dot'/> </Grid>
</Grid>
</Grid>

  );
}

export default CaseStudies;
