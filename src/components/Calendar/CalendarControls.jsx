import React from "react";

export default function CalendarControls({ calendarView, setCalendarView }) {
  return (
    <div className="calendar-controls">
      <button
        className={calendarView === "jour" ? "active" : ""}
        onClick={() => setCalendarView("jour")}
      >
        Jour
      </button>
      <button
        className={calendarView === "semaine" ? "active" : ""}
        onClick={() => setCalendarView("semaine")}
      >
        Semaine
      </button>
      <button
        className={calendarView === "mois" ? "active" : ""}
        onClick={() => setCalendarView("mois")}
      >
        Mois
      </button>
    </div>
  );
}
