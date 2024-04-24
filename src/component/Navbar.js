import { Button } from '@mui/base';
import { Grid, Typography } from '@mui/material';
import React from 'react';
import "./style.css";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Navbar() {

  const navList = ["Home", "Services", "Portfolio", "Blog", "Contact"];

  return (
    <>
      <nav className='navbar'>
        <Grid container >
          <Grid item xs={5}>
            <Typography  style={{ color: '#fff', fontFamily:'Californian FB', fontSize: '40px', fontWeight: 700  }}>LEADER</Typography>
          </Grid>
          <Grid item xs={7} className='navbarList'>
          <Grid item xs={8}>
          <Grid container spacing={4} justifyContent="flex-end">
            {navList.map((item, index) => (
              <Grid item key={index}>
                {item === "Services" ? (
                  <Typography className='navListItem' fontFamily={'Californian FB'} style={{ display: 'inline-flex', alignItems: 'center' }}>
                   <a href='#portfolio' className='navListItem'> {item}</a> <KeyboardArrowDownIcon style={{ color: '#fff' }} />
                  </Typography>
                ) : (
                  <Typography className='navListItem' fontFamily={'Californian FB'}>{item}</Typography>
                )}
              </Grid>
            ))}
          </Grid>
        </Grid>
          <Grid item xs={4} className='btn'>
            <Button className='get_qoute'>Get A Quote <ArrowOutwardIcon className='ArrowOutwardIcon' /></Button>
          </Grid>
          </Grid>
         
        </Grid>
      </nav>
    </>
  );
}

export default Navbar;
