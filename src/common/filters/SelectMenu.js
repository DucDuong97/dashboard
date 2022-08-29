import React, { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


export const SelectMenu = ({opts, value, onChange}) => {

  const handleChangeSelect = (e) => {
    onChange(e.target.value);
  };

  return (
      
    <Select
      label="select-label"
      value={value}
      onChange={handleChangeSelect}
    >
      {opts.map(item => (
        <MenuItem value={item.value}>{item.label}</MenuItem>
      ))}
    </Select>
  );
}