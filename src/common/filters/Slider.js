import React, { useState } from 'react';
import Slider from '@mui/material/Slider';

export const Sliderr = () => {
  const [sliderChoice, setSliderChoice] = useState(25);("default_value");

  const handleChangeSlider = (e) => {
    setSliderChoice(e.target.value);
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
  );
}