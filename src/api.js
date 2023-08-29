//API calls will be handled here in the future.
import mockData from "./mock-data";

export const extractLocations = (events) => {
    const extractedLocations = events.map((event) => event.location);
    const locations = [...new Set(extractedLocations)];
    return locations;
};
    //this function will fetch the list of all events
export const getEvents = async () => {
    return mockData;
};