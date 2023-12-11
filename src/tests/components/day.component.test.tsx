import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import DayWeather from "../../components/day.component"

import { IDailyWeather } from "../../interfaces/daily.interface"
import React from "react"
import { units } from "../../utils/weather.util"

// Mock Icon component
vi.mock("../../components/Common/icon.component", () => ({
  __esModule: true,
  default: ({ icon, alt }) => (
    <div data-testid="icon">
      {icon} - {alt}
    </div>
  ),
}))

vi.mock("../../utils/data_parser.util", () => ({
  TemperatureToDisplay: vi.fn((temp, _unit) => `${temp.toFixed(1)}`),
}))

describe("DayWeather Component", () => {
  const mockData: IDailyWeather = {
    datetime: new Date("2023-12-07"),
    summary: "Sunny",
    icon: "sunny.png",
    minTemperature: 15,
    maxTemperature: 25,
  }

  it("renders correctly with given data", () => {
    render(<DayWeather data={mockData} unit={units.C} />)

    // December 7th, 2023 is a Thursday
    expect(screen.getByText("Thursday")).toBeInTheDocument()
    expect(screen.getByText("Sunny")).toBeInTheDocument()
    expect(screen.getByTestId("icon")).toHaveTextContent("sunny.png")
    expect(screen.getByText("Min: 15.0°C")).toBeInTheDocument()
    expect(screen.getByText("Max: 25.0°C")).toBeInTheDocument()
  })
})
