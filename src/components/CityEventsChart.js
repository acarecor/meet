import { useState, useEffect } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CityEventsChart = ({ allLocations, events }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getData());
    // eslint-disable-next-line 
  }, [`${events}`]);

  const getData = () => {
    const data = allLocations.map((location) => {
      const count = events.filter((event) => event.location === location).lenght;
      const city = location.split(', ')[0];
      return { city, count };
    });
    return data;
  };
  return (
    <ResponsiveContainer width="99%" height={400}>
      <ScatterChart
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid  />
        <XAxis dataKey="city" type="category" name="City"  />
        <YAxis dataKey="count" type="number" name="Number of events" allowDecimals={false} />

        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter  data={data} fill="#8884d8" />
        
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default CityEventsChart;
