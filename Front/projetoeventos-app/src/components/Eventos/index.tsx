import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function Eventos() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.example.com/data');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className="Eventos">
      <h1>Eventos</h1>
    </div>
  );
}