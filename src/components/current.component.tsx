import React from 'react';
import {ICurrentWeather}  from '../interfaces/current.interface';
import Icon from './Common/icon.component';
import moment from 'moment';
import { TemperatureToDisplay } from '../utils/data_parser.util';

interface CurrentWeatherProps {
  title : string;
  data: ICurrentWeather;
  unit: string;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ data, unit , title}) => {


  const date = moment(data.datetime).format('dddd, MMMM Do YYYY');
  return (
    <>
    <div className='rounded-lg shadow my-2'>
      <div className="font-bold text-xl mb text-center">{title}</div>
      <div className="flex flex-col items-center justify-center">
        <Icon icon={data.icon} alt="Weather Logo" width={40} height={40}/>
        <p className="text-5xl">{TemperatureToDisplay(data.temperature, unit)} {unit}</p>
        <p>{date}</p>
        <p>{data.summary}</p>
      </div>
      <div className="flex justify-center">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 my-2">
          Wind speed: {data.windSpeed.toFixed(1)} m/s
        </span>
      </div>
    </div>

    {/* <div className='rounded-lg shadow my-2'>
      <div className="font-bold text-xl mb-2 text-center">{title}</div>
      <div className="flex flex-col items-center justify-center">
        <Icon icon={data.icon} alt="Weather Logo" width={32} height={32}/>
        <p className="text-5xl">{data.temperature.toFixed(1)}°C</p>
        <p>{data.datetime}</p>
        <p>{data.summary}</p>
      </div>
      <div className="flex justify-center">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 my-2">
          Wind speed: {data.windSpeed.toFixed(1)} m/s
        </span>
      </div>
    </div> */}
    </>
  );
};

export default CurrentWeather;
