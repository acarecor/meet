import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, waitFor, within } from '@testing-library/react';
import App from '../App';
import  userEvent from '@testing-library/user-event';


const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    
    test('An event element is collapsed by default', ({ given, when, then }) => {
        let AppComponent;
        given('the user has open the App', async () => {
            AppComponent = render(<App />);
            });

        when('the user can see a list of events', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
           
            await waitFor(() => {
                const EventListItem = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItem.length).toBe(32);
            });
        });

        then('the details of each event are collapsed by default',  () => {
            const EventDOM= AppComponent.container.firstChild;
            const eventDetails = EventDOM.querySelector('.details');
            expect(eventDetails).not.toBeInTheDocument();
            }); 
        
    });
    

    test('User can expand an event to see details', ({ given, when, then }) => {
        let AppComponent;
        given('the user has received the general list of events with the details collapsed', async () => {
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                const EventListItem = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItem.length).toBe(32);
            });
        });

        when('the user wants to have more information about a specific event', () => {

        });

        then('the user can press the „show details” button to see more information about the event', async () => {
            const user = userEvent.setup();
            const AppDOM= AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            const eventElements = within(EventListDOM).queryAllByRole('listitem');
            const eventButtonShow = within(eventElements[0]).queryByText('show details');
            await user.click(eventButtonShow);

            await waitFor(() => {
                const eventDetails = AppDOM.querySelector('.details');
                expect(eventDetails).toBeInTheDocument();
            });
        });
    });

    test('User can collapse an event to hide details', ({ given, when, then }) => {
        let AppComponent;
       
        given('the user displayed the event details whit more information', async () => {
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;
            await waitFor(()=>{
                const eventElements = within(AppDOM).queryAllByRole('listitem');
                expect(eventElements[0]).toBeTruthy();
            });
        });

        when('the user clicks on the hide details button', async () => {
            const user = userEvent.setup();
            const EventDOM= AppComponent.container.firstChild;
            const eventButtonHide = within(EventDOM).queryByText('hide details');
            await user.click(eventButtonHide);
            
        });

        then('the user can collapse the event and the details would be hidden',  () => {
            const EventDOM= AppComponent.container.firstChild;
            const eventDetails = EventDOM.querySelector('.details');
            expect(eventDetails).not.toBeInTheDocument();
        }); 
    });
});


