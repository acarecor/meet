import React from "react";
import { render, } from '@testing-library/react';
import  userEvent  from '@testing-library/user-event';
import Event from '../components/Event';
import mockData from "../mock-data";


const event = mockData[0];


describe ('<Event /> component', () => {
    let EventComponent; 
    beforeEach (() => {
        EventComponent = render(<Event event={event} />);
    });
    
    test ('render general event box with details',  () => {
        const eventBox = EventComponent.queryByRole('listbox');
        expect(eventBox).toBeInTheDocument();
        expect(eventBox).toHaveClass('event');    
    });

    test ('render event title (summary)', () => {
        const eventTitle = EventComponent.queryByText(event.summary);
        expect(eventTitle).toBeInTheDocument();
    });

    test('render event start date (created)', () => {
        const eventStart = EventComponent.queryByText(event.created);
        expect (eventStart).toBeInTheDocument();
    });

    test('render event location', () => {
        const eventLocation = EventComponent.queryByText(event.location);
        expect (eventLocation).toBeInTheDocument();
    });

    test('render event details button with the title (show details)', () => {
        const eventButtonDetails = EventComponent.queryByText('show details');
        expect (eventButtonDetails).toBeInTheDocument();
    });

    test ("by default, events details section should be hidden", () => {
        const eventDetails = EventComponent.container.querySelector('.details');
        expect(eventDetails).not.toBeInTheDocument();
    });
    
    test ("show details from the event when button is clicked", async ()=> {
        const user = userEvent.setup();
        const eventButtonShow = EventComponent.queryByText('show details');
        await user.click(eventButtonShow);

        const eventDetails = EventComponent.container.querySelector('.details');
        expect(eventDetails).toBeInTheDocument();
    }); 

    test ("Hide details from the event when button is clicked", async ()=> {
        const user = userEvent.setup();
        const eventButtonHide = EventComponent.queryByText('hide details');
        await user.click(eventButtonHide);

        const eventDetails = EventComponent.container.querySelector('.details');
        expect(eventDetails).not.toBeInTheDocument();
    }); 

});

