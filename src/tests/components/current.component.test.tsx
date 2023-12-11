import React from "react"

import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import CurrentWeather from "../../components/current.component"
import { ICurrentWeather } from "../../interfaces/current.interface"
import { units } from "../../utils/weather.util"

// Mock moment
vi.mock("moment", () => ({
  __esModule: true,
  default: () => ({
    format: vi.fn(() => "Mocked Date"),
  }),
}))

// Mock Icon component
vi.mock("../../components/Common/icon.component", () => ({
  __esModule: true,
  default: ({ icon }) => <div data-testid="mock-icon">{icon}</div>,
}))

// Mock environment variables if needed
vi.mock("import.meta.env", () => ({
  VITE_ICONS_URL: "http://mockedurl.com/icons/",
}))

describe("CurrentWeather Component", () => {
  const mockData: ICurrentWeather = {
    datetime: new Date(),
    icon: "cloudy.svg",
    temperature: 20,
    summary: "Cloudy",
    windSpeed: 5,
    windDirection: 180,
    humidity: 0.5,
    precipitation: 0,
  }

  it("renders correctly with given data", () => {
    render(
      <CurrentWeather title="Test Weather" data={mockData} unit={units.C} />,
    )

    expect(screen.getByText("Test Weather")).toBeInTheDocument()
    expect(screen.getByText("Mocked Date")).toBeInTheDocument()
    expect(screen.getByText("20 °C")).toBeInTheDocument()
    expect(screen.getByText("Cloudy")).toBeInTheDocument()
    expect(screen.getByText("5 m/s")).toBeInTheDocument()
    expect(screen.getByText("Wind Direction")).toBeInTheDocument()
    expect(screen.getByText("Humidity")).toBeInTheDocument()
    expect(screen.getByText("Precipitation")).toBeInTheDocument()
  })
})
