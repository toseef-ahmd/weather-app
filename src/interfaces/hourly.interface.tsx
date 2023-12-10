import { IDateTime } from "./base/datetime.interface";
import {ITemperature} from "./base/temperature.interface";

export interface IHourlyWeather extends ITemperature , IDateTime{
  // humidity: number;
  //apparent_temperature: number;
}
