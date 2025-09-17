import React from "react";
import Mission from "../Mission/Mission.jsx";

export default function MonthView({ missions }) {
  return (
    <div className="month-view">
      {Object.keys(missions).map((jour) => (
        <div className="month-day" key={jour}>
          <div className="day-header">{jour}</div>
          <div className="day-body">
            {missions[jour].map((m, idx) => (
              <Mission key={idx} m={m} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
