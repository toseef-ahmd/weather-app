import { describe, it, expect, vi } from "vitest"
import axios from "axios"
import { fetchWeatherData } from "../../services/weather.service"
import {
  mapCurrentWeather,
  mapHourlyWeather,
  mapWeeklyWeather,
} from "../../utils/data_parser.util"

// Mock axios
vi.mock("axios", () => ({
  __esModule: true,
  default: {
    get: vi.fn(),
  },
}))

// Mock data parsing utilities
vi.mock("../../utils/data_parser.util", () => ({
  mapCurrentWeather: vi.fn(),
  mapHourlyWeather: vi.fn(),
  mapWeeklyWeather: vi.fn(),
}))

describe("fetchWeatherData Function", () => {
  const mockLat: number = 65.01
  const mockLon: number = 25.47

  it("fetches and processes weather data successfully", async () => {
    const mockResponse = {
      data: {
        // Provide mock response data structure
      },
    }

    axios.get.mockResolvedValue(mockResponse)

    await fetchWeatherData(mockLat, mockLon)

    expect(axios.get).toHaveBeenCalled()
    expect(mapCurrentWeather).toHaveBeenCalled()
    expect(mapHourlyWeather).toHaveBeenCalled()
    expect(mapWeeklyWeather).toHaveBeenCalled()
  })

  it("throws an error when the API call fails", async () => {
    axios.get.mockRejectedValue(new Error("API call failed"))

    await expect(fetchWeatherData(mockLat, mockLon)).rejects.toThrow(
      "Error fetching weather data: Error: API call failed",
    )
  })
})
