import { ICurrentWeather } from "./current.interface"
import { IDailyWeather } from "./daily.interface"
import { IHourlyWeather } from "./hourly.interface"

export interface IForecast {
  current: ICurrentWeather // 1 object
  // {
  // "time": "YYYY-MM-DD",
  // "summary": "Clear",
  // "icon": "clear-night",
  // }
  hourly: Array<IHourlyWeather> // 168 objects
  // [{
  //     "datetime": YYYY-MM-DD,
  //     "temperature_2m": 24.24,
  // }]
  weekly: Array<IDailyWeather> //7 objects
  // [{
  //     "datetime": YYYY-MM-DD,
  //     "summary": clear,
  //     "temperature_2m_max": 24.24,
  //     "temperature_2m_min": 24.24
  //     "icon": "clear-day",
  // }]
}
