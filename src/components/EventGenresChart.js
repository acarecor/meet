import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

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

  //const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#ec5353'];
  const COLORS = ['#008385', '#ffd500', '#7fa046', '#007ae5', '#ec5353']
  
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius-innerRadius) * 0.7;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) ;
    const y = cy + radius * Math.sin(-midAngle * RADIAN) ;
    return percent ? (
      <text
        x={x}
        y={y}
        fill='black'
        textAnchor={x > cx ? 'middle' : 'middle'}
        dominantBaseline="central"
        angle={60}
       
      >
        {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
      </text>
    ) : null;
  };
 

  return (
    <ResponsiveContainer width="99%" height={400}>
        <PieChart >
          <Pie
            data={data}
            dataKey="value"
            fill="#8884d8"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150} 
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          
          </Pie>
          <Legend verticalAlign="bottom" align="center" />
        </PieChart>
      </ResponsiveContainer>
    );
  
};

export default EventGenresChart;
