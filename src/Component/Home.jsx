import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import './style.css';
import logo from '../Image/WikiLogo.png';

export default function FullWidthTextField() {
  return (
    <div className="container">
      <div className="head">

      <h1 className="heading text-center"><span className="big-letter">W</span>IKIPEDI<span className="big-letter">A</span></h1>
      <h3 className="sub-heading text-center">The Free Encyclopedia</h3>
      </div>
      <img src={logo} alt="logo" style={{width:100}}/>
    <Box
      sx={{
        width: 350,
        maxWidth: '100%',
      }}
      className="search-box" style={{marginTop : 8}}>
      <TextField fullWidth label="Search" id="fullWidth"/>
      <SearchIcon className='search'/>
    </Box>
      </div>
  );
}

