import React, { useCallback } from "react";
import Moment from "moment";

import MonthEvents from "./MonthEvents";

// ---- month days
const MonthDays = (props) => {
  // first day
  const first = Moment(props.date).date(1),
    // week format
    weekF = Moment().format("YYYYMM");

  // get event data
  const handleClick = useCallback((event) => {
    alert(event.date + ": " + event.content);
  }, []);

  // init arr
  let arr = [];

  // create 7 x 5 boxes
  for (let i = 0; i < 35; i++) {
    // day
    let day = Moment()
        .date(1)
        .subtract(first.weekday() - i, "days"),
      // day format
      dayF = Moment(day.format("YYYYMM")),
      // add class by type
      cls = dayF.isBefore(weekF)
        ? "days-before"
        : dayF.isAfter(weekF)
        ? "days-after"
        : props.date.clone().isSame(day, "day") && "today";

    // push
    arr.push(
      <li key={i.toString()} className={cls || ""}>
        <div className="date">{day.date()}</div>
        <div className="info">{day.format("dddd")}</div>
        <MonthEvents
          data={props.data}
          day={day.clone().format("DD")}
          month={props.date.clone().format("MM")}
          year={props.date.clone().format("YYYY")}
          fn={handleClick}
        />
      </li>
    );
  }
  return <ul className="days">{arr}</ul>;
};

export default MonthDays;
