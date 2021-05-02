import Moment from "moment";

// ---- week days
const WeekDays = (props) => {
  let m = Moment().weekday();
  // map week names
  return (
    <ul className="weekdays">
      {Moment.weekdays(true).map((item, i) => (
        <li key={i.toString()} className={m === i ? "today" : "notToday"}>
          {item}
        </li>
      ))}
    </ul>
  );
};
export default WeekDays;
