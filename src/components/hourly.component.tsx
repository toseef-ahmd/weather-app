import React from 'react';
import {IHourlyWeather} from '../interfaces/hourly.interface';
// import _ from 'lodash';
interface HourlyWeatherProps {
  data: IHourlyWeather[];
  unit: 'celsius' | 'fahrenheit';
}

const HourlyWeather: React.FC<HourlyWeatherProps> = ({ data, unit }) => {
  // Component to display hourly weather chart or list
  return (
    <div>
      {
        data.map((hourlyWeather) => {
          // eslint-disable-next-line no-debugger
          debugger;
          const { datetime, temperature } = hourlyWeather;
          return (
            <div key={datetime}>
              <p>{datetime}</p>
              <p>{temperature}°{unit}</p>
            </div>
          );
        })
      }
    </div>
  );
};

export default HourlyWeather;
