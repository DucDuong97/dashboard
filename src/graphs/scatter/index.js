import React from 'react';
import ReactDOM from 'react-dom';

import { scaleLinear, scaleOrdinal, format, extent } from 'd3';
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
const yAxisLabelOffset = 45;

const App = () => {
  const data = useData();

  if (!data) {
    return <pre>Loading...</pre>;
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const xValue = (d) => d.petal_length;
  const xAxisLabel = 'Petal Length';

  const yValue = (d) => d.sepal_width;
  const yAxisLabel = 'Sepal Width';

  const colorValue = (d) => d.species;

  const siFormat = format('.2s');
  const xAxisTickFormat = (tickValue) => siFormat(tickValue).replace('G', 'B');

  const xScale = scaleLinear()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice();

  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([0, innerHeight]);

  const colorScale = scaleOrdinal()
    .domain(data.map(colorValue))
    .range(['#E6842A', '#137B80', '#8E6C8A']);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisBottom
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={xAxisTickFormat}
          tickOffset={5}
        />
        <text
          className="axis-label"
          textAnchor="middle"
          transform={`translate(${-yAxisLabelOffset},${
            innerHeight / 2
          }) rotate(-90)`}
        >
          {yAxisLabel}
        </text>
        <AxisLeft yScale={yScale} innerWidth={innerWidth} tickOffset={5} />
        <text
          className="axis-label"
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset}
          textAnchor="middle"
        >
          {xAxisLabel}
        </text>
        <Marks
          data={data}
          xScale={xScale}
          xValue={xValue}
          yScale={yScale}
          yValue={yValue}
          colorScale={colorScale}
          colorValue={colorValue}
          tooltipFormat={xAxisTickFormat}
          circleRadius={7}
        />
      </g>
    </svg>
  );
};

const rootElement = document.getElementById('dashboard-root');
ReactDOM.render(<App />, rootElement);