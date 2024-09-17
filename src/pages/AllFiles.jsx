import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, List, ListItem, ListItemText, Divider, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // Import ExpandMoreIcon

import Sidemenu from '../components/Sidemenu';
import Navbar from '../components/Navbar';

const AllFiles = ({ collections = [], onFileSelect }) => {
  return (
    <div>
      <Navbar />
      <Box sx={{ display: 'flex', width: '100%', pt: 8, pl: 2 }}>
        <Sidemenu />
        <Box sx={{ flexGrow: 1, padding: '20px' }}>
          {/* Top Accordion for "All Files" */}
          <Accordion
            sx={{
              marginBottom: '5px', // Reduced margin between collections
              borderRadius: '4px',
              padding: '0', // Removed padding for compactness
              boxShadow: 'none'
            }}
            defaultExpanded // Always show this accordion expanded
          >
            <AccordionSummary
              aria-controls="panel-all-files-content"
              id="panel-all-files-header"
              sx={{
                padding: '1px 2px',
                minHeight: '12px', // Decreased height
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between', // Ensures that the icon is on the right end
              }}
              expandIcon={<ExpandMoreIcon />} // Add the expandIcon property
            >
              <Typography variant="h6" noWrap sx={{ fontSize: '1rem' }}>
                All Files
              </Typography>
            </AccordionSummary>
            <Divider sx={{ height: '0.5px', backgroundColor: 'black', mb: 0.6 }} /> {/* Thinner divider */}
            <AccordionDetails
              sx={{
                padding: '0', // Removed padding for compactness
              }}
            >
              {collections.length > 0 ? (
                collections.map((collection) => (
                  <Accordion
                    key={collection.id}
                    sx={{
                      marginBottom: '1px', // Reduced margin between individual collections
                      borderRadius: '1px',
                      padding: '0', // Removed padding for compactness
                      boxShadow: 'none'
                    }}
                  >
                    <AccordionSummary
                      aria-controls={`panel-${collection.id}-content`}
                      id={`panel-${collection.id}-header`}
                      sx={{
                        padding: '2px 8px',
                        minHeight: '32px', // Decreased height
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between', // Ensures that the icon is on the right end
                      }}
                      expandIcon={<ExpandMoreIcon />} // Add the expandIcon property
                    >
                      <Typography variant="h6" noWrap sx={{ fontSize: '1rem' }}>
                        {collection.name}
                      </Typography>
                    </AccordionSummary>
                    <Divider sx={{ height: '1px', backgroundColor: 'black' }} /> {/* Thinner divider */}
                    <AccordionDetails
                      sx={{
                        padding: '0', // Removed padding for compactness
                      }}
                    >
                      <List>
                        {collection.files.map((file, index) => (
                          <React.Fragment key={file.id}>
                            <ListItem
                              button
                              onClick={() => onFileSelect && onFileSelect(file.id)}
                              sx={{ padding: '2px 0', minHeight: '15px' }} // Reduced padding for list items and set height
                            >
                              <ListItemText
                                primary={`${file.fileName} ${
                                  file.approved ? '(Approved)' : '(Not Approved)'
                                }`}
                                sx={{ fontSize: '0.875rem' }} // Smaller font size to fit compact layout
                              />
                            </ListItem>
                            {index < collection.files.length - 1 && <Divider sx={{ height: '0.5px', backgroundColor: 'grey' }} />}
                          </React.Fragment>
                        ))}
                      </List>
                    </AccordionDetails>
                  </Accordion>
                ))
              ) : (
                <Typography variant="body1">No collections available</Typography>
              )}
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </div>
  );
};

export default AllFiles;
