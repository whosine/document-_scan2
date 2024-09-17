// Home.js
import React from 'react';
import Sidemenu from '../components/Sidemenu';
import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';

export default function Home() {
  return (
    <>
      <Navbar />
      <Box sx={{ display: 'flex', pt: 8 }}> {/* Add pt to avoid overlap with Navbar */}
        <Sidemenu />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Home page</h1>
        </Box>
      </Box>
    </>
  );
}
