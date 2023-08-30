import React from 'react';
import { render } from '@testing-library/react';
import  userEvent  from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents />);
  });

  test('render textBox for the number of events', () => {
    const eventNumber = NumberOfEventsComponent.queryByRole('textbox');
    expect(eventNumber).toBeInTheDocument();
  });

  test('default value of the input field (number of events) should be 32', () => {
    const eventNumber = NumberOfEventsComponent.queryByRole('textbox');
    expect(eventNumber).toHaveValue('32');
  });

  test('to ensure that the value in textBox change when user types in it', async () => {
    const user = userEvent.setup();
    const eventNumber = NumberOfEventsComponent.queryByRole('textbox');
    await user.type(eventNumber, '{backspace}{backspace}10');
    expect(eventNumber).toHaveValue('10');
  });

});




