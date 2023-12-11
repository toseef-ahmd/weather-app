/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */

import { ICurrentWeather } from "../interfaces/current.interface"
import { IDailyWeather } from "../interfaces/daily.interface"
import { IHourlyWeather } from "../interfaces/hourly.interface"

import { weatherCodesMap } from "./weather.util"
import {
  CurrentCondition,
  WeatherCondition,
} from "../interfaces/wmo_codes.interface"
import { units } from "./weather.util"

// This function would map the API response for current weather to the ICurrentWeather interface.
// This will be used to display the current weather in the app.
// Returns a ICurrentWeather object
function mapCurrentWeather(apiCurrent: any): ICurrentWeather {
  if (!apiCurrent) {
    return {} as ICurrentWeather
  }
  return {
    datetime: apiCurrent.time,
    summary: getWeatherSummaryData(apiCurrent.weather_code, apiCurrent.isDay)
      .summary,
    icon: getWeatherSummaryData(apiCurrent.weather_code, apiCurrent.isDay).icon,
    windSpeed: apiCurrent.wind_speed_10m,
    windDirection: apiCurrent.wind_direction_10m,
    humidity: apiCurrent.relative_humidity_2m,
    precipitation: apiCurrent.precipitation,
    temperature: apiCurrent.temperature_2m,
  } as ICurrentWeather
}

// This function would map the API response for hourly weather to the IHourlyWeather interface.
// This will be used to display the hourly weather in the app.
// Returns an array of IHourlyWeather objects
function mapHourlyWeather(apiHourly: any): Array<IHourlyWeather> {
  if (!apiHourly || !apiHourly.time) {
    return new Array<IHourlyWeather>()
  }
  return apiHourly?.time?.map((time: Date, index: number) => {
    const temp: number = apiHourly.temperature_2m[index]
    return {
      datetime: time,
      temperature: temp,
    } as IHourlyWeather
  })
}

// This function would map the API response for Weekly weather to the IDailyWeather interface.
// This will be used to display the weekly weather in the app.
// Returns an array of IWeeklyInterface objects
function mapWeeklyWeather(apiDaily: any): Array<IDailyWeather> {
  if (!apiDaily || !apiDaily.time) {
    return new Array<IDailyWeather>()
  }
  return apiDaily?.time?.map((time: Date, index: number) => {
    const weatherCode: number = apiDaily.weather_code[index] || 0
    const tempMax: number = apiDaily.temperature_2m_max[index]
    const tempMin: number = apiDaily.temperature_2m_min[index]
    // Weekly forecasts typically don't have day/night distinction, default to day

    return {
      datetime: time,
      summary: getWeatherSummaryData(weatherCode, 1).summary,
      icon: getWeatherSummaryData(weatherCode, 1).icon,
      minTemperature: tempMin,
      maxTemperature: tempMax,
    } as IDailyWeather
  })
}

// Helper function to get the weather info
// Returns a CurrentCondition object which contains the summary and icon for the day or night.
function getWeatherSummaryData(code: number, isDay: number): CurrentCondition {
  const condition: WeatherCondition = weatherCodesMap[code]

  return isDay ? condition.day : condition.night
}

function TemperatureToDisplay(temperature: number, unit: string): number {
  // Validate temperature: must be a finite number
  if (typeof temperature !== "number" || !isFinite(temperature)) {
    return 0
  }

  const validUnits = [units.C, units.F]
  // Validate unit
  if (!validUnits.includes(unit)) {
    return 0
  }

  // Conversion to Fahrenheit if required
  const temp = unit === units.F ? (temperature * 9) / 5 + 32 : temperature

  return Number(temp.toFixed(1))
}

export {
  TemperatureToDisplay,
  mapCurrentWeather,
  mapHourlyWeather,
  mapWeeklyWeather,
  getWeatherSummaryData,
}
