import React from 'react';
import { render, within } from '@testing-library/react';
import  userEvent  from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';
import App from '../App';


describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={() => {}}  setErrorAlert={() => {}}/>);
  });

  test('render textBox for the number of events', () => {
    const eventNumberInput = NumberOfEventsComponent.queryByRole('textbox');
    expect(eventNumberInput).toBeInTheDocument();
  });

  test('default value of the input field (number of events) should be 32', () => {
    const eventNumberInput = NumberOfEventsComponent.queryByRole('textbox');
    expect(eventNumberInput).toHaveValue('32');
  });

  test('to ensure that the value in textBox change when user types in it', async () => {
    const user = userEvent.setup();
    const eventNumberInput = NumberOfEventsComponent.queryByRole('textbox');
    await user.type(eventNumberInput, '{backspace}{backspace}10');
    expect(eventNumberInput).toHaveValue('10');
  });

});

describe ('<NumberOfEvents /> integration', ()=> {
  test ('renders number of events matching with the user input', async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;
  
    const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
    const eventNumberInput = within(NumberOfEventsDOM).queryByRole('textbox');
    await user.type(eventNumberInput, '{backspace}{backspace}10');
  
    const EventListDOM = AppDOM.querySelector('#event-list');
    const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');
    expect(allRenderedEventItems.length).toEqual(10);
  });
});  