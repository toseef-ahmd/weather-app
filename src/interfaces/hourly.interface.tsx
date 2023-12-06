import {IDateTime} from "./base/datetime.interface";
import {ITemperature} from "./base/temperature.interface";

export interface IHourlyWeather extends IDateTime, ITemperature{
  // humidity: number;
  //apparent_temperature: number;
}
