import React from 'react';
import { useState, useEffect } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import CityEventsChart from './components/CityEventsChart';
import NumberOfEvents from './components/NumberOfEvents';
import { extractLocations, getEvents } from './api';
import { InfoAlert, ErrorAlert, WarningAlert } from './components/Alert';


import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);
  // eslint-disable-next-line
  const [currentNOE, setCurrentNOE] = useState([32]);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState('See all cities');
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");

  useEffect(() => {
    if(navigator.onLine){
      setWarningAlert('');
    } else {
      const warningText = 'There is no internet connection';
      setWarningAlert(warningText);
    }
    fetchData();
    // eslint-disable-next-line
   }, [currentCity, currentNOE]);

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === 'See all cities' ? 
      allEvents : 
      allEvents.filter(event => event.location === currentCity)
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  };
  
  return (
    <div className="App">
      <h1> Meet App </h1>
      <div className='alerts-container'>
       {infoAlert.length ? <InfoAlert text= {infoAlert}/> : null}
       {errorAlert.length ? <ErrorAlert text= {errorAlert}/> : null}
       {warningAlert.length ? <WarningAlert text= {warningAlert}/>: null}
      </div>
      <CitySearch 
        allLocations={allLocations} 
        setCurrentCity={setCurrentCity}
        setInfoAlert={setInfoAlert}
        
        />
      <NumberOfEvents 
        setCurrentNOE={setCurrentNOE}
        setErrorAlert={setErrorAlert}
        />
      <CityEventsChart
        allLocations={allLocations}
        events={events}/>
       <EventList events={events} />
    </div>
  );
};

export default App;
