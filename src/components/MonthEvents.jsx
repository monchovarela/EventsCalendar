// ---- month events
const MonthEvents = (props) =>
  props.data
    .filter((events) => {
      let arr = events.date.split("-");
      return arr[0] === props.year &&
        arr[1] === props.month &&
        arr[2] === props.day
        ? events
        : false;
    })
    .map((events, i) => {
      return (
        <div
          key={i.toString()}
          className={`ev ${
            events.type ? "label_" + events.type.toString() : ""
          }`}
          onClick={() => props.fn(events)}
        >
          <div className="ev-desc">
            <b>{events.content}</b>
            <br />
            <small style={{ display: "block", textAlign: "right" }}>
              {events.hour}
            </small>
          </div>
        </div>
      );
    });

export default MonthEvents;
