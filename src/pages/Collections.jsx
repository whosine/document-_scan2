import React from 'react';
import Sidemenu from '../components/Sidemenu';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Navbar from '../components/Navbar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';
import CreateIcon from '@mui/icons-material/Create';
import UploadIcon from '@mui/icons-material/Upload';
import { useNavigate } from 'react-router-dom';

const Collections = ({ collections, onDeleteCollection }) => {
  const navigate = useNavigate();

  const handleCollectionSelect = (collectionId) => {
    // Navigate to the 'All Files' page with the collectionId or other necessary parameters
    navigate('/allfiles', { state: { collectionId } });
  };

  return (
    <>
      <Navbar />
      <Box sx={{ display: 'flex', flexDirection: 'row', height: '50vh', pt: 8, pl: 2 }}>
        <Box sx={{ minWidth: 240 }}>
          <Sidemenu />
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, p: 2, overflowY: 'auto', width: '100%' }}>
          {collections.map((collection) => (
            <Card
              key={collection.id}
              sx={{ minWidth: 275, maxWidth: 300, position: 'relative' }}
              onClick={() => handleCollectionSelect(collection.id)}
            >
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h5" component="div">
                    {collection.name}
                  </Typography>
                  <IconButton
                    aria-label="delete"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevents triggering the onClick for the card
                      onDeleteCollection(collection.id);
                    }}
                    sx={{ position: 'absolute', top: 8, right: 8 }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
                <Divider sx={{ my: 1 }} />
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Number of Files: {collection.files.length}
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1, gap: 3 }}>
                <Button
                  variant="outlined"
                  startIcon={<CreateIcon />}
                  sx={{ width: '48%', color: 'black', fontSize: '0.875rem' }}
                  onClick={() => console.log('Edit fields clicked')}
                >
                  Editfields
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<UploadIcon />}
                  sx={{ width: '48%', color: 'black', fontSize: '0.875rem' }}
                  onClick={() => console.log('Upload clicked')}
                >
                  Upload
                </Button>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Collections;


