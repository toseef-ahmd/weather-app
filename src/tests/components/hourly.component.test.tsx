import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import HourlyWeather from "../../components/hourly.component"
import { IHourlyWeather } from "../../interfaces/hourly.interface"
import React from "react"
import { units } from "../../utils/weather.util"

// Assuming IHourlyWeather has properties like datetime and temperature
const createMockHourlyWeatherData = (date, temperature) => ({
  datetime: new Date(date),
  temperature,
})

// Mock lodash and HighchartsReact
vi.mock("lodash", () => ({
  __esModule: true,
  default: {
    chunk: vi.fn((data) => [data]),
    map: vi.fn((data, callback) => data.map(callback)),
  },
}))
vi.mock("highcharts-react-official", () => ({
  __esModule: true,
  default: ({ options }) => (
    <div data-testid="highcharts">{JSON.stringify(options)}</div>
  ),
}))

describe("HourlyWeather Component", () => {
  const mockData: IHourlyWeather = [
    createMockHourlyWeatherData("2023-12-01T00:00:00", 10),
    createMockHourlyWeatherData("2023-12-01T01:00:00", 12),
  ]
  const selectedDay = 0 // Example selected day

  it("renders chart with correct options based on data", () => {
    render(
      <HourlyWeather
        title="Hourly Forecast"
        data={mockData}
        unit={units.C}
        selectedDay={selectedDay}
      />,
    )

    const chart = screen.getByTestId("highcharts")
    const chartOptions = JSON.parse(chart.textContent)

    expect(chartOptions.xAxis.categories).toEqual(["00:00", "01:00"])
    expect(chartOptions.yAxis.title.text).toBe("Temperature °C")
    expect(chartOptions.series[0].data).toEqual([10, 12])
    expect(chartOptions.title.text).toBe("Hourly Forecast")
    expect(chartOptions.subtitle.text).toBe("Friday, December 1st 2023")
  })
})
