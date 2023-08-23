# Meet App

## Objetctive

To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

## How Meet App uses serverless functions 
Meet App uses serverless functions to interact with an external API: Google Calendar. In the app, the user can request information about upcoming events and filter them by city, as well as view a chart. All these requests are handled through serverless functions that interact with the API to display the required information, making it a progressive web application, which results in it loading instantly, being scalable, always available, no cost for idle time.


## Key Features of Meet-App

### Feature 1: Filter Events By City 
As a user,I should be able to filter events by city. 
So that I can see a list of events taking place in that city.

Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities. 
*	Given user hasn’t searched for any city;
*	When the user opens the app;
*	Then the user should see a list of upcoming events.

Scenario 2: User should see a list of suggestions when they search for a city.
*	Given the main page is open;
*	When user starts typing in the city textbox;
*	Then the user should receive a list of cities (suggestions) that match what they’ve typed.

Scenario 3: User can select a city from the suggested list. 

* Given user was typing “Berlin” in the city textbox ANDthe list of suggested cities is showing;
* When the user selects a city (e.g., “Berlin, Germany”) from the list;
* Then their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

### Feature 2: Show/Hide Event Details 
As a user, I should be able to to show/hide event details so that I can see more/less information about an event. 

Scenario 1: An event element is collapsed by default. 
*	Given the user has selected a city, to know what events are nearby 
*	When he has received a list of events as a reply, 
*	Then the details of each event are collapsed by default.

Scenario 2: User can expand an event to see details. 
*	Given the user has received the general list of events with the details collapsed, 
*	When the user wants to have more information about a specific event, 
*	Then the user can press the „show details” button to see more information about the event.

Scenario 3: User can collapse an event to hide details. 
*	Given the user displayed the event details whit more information, 
*	When the user has seen all the information 
*	Then the user can collapse the event to hide the details.

### Feature 3: Specify Number of Events
As a user,  I should be able to specify the number of events I want to view in the app
so that I can see more or fewer events in the events list at once. 

Scenario 1: When user hasn’t specified a number, 32 events are shown by default. 
*	Given the user didn't specify the number of events to be displayed, 
*	When the user searches the events nearby,  
*	Then the user will receive a default list of 32 events.

Scenario 2: User can change the number of events displayed. 
*	Given that the user received a default list of 32 events,
*	When the user wants to specify the number of events, he want to recibe. 
*	Then the user can change the settings with the number of events to be displayed.

### Feature 4: Use the App When Offline 
As a user,  I should be able to use the app when offline so that I can see the events I viewed the last time I was online. 

Scenario 1: Show cached data when there’s no internet connection.
*	Given that the user is not connected to internet. 
*	When he/she wants to view the event data 
*	Then the cached data will be showed.

Scenario 2: Show error when user changes search settings (city, number of events). 
*	Given the user saw the cached data,
*	 When he wants to change the search settings (city, number of events) 
*	Then he will receive an error message as there is no internet.

### Feature 5: Add an App Shortcut to the Home Screen 
As a user, I should be able to add the app shortcut to my home screen  so that I can open the app faster. 

Scenario 1: User can install the meet app as a shortcut on their device home screen. 
*	Given the user wanted to have direct access to the application 
*	When he wants to view the information faster 
*	Then the user can install meet app on his device home screen.

### Feature 6: Display Charts Visualizing Event Details 
As a user, I should  be able to see a chart showing the upcoming events in each city  
so that I know what events are organized in which city

Scenario 1: Show a chart with the number of upcoming events in each city. 
*	Given the user wanted to know the upcoming events per city, 
*	When he opens the application, 
*	Then the user will be able to see a chart with the number of upcoming events per city.

