import React from "react";
import { render } from '@testing-library/react';
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
});
