import React, { useState, useEffect } from 'react';
import CurrentWeather from './current.component';
import HourlyWeather from './hourly.component';
import DailyWeather from './weekly.component';
import { WeatherData } from '../interfaces/weatherData.interface';

import {fetchWeatherData } from '../services/weather.service'; // assuming you have this file

const Dashboard: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
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
    return <div>Loading...</div>; // You can replace this with a loading spinner or skeleton component
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
