import React, { useState } from 'react';

import { format } from 'date-fns';
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

export const Datee = () => {

  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([{
      startDate: new Date(),
      endDate: new Date(),
      key: "selection"
    }
  ]);

  return (
    <>
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
    </>
  );
}