import { IDateTime } from "./base/datetime.interface"
import { ITemperature } from "./base/temperature.interface"
import { IWeatherInfo } from "./base/weather_info.interface"

export interface ICurrentWeather extends ITemperature, IWeatherInfo, IDateTime {
  windSpeed: number
  windDirection: number
  humidity: number
  precipitation: number
}

//export default ICurrentWeather;
