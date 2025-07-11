import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function MyDatePicker({ selectedDate, setSelectedDate }) {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      dateFormat="yyyy-MM-dd"
    />
  );
}

export default MyDatePicker;
