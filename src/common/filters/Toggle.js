import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export const Toggle = ({opts, value, onChange}) => {

    const handleChangeToggle = (e, newChoice) => {
      onChange(newChoice);
    };

    return (
        <ToggleButtonGroup
            color="primary"
            exclusive
            value={value}
            onChange={handleChangeToggle}
        >
          {opts.map(item => (
            <ToggleButton value={item.value}>{item.label}</ToggleButton>
          ))}
        </ToggleButtonGroup>
    );
}