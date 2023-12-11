import { describe, it, expect, vi, beforeEach } from "vitest"
import { render, screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import Dashboard from "../../containers/dashboard.container"
import { fetchWeatherData } from "../../services/weather.service"
import React from "react"
import { units } from "../../utils/weather.util"

// Mock child components and fetchWeatherData
vi.mock("../../components/current.component", () => ({
  __esModule: true,
  default: () => <div>CurrentWeather Component</div>,
}))
vi.mock("../../components/weekly.component", () => ({
  __esModule: true,
  default: () => <div>WeeklyWeather Component</div>,
}))
vi.mock("../../components/hourly.component", () => ({
  __esModule: true,
  default: () => <div>HourlyWeather Component</div>,
}))
vi.mock("../../services/weather.service", () => ({
  fetchWeatherData: vi.fn(),
}))

describe("Dashboard Component", () => {
  const mockCity = { lat: 123, lon: 456 }

  beforeEach(() => {
    ;(fetchWeatherData as vi.Mock).mockClear()
  })

  it("displays loading initially and renders components after data fetch", async () => {
    fetchWeatherData.mockResolvedValue({
      current: {
        time: "2023-01-01",
        summary: "Clear",
        icon: "clear-night",
      },
      hourly: [
        {
          datetime: "2023-12-01T00:00:00",
          temperature_2m: 24.24,
        },
        {
          datetime: "2023-12-02T00:00:00",
          temperature_2m: 25.24,
        },
      ],
      weekly: [
        {
          datetime: "2023-12-01",
          summary: "Clear",
          minTemperature: 24.24,
          maxTemperature: 25.24,
          icon: "clear-day",
        },
        {
          datetime: "2023-12-02",
          summary: "Cloudy",
          minTemperature: 14.24,
          maxTemperature: 15.24,
          icon: "clear-day",
        },
      ],
    })

    render(<Dashboard unit={units.C} city={mockCity} />)

    // Initially, it should display loading
    expect(screen.getByText("Loading...")).toBeInTheDocument()

    // Wait for the async data fetching and state update
    await waitFor(() => {
      expect(screen.getByText("CurrentWeather Component")).toBeInTheDocument()
      expect(screen.getByText("WeeklyWeather Component")).toBeInTheDocument()
      expect(screen.getByText("HourlyWeather Component")).toBeInTheDocument()
    })

    expect(fetchWeatherData).toHaveBeenCalled()
  })
})
