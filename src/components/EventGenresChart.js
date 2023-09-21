import { useState, useEffect } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const EventGenresChart = ({ events }) => {
  const [data, setData] = useState([]);
  const genres = ["React", "JavaScript", "Node", "jQuery", "Angular"];

  const getData = () => {
    const data = genres.map((genre) => {
      const filteredEvents = events.filter((event) =>
        event.summary.includes(genre)
      );
      return {
        name: genre,
        value: filteredEvents.length,
      };
    });
    return data;
  };

  useEffect(() => {
    setData(getData());
    // eslint-disable-next-line
  }, [`${events}`]);

  return (
    <ResponsiveContainer width="99%" height={400}>
        <PieChart >
          <Pie
            data={data}
            dataKey="value"
            fill="#8884d8"
            labelLine={false}
            label
            outerRadius={130} 
          />
        </PieChart>
      </ResponsiveContainer>
    );
  
};

export default EventGenresChart;
