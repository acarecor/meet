Feature: Show/Hide Event Details 

 Scenario: An event element is collapsed by default 
  Given the user has open the App 
  When the user can see a list of events 
  Then the details of each event are collapsed by default

 Scenario: User can expand an event to see details 
  Given the user has received the general list of events with the details collapsed 
  When the user wants to have more information about a specific event 
  Then the user can press the „show details” button to see more information about the event

 Scenario: User can collapse an event to hide details 
  Given the user displayed the event details whit more information 
  When the user clicks on the hide details button
  Then the user can collapse the event and the details would be hidden