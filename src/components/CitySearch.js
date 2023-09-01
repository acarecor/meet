import React from "react";
import { useState , useEffect } from "react";

const CitySearch = ({ allLocations, setCurrentCity }) => {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        setSuggestions(allLocations);
        // eslint-disable-next-line
    }, [`${allLocations}`]);

    const handleInputChanged =(event) =>{
        const value = event.target.value;
        const filteredLocations = allLocations ? allLocations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        }) : [];

        setQuery(value);
        setSuggestions(filteredLocations);
    };

    const handleItemClicked = (event) => {
        const value = event.target.textContent;
        setQuery(value);
        setShowSuggestions(false); 
        setCurrentCity(value);//to hide the list
    };

    return (
      <div id="city-search">
        <input 
            type="text"
            className="city"
            placeholder="Search for a City" 
            value= {query}
            onFocus={() => setShowSuggestions(true)}
            onChange={handleInputChanged}
        />
        {showSuggestions? 
            <ul className="suggestions">
                {suggestions.map((suggestions) => {
                    return<li 
                        onClick={handleItemClicked} 
                        key={suggestions}>{suggestions}</li>
                })}
                <li key='See all cities' onClick={handleItemClicked}>
                    <b>See all cities</b>
                </li>
            </ul>: null}
      </div>
    );
   };
   
   export default CitySearch;

