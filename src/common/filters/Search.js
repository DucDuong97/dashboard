import React, { useState } from 'react';
import TextField from '@mui/material/TextField';


export const Search = ({label}) => {
    const [textFieldChoice, setTextFieldChoice] = useState("");

    const handleChangeTextField = (e) => {
        setTextFieldChoice(e.target.value);
      };

    return (
        <TextField
          label={label}
          variant="standard"
          defaultValue={textFieldChoice}
          onChange={handleChangeTextField}
        />
    );
}