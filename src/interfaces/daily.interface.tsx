import { IDateTime } from "./base/datetime.interface"
import { IWeatherInfo } from "./base/weather_info.interface"

export interface IDailyWeather extends IWeatherInfo, IDateTime {
  minTemperature: number
  maxTemperature: number
}
