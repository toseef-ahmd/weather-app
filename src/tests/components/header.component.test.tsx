import { describe, it, expect, vi } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import Header from "../../components/Common/header.component"
import React from "react"

// Mock Icon component
vi.mock("../../components/common/icon.component", () => ({
  __esModule: true,
  default: ({ icon, alt }) => (
    <div data-testid="icon" alt={alt}>
      {icon}
    </div>
  ),
}))

describe("Header Component", () => {
  it("renders correctly with given props", () => {
    const setUnitMock = vi.fn()
    render(
      <Header
        title="Weather App"
        logo="weather-logo.png"
        setUnit={setUnitMock}
      />,
    )
    const title = screen.getByText("Weather App")
    const icon = screen.getByTestId("icon")
    expect(title).toHaveClass("text-lg ml-2 min-w-fit")
    expect(icon).toHaveTextContent("weather-logo.png")
    expect(icon).toHaveAttribute("alt", "Weather Logo")
    expect(screen.getByText("°C")).toBeInTheDocument() // Default state is Celsius
  })

  it("toggles temperature unit on button click", () => {
    const setUnitMock = vi.fn()
    render(
      <Header
        title="Weather App"
        logo="weather-logo.png"
        setUnit={setUnitMock}
      />,
    )

    const toggleButton = screen.getByRole("button")
    fireEvent.click(toggleButton)

    expect(setUnitMock).toHaveBeenCalledWith("F")
    expect(screen.getByText("°F")).toBeInTheDocument()

    fireEvent.click(toggleButton)

    expect(setUnitMock).toHaveBeenCalledWith("C")
    expect(screen.getByText("°C")).toBeInTheDocument()
  })
})
