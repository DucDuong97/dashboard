import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';

import { scaleLinear, scaleSequential, arc, pie, interpolateCool, scaleOrdinal } from 'd3';
import { useData } from './useData';

import './styles.css';

const width = process.env.WIDTH;
const height = process.env.HEIGHT;
const centerX = width / 2;
const centerY = height / 2;
const margin = {
  top: process.env.TOP, 
  right: process.env.RIGHT, 
  bottom: process.env.BOTTOM, 
  left: process.env.LEFT 
};

const outerRadius = 250;
const innerRadius = 0;

const App = () => {
  const data = useData();

  if (!data) {
    return <pre>Loading...</pre>;
  }


  const width = 2 * outerRadius + margin.left + margin.right;
  const height = 2 * outerRadius + margin.top + margin.bottom;

  const colorScale = 
    scaleOrdinal()
    .domain(data)
    .range(['#555','#888','#aaa']);

  const arcGenerator = 
    arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);

  const pieGenerator = 
    pie()
    .padAngle(0)
    .value((d) => d.gender);
  
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX},${centerY})`}>
        {pieGenerator(data).map(d => (
          <path fill={colorScale(d.gender)} d={arcGenerator(d)}/>
        ))}
      </g>
    </svg>
  );
};

const rootElement = document.getElementById('dashboard-root');
ReactDOM.render(<App />, rootElement);