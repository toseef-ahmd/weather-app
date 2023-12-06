import {ICurrentWeather} from "./current.interface";
import {IWeeklyWeather} from "./weekly.interface";
import {IHourlyWeather} from "./hourly.interface";

export interface IWeather {
    current: ICurrentWeather; // 1 object
    // {
        // "time": "2023-12-05T21:30",
        // "summary": "Clear",
        // "icon": "clear-night",
    // }
    hourly: IHourlyWeather[]; // 168 objects
    // [{
    //     "datetime": YYYY-MM-DD HH:MM:SS,
    //     "temperature_2m": 24.24,
    // }]
    daily: IWeeklyWeather[]; //7 objects
    // [{
        //     "datetime": YYYY-MM-DD,
        //     "summary": clear,
        //     "temperature_2m_max": 24.24,
        //     "temperature_2m_min": 24.24
        //     "icon": "clear-day",
    // }]
}
