import React, { useEffect } from 'react';
import * as d3 from 'd3';

function PieChart({ data, outerRadius, innerRadius }) {
  const margin = {
    top: 50, right: 50, bottom: 50, left: 50,
  };  
  const width = 2 * outerRadius + margin.left + margin.right;
  const height = 2 * outerRadius + margin.top + margin.bottom;
  useEffect(() => {
    drawChart();
  }, [data]);

  function drawChart() {

		const sectionColors = [
  		'red', 'blue', 'yellow',
		  ];

    const colorScale = d3     
			.scaleOrdinal()   
			.domain(data.map(d=>d.gender))
			.range(sectionColors);

		const arcGenerator = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);
  }    

  return <div id="pie-container" />;
}

export default PieChart;