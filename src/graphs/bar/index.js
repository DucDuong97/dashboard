import React, { useState, createContext, useMemo } from "react";
import ReactDOM from "react-dom/client";

import Box from '@mui/material/Box';

import BarChart from './BarChart';
import FilterMenu from './Filter';

import './styles.css';

const StateContext = createContext({
  state: {},
  setState: () => {},
});

const App = () => {
  const [state, setState] = useState({
    select: '',
    toggle: null,
  });
  const value = useMemo(
    () => ({ state, setState }), 
    [state]
  );

  return (
    <StateContext.Provider value={value}>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      <BarChart />
      <FilterMenu />
    </Box>
    </StateContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('dashboard-root')).render(<App />);

export default StateContext;