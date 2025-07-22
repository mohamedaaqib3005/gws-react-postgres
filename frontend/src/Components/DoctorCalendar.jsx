
import { Calendar } from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "../styles/doctor-calendar.css";
import { useEffect } from "react";

function DoctorCalendar({ availableDates, selectedDate, onChange }) {
  const formatDate = (date) => {
    const year = date.getFullYear(); 
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`; //'yyyy-mm-dd'
  };


  const parseDate = (dateStr) => {
    const [year, month, day] = dateStr.split("-").map(Number);//["yyyy", "mm", "dd"] format
    return new Date(year, month - 1, day);
  };


  const isAvailable = (date) => {
    const formatted = formatDate(date);
    return availableDates.includes(formatted);
  };

  const minAvailableDate = availableDates.length
    ? parseDate(availableDates.sort()[0])
    : new Date();

  useEffect(() => {
    console.log("Available Dates:", availableDates);
    console.log("Selected Date:", selectedDate);
    console.log("Formatted Selected Date:", formatDate(selectedDate));
    console.log("Is Selected Date Available:", isAvailable(selectedDate));
  }, [availableDates, selectedDate]);


  return (
    <div className="doctor-calendar-container">
      <Calendar
        value={selectedDate}
        onChange={(date) => {
          console.log("User selected date:", formatDate(date));
          onChange(date);
        }}
        tileDisabled={({ date, view }) =>
          view === "month" && !isAvailable(date)
        }
        tileClassName={({ date, view }) => {
          if (view !== "month") return null;

          const formatted = formatDate(date);
          const selectedFormatted = formatDate(selectedDate);

          if (formatted === selectedFormatted) return "highlight-selected";
          if (availableDates.includes(formatted)) return "highlight-available";

          return null;
        }}
        activeStartDate={minAvailableDate}
      />
    </div>
  );
}

export default DoctorCalendar;







