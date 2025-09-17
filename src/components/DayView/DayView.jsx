import React from "react";
import Mission from "../Mission/Mission.jsx";

export default function DayView({ missions, selectedDay, setSelectedDay }) {
  return (
    <div className="day-view">
      <select
        value={selectedDay}
        onChange={(e) => setSelectedDay(e.target.value)}
      >
        {Object.keys(missions).map((jour) => (
          <option key={jour} value={jour}>
            {jour}
          </option>
        ))}
      </select>
      <div className="day-body">
        {missions[selectedDay].map((m, idx) => (
          <Mission key={idx} m={m} />
        ))}
      </div>
    </div>
  );
}
