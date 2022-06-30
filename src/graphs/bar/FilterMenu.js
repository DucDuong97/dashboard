import React, { useState } from 'react';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

import { format } from 'date-fns';
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const FilterMenu = () => {
  // TODO: consider whether we have to do this, if no state was passed to this component, initialize these state-variables, otherwise load the passing state
  const [toggleChoice, setToggleChoice] = useState("choice1");
  const [checkboxChoice, setCheckboxChoice] = useState(true);
  const [textFieldChoice, setTextFieldChoice] = useState("default_value");
  const [sliderChoice, setSliderChoice] = useState(25);
  const [selectChoice, setSelectChoice] = useState("default_value");

  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection"
    }
  ]);

  const navigate = useNavigate();
 
  const handleChangeToggle = (e, newChoice) => {
    setToggleChoice(newChoice);
  };

  const handleCheckbox = (e) => {
    setCheckboxChoice(!checkboxChoice);
  };

  const handleChangeTextField = (e) => {
    setTextFieldChoice(e.target.value);
  };

  const handleChangeSlider = (e) => {
    setSliderChoice(e.target.value);
  };

  const handleChangeSelect = (e) => {
    setSelectChoice(e.target.value);
  };

  const handleApply = () => {
    navigate("/", { state: { toggleChoice, checkboxChoice, textFieldChoice, sliderChoice, selectChoice, date} })
  };

  const marks = [
    {
      value: 0,
      label: "0"
    },
    {
      value: 25,
      label: "25"
    },
    {
      value: 50,
      label: "50"
    },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <ToggleButtonGroup
        color="primary"
        value={toggleChoice}
        exclusive
        onChange={handleChangeToggle}
      >
          <ToggleButton value="choice1">Toggle 1</ToggleButton>
          <ToggleButton value="choice2">Toggle 2</ToggleButton>
      </ToggleButtonGroup>

      <FormControlLabel control={<Checkbox checked={checkboxChoice} onChange={handleCheckbox}/>} label="Checkbox" />

      <TextField
        label="text_field"
        variant="standard"
        defaultValue="default_value"
        onChange={handleChangeTextField}
      />

      <Slider
        sx={{
          width: 400
        }}
        min={0}
        max={50}
        value={sliderChoice}
        step={5}
        marks={marks}
        onChange={handleChangeSlider}
      />

      <Select
        label="select-label"
        value={selectChoice}
        onChange={handleChangeSelect}
      >
        <MenuItem value="default_value">Default Value</MenuItem>
        <MenuItem value="other_value">Other Value</MenuItem>
        <MenuItem value="another_value">Another Value</MenuItem>
      </Select>

      <div>
        <span onClick={() => {setOpenDate(!openDate)}}>
          {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
        </span>
        <div>
            {openDate && <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
              minDat={new Date()}
            />}
          </div>
      </div>

      <Button variant='contained' onClick={handleApply}>Apply</Button>

      <div>
        <h6>Debug</h6>
        <ul>
          <li>Toggle: {toggleChoice}</li>
          <li>Checkbox: {checkboxChoice.toString()}</li>
          <li>Text Field: {textFieldChoice}</li>
          <li>Slider: {sliderChoice}</li>
          <li>Select: {selectChoice}</li>
          <li>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</li>
        </ul>
      </div>

    </Box>
  )
}

export default FilterMenu
