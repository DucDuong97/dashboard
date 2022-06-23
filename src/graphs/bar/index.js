import React from 'react';
import ReactDOM from 'react-dom/client';

import { scaleBand, scaleLinear, max, format } from 'd3';
import { useData } from './useData';
import { AxisBottom } from './inc/AxisBottom';
import { AxisLeft } from './inc/AxisLeft';
import { Marks } from './inc/Marks';

import './styles.css';



const width = process.env.WIDTH;
const height = process.env.HEIGHT;
const margin = {
  top: process.env.TOP, 
  right: process.env.RIGHT, 
  bottom: process.env.BOTTOM, 
  left: process.env.LEFT 
};

const xAxisLabelOffset = 50;



const App = () => {
  const data = useData();

  if (!data) {
    return <pre>Loading...</pre>;
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const yValue = d => d.Country;
  const xValue = d => d.Population;

  const siFormat = format('.2s');
  const xAxisTickFormat = tickValue => siFormat(tickValue).replace('G', 'B');

  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
    .paddingInner(0.15);

  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, innerWidth]);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>

        <AxisLeft yScale={yScale} />
        
        <AxisBottom
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={xAxisTickFormat}
        />
        <text
          className="axis-label"
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset}
          textAnchor="middle"
        >
          Populationsss
        </text>

        <Marks
          data={data}
          xScale={xScale} yScale={yScale}
          xValue={xValue} yValue={yValue}
          tooltipFormat={xAxisTickFormat}
        />

      </g>
    </svg>
  );
};

ReactDOM.createRoot(document.getElementById('dashboard-root')).render(<App />);
