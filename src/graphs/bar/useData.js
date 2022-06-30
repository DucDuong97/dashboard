import React, { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv';

export const useData = (columns) => {
  const [data, setData] = useState(null);

  // TODO: Fetching authorization for the file using the userID and fileID, return as list
  const authorizedColumns = columns;

  // Compare the required columns with the authorization
  const columnsAuthorized = (requiredColumns, authorizedColumns) => {
    console.log("current required columns ", requiredColumns)

    for (var column of requiredColumns) {
      if (!authorizedColumns.includes(column)) {
        console.log("Unauthorized");
        return false;
      }
    }
    console.log("Authorized");
    return true;
  };

  useEffect(() => {
    if (columnsAuthorized(columns, authorizedColumns)) {
      const row = (d) => {
        //d.Population = +d['2020'];
        Object.keys(d).forEach((key) => {
          if (!columns.includes(key)) {
            delete d[key];
          }
        })
        return d;
      };
      csv(csvUrl, row).then((data) => {
        setData(data.slice(0, 10));
      });
    }
  }, []);
  
  return data;
};