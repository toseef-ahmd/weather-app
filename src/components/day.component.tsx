import React from 'react';
import Icon from './Common/icon.component';
import { IDailyWeather } from '../interfaces/daily.interface';
import moment from 'moment';
import {TemperatureToDisplay} from '../utils/data_parser.util';

type DayWeatherProps = {
  data: IDailyWeather; // Data for the day
  unit : string;
};

// Individual day weather card
const DayWeather: React.FC<DayWeatherProps> = ({ data, unit }) => {
  const day = moment(data.datetime)
  const datePlaceholder = day.isSame(moment(), 'day') ? 'Today' : day.format('dddd');

  return (
    <div className="rounded-lg shadow-md p-7">
      <p className='text-xs font-bold'>{datePlaceholder}</p>
      <p className='text-xs m-2'>{data.summary}</p>
      <Icon icon={data.icon} alt="Weather Logo" width={16} height={16}/>
      <p className="text-xs">
        Min: {TemperatureToDisplay(data.minTemperature, unit)}{unit}
      </p>
      <p className="text-xs">
        Max: {TemperatureToDisplay(data.maxTemperature, unit)}{unit}
      </p>
    </div>
  );
};

export default DayWeather;