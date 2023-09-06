Feature: Specify Number of Events

 Scenario: When user hasn’t specified a number, 32 events are shown by default 
  Given the user didn't specify the number of events to be displayed 
  When  the user receives the list of events  
  Then by default the list will be 32 events

 Scenario: User can change the number of events displayed 
  Given the user sees the default box number of events
  When the user wants to specify the number of events, he want to recibe 
  Then the user can change the settings with the number of events to be displayed