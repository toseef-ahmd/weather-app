import { describe, it, expect } from "vitest"
import {
  mapCurrentWeather,
  mapHourlyWeather,
  mapWeeklyWeather,
  TemperatureToDisplay,
} from "../../utils/data_parser.util"
import { units } from "../../utils/weather.util"

describe("Weather Data Parsing Utilities", () => {
  describe("mapCurrentWeather", () => {
    it("correctly maps the API response to ICurrentWeather interface", () => {
      const mockApiResponse = {
        time: "2023-12-05",
        weather_code: 0,
        isDay: 1,
        wind_speed_10m: 5,
        temperature_2m: 20,
      }

      const result = mapCurrentWeather(mockApiResponse)

      expect(result).toEqual({
        datetime: "2023-12-05",
        summary: "Sunny",
        icon: "clear-day.svg",
        windSpeed: 5,
        temperature: 20,
      })
    })

    // Add more tests, including edge cases
  })

  describe("mapHourlyWeather", () => {
    it("correctly maps API response to Array<IHourlyWeather>", () => {
      const mockApiResponse = {
        time: ["2023-01-01T00:00:00", "2023-01-01T01:00:00"],
        temperature_2m: [10, 12],
      }

      const result = mapHourlyWeather(mockApiResponse)

      expect(result).toEqual([
        { datetime: "2023-01-01T00:00:00", temperature: 10 },
        { datetime: "2023-01-01T01:00:00", temperature: 12 },
      ])
    })

    it("handles empty or undefined API response", () => {
      expect(mapHourlyWeather(null)).toEqual([])
      expect(mapHourlyWeather({})).toEqual([])
    })
  })

  describe("mapWeeklyWeather", () => {
    it("correctly maps API response to Array<IDailyWeather>", () => {
      const mockApiResponse = {
        time: ["2023-12-05", "2023-12-06"],
        weather_code: [0, 1],
        temperature_2m_max: [15, 18],
        temperature_2m_min: [5, 7],
      }

      const result = mapWeeklyWeather(mockApiResponse)

      expect(result).toEqual([
        {
          datetime: "2023-12-05",
          summary: "Sunny",
          icon: "clear-day.svg",
          minTemperature: 5,
          maxTemperature: 15,
        },
        {
          datetime: "2023-12-06",
          summary: "Mainly Sunny",
          icon: "clear-day.svg",
          minTemperature: 7,
          maxTemperature: 18,
        },
      ])
    })

    it("handles empty or undefined API response", () => {
      expect(mapWeeklyWeather(null)).toEqual([])
      expect(mapWeeklyWeather({})).toEqual([])
    })
  })

  describe("TemperatureToDisplay", () => {
    // Existing tests...

    it("correctly converts various temperatures to Fahrenheit", () => {
      expect(TemperatureToDisplay(-17.78, units.F)).toBe(-0)
      expect(TemperatureToDisplay(100, units.F)).toBe(212)
    })

    it("correctly handles negative temperatures in Celsius", () => {
      expect(TemperatureToDisplay(-20, units.C)).toBe(-20)
    })

    it("maintains precision to one decimal place", () => {
      expect(TemperatureToDisplay(26.666, units.C)).toBe(26.7)
    })

    it("handles invalid temperature inputs", () => {
      expect(TemperatureToDisplay(undefined, units.C)).toBe(0)
      expect(TemperatureToDisplay(null, units.F)).toBe(0)
      expect(TemperatureToDisplay("invalid", units.F)).toBe(0)
    })

    it("handles missing or invalid unit", () => {
      expect(TemperatureToDisplay(25, "invalid")).toBe(0)
      expect(TemperatureToDisplay(25)).toBe(0)
    })
  })
})
