import React, { useState, useEffect } from 'react';
import CurrentWeather from './current.component';
import HourlyWeather from './hourly.component';
import DailyWeather from './weekly.component';
import IWeather  from '../interfaces/weather.interface';

import {fetchWeatherData } from '../services/weather.service';

const Dashboard: React.FC = () => {
  const [weatherData, setWeatherData] = useState<IWeather | null>(null);
  const [unit, setUnit] = useState<'celsius' | 'fahrenheit'>('celsius');

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchWeatherData();
      setWeatherData(data);
    };

    loadData();
  }, []);

  const handleUnitToggle = () => {
    setUnit((prevUnit) => (prevUnit === 'celsius' ? 'fahrenheit' : 'celsius'));
  };

  if (!weatherData) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <button onClick={handleUnitToggle}>Toggle Unit</button>
      <CurrentWeather data={weatherData.current} unit={unit} />
      <HourlyWeather data={weatherData.hourly} unit={unit} />
      <DailyWeather data={weatherData.daily} unit={unit} />
    </div>
  );
};

export default Dashboard;
