import React, { useState, useEffect } from 'react';
import { csv, nest, sum } from 'd3';

const csvUrl =
  '../../../data/gender.csv';

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl).then(setData);
  }, []);
  if (data) {
    const grouped = nest()
    .key(d => d.gender)
    .rollup(vs => vs.length)
    .entries(data)
    setData(grouped);
  }
  console.log(data);
  return data;
};