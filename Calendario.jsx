import React, { useState } from "react";
import Calendar from "react-calendar";

const Calendario = ({ onSelectDate }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <Calendar
    onSelectDate={onSelectDate}

    />
  );
};

export default Calendario;