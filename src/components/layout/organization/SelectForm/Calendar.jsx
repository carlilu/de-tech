import React from "react";
import { useState } from "react";
import { DatePicker} from "react-datepicker";

const Calendar = () => {
    
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      dateFormat="yyyy/MM/dd"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
  );
};
  
  export default Calendar;