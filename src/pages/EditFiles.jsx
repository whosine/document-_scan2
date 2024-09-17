import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';
import Sidemenu from '../components/Sidemenu';
import { FormControl, InputLabel, MenuItem, Select, Card, CardContent, Typography, IconButton } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image'; 
import EditIcon from '@mui/icons-material/Edit'; 
import AddIcon from '@mui/icons-material/Add'; 
import DeleteIcon from '@mui/icons-material/Delete'; 
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; 
import './EdiFiles.css'; // Import the external CSS
import { useNavigate } from 'react-router-dom';


export default function EditFiles({ collections }) {
  const [selectedCollection, setSelectedCollection] = useState('');
  const [selectedFile, setSelectedFile] = useState('');

  const handleCollectionChange = (event) => {
    setSelectedCollection(event.target.value);
    setSelectedFile(''); 
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.value);
  };

  const selectedCollectionObj = collections.find((collection) => collection.id === selectedCollection);
  const selectedFileObj = selectedCollectionObj?.files.find((file) => file.id === selectedFile);
  const navigate =useNavigate()

  return (
    <div className="edit-files-container">
      <Navbar />

      <Box className="edit-files-content">
        <div className="bottom-bar">
          <FormControl>
            <InputLabel id="select-collection-label">Select Collection</InputLabel>
            <Select
              labelId="select-collection-label"
              value={selectedCollection}
              onChange={handleCollectionChange}
              className="dropdown"
            >
              {collections.map((collection) => (
                <MenuItem key={collection.id} value={collection.id}>
                  {collection.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel id="select-file-label" disabled={!selectedCollection}>
              Select File
            </InputLabel>
            <Select
              labelId="select-file-label"
              value={selectedFile}
              onChange={handleFileChange}
              className="dropdown"
              disabled={!selectedCollection}
            >
              {selectedCollection &&
                collections
                  .find((collection) => collection.id === selectedCollection)
                  .files.map((file) => (
                    <MenuItem key={file.id} value={file.id}>
                      {file.fileName}
                    </MenuItem>
                  ))}
            </Select>
          </FormControl>
        </div>

        <Box className="main-content">
          {!selectedFile && <Sidemenu />}

          {selectedFile && selectedFileObj && (
            <Box className="left-card">
              <Card className="custom-card">
                <CardContent className="card-header">
                  <ArrowBackIcon className="back-icon"  onClick ={()=>{navigate('/collections')}}/>
                  <Typography variant="h6">{selectedFileObj.fileName}</Typography>
                </CardContent>

                <CardContent>
                  {selectedFileObj.sections.map((section, index) => (
                    <div key={index} className="section">
                      <Box className="section-header">
                        <Typography variant="subtitle1" className="section-title">
                          {section.section_name}
                        </Typography>
                        <IconButton className="icon-button">
                          <EditIcon />
                        </IconButton>
                        <IconButton className="icon-button">
                          <AddIcon />
                        </IconButton>
                        <IconButton className="icon-button">
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                      {section.data.map((item, idx) => (
                        <Typography key={idx} className="section-data">
                          <strong>{item.label}:</strong> {item.value}
                        </Typography>
                      ))}
                      <hr />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </Box>
          )}

          {selectedFile && (
            <Box className="right-box">
              <ImageIcon className="image-icon" />
            </Box>
          )}
        </Box>
      </Box>
    </div>
  );
}
