import { describe, it, expect, vi } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import WeeklyWeather from "../../components/weekly.component"

import React from "react"
import { IDailyWeather } from "../../interfaces/daily.interface"

// Mock the DayWeather component
vi.mock("../../components/day.component", () => ({
  __esModule: true,
  default: ({ data }) => (
    <div data-testid="day-weather">Day: {data.datetime.toString()}</div>
  ),
}))

describe("WeeklyWeather Component", () => {
  const mockData: Array<IDailyWeather> = [
    {
      datetime: new Date("2023-12-01"),
      summary: "Sunny",
      icon: "sunny.png",
      minTemperature: 10,
      maxTemperature: 20,
    },
    {
      datetime: new Date("2023-12-02"),
      summary: "Cloudy",
      icon: "cloudy.png",
      minTemperature: 12,
      maxTemperature: 22,
    },
    // Add more mock data as needed
  ]
  const setCurrentDayMock = vi.fn()

  it("renders correctly with given data", () => {
    render(
      <WeeklyWeather
        title="Weekly Forecast"
        data={mockData}
        unit="C"
        setCurrentDay={setCurrentDayMock}
      />,
    )

    expect(screen.getByText("Weekly Forecast")).toBeInTheDocument()
    const dayWeatherComponents = screen.getAllByTestId("day-weather")
    expect(dayWeatherComponents).toHaveLength(mockData.length)
    expect(dayWeatherComponents[0]).toHaveTextContent("Day: Fri Dec 01 2023")
    expect(dayWeatherComponents[1]).toHaveTextContent("Day: Sat Dec 02 2023")
  })

  it("calls setCurrentDay with correct index on day click", () => {
    render(
      <WeeklyWeather
        title="Weekly Forecast"
        data={mockData}
        unit="C"
        setCurrentDay={setCurrentDayMock}
      />,
    )

    const firstDay = screen.getAllByTestId("day-weather")[0]
    fireEvent.click(firstDay)

    expect(setCurrentDayMock).toHaveBeenCalledWith(0)
  })

  it("Checks if selected styles are applied only on first index And updates class when next day is clicked", () => {
    render(
      <WeeklyWeather
        title="Weekly Forecast"
        data={mockData}
        unit="C"
        setCurrentDay={setCurrentDayMock}
      />,
    )

    // Assume we click the first day
    const firstDay = screen.getAllByTestId("day-weather")[0].parentElement
    expect(firstDay).toHaveClass("bg-blue-200") // Check that the class is applied on component render

    const nextDay = screen.getAllByTestId("day-weather")[1].parentElement
    expect(nextDay).not.toHaveClass("bg-blue-200") // Check that the class is not applied on component render

    fireEvent.click(nextDay)
    expect(nextDay).toHaveClass("bg-blue-200") // Check that the class is applied on component render
  })
})
