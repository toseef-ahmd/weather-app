import {IDateTime} from "./base/datetime.interface";
import {IWeatherType} from "./base/weather_type.interface";

export interface IWeeklyWeather extends IWeatherType, IDateTime {
    minTemperature: number;
    maxTemperature: number;
}
