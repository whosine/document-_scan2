import React from 'react'
import Sidemenu from '../components/Sidemenu'
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';


export default function Settings() {
  return (
    <div>
    <Navbar />
         <Box sx={{ display: 'flex' }}>
        <Sidemenu  />
        <h1>Settings</h1>
      </Box>
      
    </div>
  )
}
