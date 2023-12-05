import React from 'react';
import IHourlyWeather from '../interfaces/hourly.interface';

interface HourlyWeatherProps {
  data: IHourlyWeather[];
  unit: 'celsius' | 'fahrenheit';
}

const HourlyWeather: React.FC<HourlyWeatherProps> = ({ data, unit }) => {
  // Component to display hourly weather chart or list
  return (
    <div>
      {
        data.map((hourlyWeather) => ({
          // Render hourly weather
          console.log(hourlyWeather)
        }))
      }
    </div>
  );
};

export default HourlyWeather;
