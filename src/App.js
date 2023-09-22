import React from "react";
import { useState, useEffect } from "react";
import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import CityEventsChart from "./components/CityEventsChart";
import NumberOfEvents from "./components/NumberOfEvents";
import EventGenresChart from "./components/EventGenresChart";
import { extractLocations, getEvents } from "./api";
import { InfoAlert, ErrorAlert, WarningAlert } from "./components/Alert";

import logo from "./meet-logo.png";
import "./App.css";

const App = () => {
  const [events, setEvents] = useState([]);
  // eslint-disable-next-line
  const [currentNOE, setCurrentNOE] = useState([32]);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");

  useEffect(() => {
    if (navigator.onLine) {
      setWarningAlert("");
    } else {
      const warningText = "There is no internet connection";
      setWarningAlert(warningText);
    }
    fetchData();
    // eslint-disable-next-line
  }, [currentCity, currentNOE]);

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents =
      currentCity === "See all cities"
        ? allEvents
        : allEvents.filter((event) => event.location === currentCity);
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  };

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} alt="app logo" className="logo" />
        <div className="alerts-container">
          {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
          {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
          {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
        </div>
      </div>
      <div className="App-body">
        <div> Choose your nearest city</div>
        <CitySearch
          allLocations={allLocations}
          setCurrentCity={setCurrentCity}
          setInfoAlert={setInfoAlert}
        />
        <NumberOfEvents
          setCurrentNOE={setCurrentNOE}
          setErrorAlert={setErrorAlert}
        />
        <h2>Upcoming Events </h2>
        <div className="charts-container">
          <div>
            <EventGenresChart events={events} />
            </div>
            <div>
            <CityEventsChart allLocations={allLocations} events={events} />
            </div>
        </div>
        <EventList events={events} />
      </div>
      <div className="App-footer">2023</div>
    </div>
  );
};

export default App;
