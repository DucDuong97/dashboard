import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Box from '@mui/material/Box';

import BarChart from './BarChart';
import FilterMenu from './FilterMenu';

import './styles.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            <BarChart />
            <FilterMenu />
          </Box>
        }/>
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('dashboard-root')).render(<App />);
