import React from 'react';
import IWeeklyWeather from '../interfaces/weekly.interface';

interface WeeklyWeatherProps {
  data: IWeeklyWeather[];
  unit: 'celsius' | 'fahrenheit';
}

const DailyWeather: React.FC<WeeklyWeatherProps> = ({ data, unit }) => {
  // Component to display daily weather cards
  return (
    <div>
      {/* Render daily weather cards */}
    </div>
  );
};

export default DailyWeather;
