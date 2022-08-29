import React, { useContext } from 'react';

import Box from '@mui/material/Box';

import { SelectMenu } from '../../common/filters/SelectMenu';
import { Toggle } from '../../common/filters/Toggle';
// import { Checkboxx } from './filters/Checkbox';
// import { Search } from './filters/Search';
// import { Sliderr } from './filters/Slider';
// import { Datee } from './filters/Date';

import StateContext from '.';

const FilterMenu = () => {

  const { state, setState } = useContext(StateContext);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <SelectMenu
        opts={[
          {value:'', label:'Full'},
          {value:'top3', label:'Top 3'},
        ]}
        value={state.select} 
        onChange={(value) => setState({
          ...state,
          select: value
        })}
      />
      {/* <Toggle 
        opts={[
          {value:'toggle1', label:'Toggle 1'},
          {value:'toggle2', label:'Toggle 2'},
          {value:'toggle3', label:'Toggle 3'},
        ]}
        value={state} 
        onChange={(value) => setState({
          ...state,
          select: value
        })}
      /> */}
      {/* <Checkboxx label='this is a checkbox'/>
      <Search label='this is a searchbox'/>
      <Sliderr/>
      <Datee/> */}

    </Box>
  )
}

export default FilterMenu;