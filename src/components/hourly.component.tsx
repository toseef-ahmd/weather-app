import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import {IHourlyWeather} from '../interfaces/hourly.interface';
import {TemperatureToDisplay}  from '../utils/data_parser.util';

// import _ from 'lodash';
interface HourlyWeatherProps {
  title : string
  data: Array<IHourlyWeather>;
  unit: string;
  selectedDay: number;
}

const HourlyWeather: React.FC<HourlyWeatherProps> = ({ title, data, unit, selectedDay }) => {
  const weeklyData : Array<object>= _.chunk(data, 24); // Split data into 24 hour chunks to group it in 7 days forcast

  const selectedDayData = weeklyData[selectedDay] as Array<IHourlyWeather>;
  
  const currentDate = moment(selectedDayData[0].datetime).format('dddd, MMMM Do YYYY');

  const chartCategories = _.map(selectedDayData, entry => moment(entry.datetime).format('HH:mm'));

  const chartData = _.map(selectedDayData, entry => {return TemperatureToDisplay(entry.temperature, unit);});

  const chartOptions = {
    chart: {
      type: 'spline'
    },
    accessibility: {
      enabled: false,
    },
    title: {
      text: `${title}`
    },
    subtitle: {
      text: `${currentDate}` 
    },
    xAxis: {
      categories: chartCategories,
      tickmarkPlacement: 'on',
      title: {
        text: 'Time of Day'
      }
    },
    yAxis: {
      title: {
        text: `Temperature ${unit}`
      },
      min: Math.min(...chartData) 
    },
    tooltip: {
      valueSuffix: ` ${unit}`
    },
    series: [{
      name: 'Temperature',
      data: chartData
    }]
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
      />
    </div>
  );
};

export default HourlyWeather;
