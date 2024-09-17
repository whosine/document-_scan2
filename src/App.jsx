// import React from 'react'
// // import Sidemenu from "./components/Sidemenu"
// import {BrowserRouter,Routes,Route} from "react-router-dom"
// import Collections from "./pages/Collections"
// import Home from './pages/Home'
// import Settings from './pages/Settings'
// import EditFiles from './pages/EditFiles'
// import AllFiles from './pages/AllFiles'

// const App = () => {


//   return (
//     <div>
//       <BrowserRouter>
//       <Routes>
//         <Route path='/' exact element = {<Home/>}/>
//         <Route path='/collections' exact element = {<Collections />}/>
//         <Route path='/allfiles' exact element = {<AllFiles />}/>
//         <Route path='/editfiles' exact element = {<EditFiles />}/>
//         <Route path='/settings' exact element = {<Settings />}/>
//       </Routes>
      
//       </BrowserRouter>
      
    

//     </div>
//   )
// }

// export default App





import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Collections from './pages/Collections';
import Home from './pages/Home';
import Settings from './pages/Settings';
import EditFiles from './pages/EditFiles';
import AllFiles from './pages/AllFiles';
import './App.css';

const App = () => {
  const [selectedCollection, setSelectedCollection] = useState(null);

  const collections = [
    {
      id: 'collection1',
      name: 'Collection 1',
      files: [
        { id: 'file1',
          fileName: 'Filename 04.pdf', // Based on the image provided
          approved: true,
          sections: [
            {
              section_name: 'Basic Information',
              data: [
                { label: 'Invoice Number', value: '567888989000' },
                { label: 'Issue Date', value: '12/03/2024' },
                { label: 'Order ID', value: 'ORD 5464' }
              ]
            },
            {
              section_name: 'Seller Details',
              data: [
                { label: 'Name', value: 'Douglas' },
                { label: 'Address', value: '23/345, HSR Layout, Bangalore' },
                { label: 'GST Number', value: 'GST3438000043433' }
              ]
            },
            {
              section_name: 'GST & Amount',
              data: [
                { label: 'Sub Total', value: '455000' },
                { label: 'Tax Rate', value: '5%' },
                { label: 'Tax Total', value: '24000' }
              ]
            }
          ]
        },
        {
          id: 'file2',
          fileName: 'file2.docx',
          approved: false,
          sections: [
            {
              section_name: 'Summary',
              data: [
                { label: 'Title', value: 'Chapter 1' },
                { label: 'Summary', value: 'This chapter covers the basics.' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'collection2',
      name: 'Collection 2',
      files: [
        {
          id: 'file3',
          fileName: 'file3.pdf',
          approved: true,
          sections: [
            {
              section_name: 'Research Details',
              data: [
                { label: 'Title', value: 'Research Paper' },
                { label: 'Date', value: '2024-09-13' },
              ],
            },
          ],
        },
      ],
    },
    // New collection (collection3) added below
    {
      id: 'collection3',
      name: 'Collection 3',
      files: [
        {
          id: 'file4',
          fileName: 'file4.txt',
          approved: true,
          sections: [
            {
              section_name: 'Introduction',
              data: [
                { label: 'Title', value: 'Getting Started' },
                { label: 'Author', value: 'Jane Smith' },
              ],
            },
            {
              section_name: 'Content',
              data: [{ label: 'Word Count', value: '1500' }],
            },
          ],
        },
        {
          id: 'file5',
          fileName: 'file5.docx',
          approved: false,
          sections: [
            {
              section_name: 'Chapter Overview',
              data: [
                { label: 'Title', value: 'Chapter 3' },
                { label: 'Description', value: 'This chapter explains the core concepts.' },
              ],
            },
          ],
        },
      ],
    },
  ];
  

  // Handle collection selection
  const handleCollectionSelect = (collectionId) => {
    setSelectedCollection(collectionId);
  };

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route
            path='/collections'
            exact
            element={
              <Collections
                collections={collections}
                onCollectionSelect={handleCollectionSelect}
              />
            }
          />
         <Route
            path='/allfiles'
            exact
            element={<AllFiles collections={collections} onFileSelect={handleCollectionSelect} />}
          />
          <Route path='/editfiles' exact element={<EditFiles collections={collections} />} />
          <Route path='/settings' exact element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
