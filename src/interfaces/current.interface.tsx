import {IDateTime} from "./base/datetime.interface";
import {ITemperature} from "./base/temperature.interface";
import {IWeatherType} from "./base/weather_type.interface";

export interface ICurrentWeather extends ITemperature, IDateTime, IWeatherType {
  windSpeed: number;
}

//export default ICurrentWeather;