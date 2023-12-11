/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"
import { IForecast } from "../interfaces/forecast.interface"
import {
  mapCurrentWeather,
  mapHourlyWeather,
  mapWeeklyWeather,
} from "../utils/data_parser.util"

export async function fetchWeatherData(
  lat: number,
  lon: number,
): Promise<IForecast | Error> {
  try {
    const baseURL: string = "https://api.open-meteo.com/v1/forecast"

    const latitude: string = lat.toString() || "65.01"
    const longitude: string = lon.toString() || "25.47"

    const currentParams: string =
      "temperature_2m,relative_humidity_2m,is_day,precipitation,weather_code,wind_speed_10m,wind_direction_10m"
    const hourlyParams: string = "temperature_2m"
    const dailyParams: string ="weather_code,temperature_2m_max,temperature_2m_min"

    const url: string = `${baseURL}?latitude=${latitude}&longitude=${longitude}&current=${currentParams}&hourly=${hourlyParams}&daily=${dailyParams}`
    const response = await axios.get<IForecast>(url)

    if (!response) {
      throw new Error("No response from the API")
    }

    const weather: IForecast = await ParseAPIData(response.data)
    return weather
  } catch (error) {
    throw new Error(`Error fetching weather data: ${error}`)
  }
}

// eslint-disable-next-line react-refresh/only-export-components
async function ParseAPIData(data: any): Promise<IForecast> {
  const weatherData: IForecast = {
    current: mapCurrentWeather(data.current),
    hourly: mapHourlyWeather(data.hourly),
    weekly: mapWeeklyWeather(data.daily),
  }

  return weatherData
}
