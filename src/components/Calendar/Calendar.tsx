import React, { useState, ChangeEvent, useEffect } from "react";
import { getCurrentWeek } from "../../utils/dateUtils";
import MealInputCell from "../MealInputCell/MealInputCell";
import { mealTypes } from "../../types/types";
import "./styles.scss";

const Calendar: React.FC = () => {
  const currentWeekDays = getCurrentWeek();

  const [inputs, setInputs] = useState<{ [key: string]: string }>(() => {
    const savedInputs = localStorage.getItem("calendarInputs");
    if (savedInputs) {
      return JSON.parse(savedInputs);
    }
    return Object.fromEntries(
      currentWeekDays.flatMap((date) =>
        mealTypes.map((meal) => [`${date.toDateString()}-${meal}`, ""])
      )
    );
  });

  useEffect(() => {
    localStorage.setItem("calendarInputs", JSON.stringify(inputs));
  }, [inputs]);

  const handleInputChange = (
    date: Date,
    mealType: string,
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    const key = `${date.toDateString()}-${mealType}`;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [key]: event.target.value,
    }));
  };

  return (
    <div className="container">
      <table className="calendar-table">
        <thead>
          <tr>
            {currentWeekDays.map((date) => (
              <th key={date.toDateString()} className="table-header-cell">
                {date.toLocaleDateString(undefined, {
                  weekday: 'long',
                  month: 'short',
                  day: 'numeric',
                })}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {mealTypes.map((mealType) => (
            <tr key={mealType}>
              {currentWeekDays.map((date) => (
                <td
                  key={`${date.toDateString()}-${mealType}`}
                  className="table-cell"
                >
                  <MealInputCell
                    date={date}
                    mealType={mealType}
                    value={inputs[`${date.toDateString()}-${mealType}`]}
                    onChange={handleInputChange}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
