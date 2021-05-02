import React, { useState, useCallback, useEffect } from "react";
import Moment from "moment";

// ---- Components
import Calendar from "./components/Calendar";
import Header from "./components/Header";
import Column from "./components/Column";
import Button from "./components/Button";
import H1 from "./components/H1";
import WeekDays from "./components/WeekDays";
import MonthDays from "./components/MonthDays";
import ErrorBoundary from "./components/ErrorBoundary";

// ---- Scss styles
import "./styles.scss";

// ---- Demo events
import jsonDataDemo from "./storage/demo";

// ---- spanish calendar
import "moment/locale/es";
Moment.locale("es");

// ---- app
function App() {
  // states
  const [data, setdata] = useState();
  const [month, setMonth] = useState(Moment());

  useEffect(() => setdata(JSON.parse(jsonDataDemo)), []);

  // next prev and today buttons
  const next = useCallback(() => {
    setMonth(month.clone().add(1, "month"));
  }, [month]);

  const prev = useCallback(() => {
    setMonth(month.clone().subtract(1, "month"));
  }, [month]);

  const today = useCallback(() => {
    setMonth(Moment());
  }, []);

  // render
  return (
    <ErrorBoundary>
      <Calendar>
        <Header>
          <Column align="left">
            <Button onClick={prev} icon="fa fa-arrow-left" text="Anterior" />
            <Button onClick={today} icon="fa fa-calendar" text="Hoy" />
            <Button onClick={next} icon="fa fa-arrow-right" text="Siguiente" />
          </Column>
          <Column align="center">
            <H1>{month.format("MMMM")}</H1>
          </Column>
          <Column align="right">
            {Moment().format("dddd")} {Moment().format("LL")}
          </Column>
        </Header>
        <WeekDays />
        <MonthDays date={month} data={data || []} />
      </Calendar>
    </ErrorBoundary>
  );
}

export default App;
