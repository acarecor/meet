import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, waitFor, within } from '@testing-library/react';
import App from '../App';
import  userEvent from '@testing-library/user-event';



const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

    test('When user hasn’t specified a number, 32 events are shown by default', ({ given, when, then }) => {
      let AppComponent;
        given('the user didn\'t specify the number of events to be displayed', async () => {
           AppComponent = render(<App />)
        });

        when('the user receives the list of events', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            expect(EventListDOM).toBeInTheDocument();
           
        });

        then(/^by default the list will be (\d+) events$/, async ()  => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            
            await waitFor(()=> {
                const EventListItem = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItem.length).toEqual(32);
            });
        });
    });

    test('User can change the number of events displayed', ({ given, when, then }) => {
        let AppComponent;
        given('the user sees the default box number of events',  () => {
            AppComponent = render (<App />);
            const AppDOM = AppComponent.container.firstChild;
            const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
            expect(NumberOfEventsDOM).toBeInTheDocument();

        });

        when('the user wants to specify the number of events, he want to recibe', async () => {
            const user= userEvent.setup();
            const NumberOfEventsDOM = AppComponent.container.firstChild;
            const eventNumberInput = NumberOfEventsDOM.querySelector('.number-input');
            await user.type(eventNumberInput, '{backspace}{backspace}10');
        });

        then('the user can change the settings with the number of events to be displayed', () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');
            expect(allRenderedEventItems.length).toEqual(10);
        });
    });
});
