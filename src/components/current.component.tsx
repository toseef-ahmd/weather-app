import React from 'react';
import ICurrentWeather  from '../interfaces/current.interface';

interface CurrentWeatherProps {
  data: ICurrentWeather;
  unit: 'celsius' | 'fahrenheit';
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ data, unit }) => {
  // You might want to format the data or convert the temperature here
  return (
    <div>
      {/* Render current weather */}
     
      {console.log(unit)}
    </div>
  );
};

export default CurrentWeather;
