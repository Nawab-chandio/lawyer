import { Grid, Typography } from '@mui/material'
import React from 'react'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import "./teamStyles.css"
import HeroPicture from "./../Assets/profile.png"

function OurTeam() {
  return (
    <Grid container className='teamStyle'>
      <Typography className='ourTeam'> <HorizontalRuleIcon /> Meet Our Team <HorizontalRuleIcon /></Typography>
      <Typography className='ourTeamHeroText'> lorem ipsum dolor sit amet </Typography>
      <Grid item xs={8} className='teamPictures'>
        <img src={HeroPicture} alt='Hero Profile'/>
        <img src={HeroPicture} alt='Hero Profile'/>
      </Grid>
      <Grid item xs={8} className='teamPictures'>
      <img src={HeroPicture} alt='Hero Profile'/>
      <img src={HeroPicture} alt='Hero Profile'/>

      </Grid>
    </Grid>
  )
}

export default OurTeam