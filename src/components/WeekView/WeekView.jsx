import React from "react";
import Mission from "../Mission/Mission.jsx";

export default function WeekView({ missions }) {
  return (
    <div className="week">
      {Object.keys(missions).map((jour) => (
        <div className="day" key={jour}>
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
