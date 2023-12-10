import React, { useState, useEffect } from 'react';
import CurrentWeather from '../components/current.component';
import HourlyWeather from '../components/hourly.component';
import WeeklyWeather from '../components/weekly.component';

import {IForecast}  from '../interfaces/forecast.interface';
import {fetchWeatherData } from '../services/weather.service';
// import Header from '../components/Common/header.component';

type DashboardProps = { 
  unit : string;
}

const Dashboard: React.FC<DashboardProps> = ({unit}) => {
  const [weatherData, setWeatherData] = useState<IForecast | null>(null);
  const [currentDay, setCurrentDay] = useState<number>(0);

  const [backgroundImage, setBackgroundImage] = React.useState<string>('default-background.jpg');

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchWeatherData();
      setWeatherData(data as IForecast);
    };

    loadData();
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="container w-full px-10 py-10">
      <div className='row-span-1 w-full'>
      <div className="grid grid-cols-4 gap-2  my-10">
        <section className="col-span-1 space-x-2 max-w-sm text-center">
          <CurrentWeather title='Current Weather' data = {weatherData.current} unit={unit} />
        </section>
        <section className="col-span-3 space-x-2 space-y-5">
          <section className="rounded-lg shadow p-4 text-center">
            <WeeklyWeather title='Weekly Forecast' data = {weatherData.weekly} unit={unit} setCurrentDay={setCurrentDay}/>
          </section>
          <section className="rounded-lg shadow p-4 text-center">
            <HourlyWeather title='Hourly Forecast' data = {weatherData.hourly} unit={unit} selectedDay={currentDay}/>
          </section>
        </section>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
