import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Icon from "../../components/Common/icon.component"
import React from "react"

// Mock environment variables
vi.mock("import.meta.env", () => ({
  VITE_ICONS_URL: "/icons/",
}))

describe("Icon Component", () => {
  it("renders an image with the correct src, alt, width, and height", () => {
    const iconProps = {
      icon: "test-icon.png",
      alt: "Test Icon",
      width: 10,
      height: 10,
    }

    render(<Icon {...iconProps} />)

    const image = screen.getByAltText("Test Icon")
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute("src", "/icons/test-icon.png")
    expect(image).toHaveAttribute("class", "w-full h-full")

    // Check if the wrapper div has correct width and height classes
    const wrapperDiv = image.parentElement
    expect(wrapperDiv).toHaveClass(`w-${iconProps.width}`)
    expect(wrapperDiv).toHaveClass(`h-${iconProps.height}`)
  })
})
