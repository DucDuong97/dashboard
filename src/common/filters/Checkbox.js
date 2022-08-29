import React, { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export const Checkboxx = ({label}) => {
  const [checkboxChoice, setCheckboxChoice] = useState(false);


  const handleCheckbox = (e) => {
    setCheckboxChoice(!checkboxChoice);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox checked={checkboxChoice} onChange={handleCheckbox}/>
      } 
      label={label}
    />
  );
}