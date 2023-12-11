import { useState } from "react"
import Header from "../components/Common/header.component"
import Dashboard from "../containers/dashboard.container"
import React from "react"
import { units } from "../utils/weather.util"
import { City } from "../utils/cities.mock"

const Home: React.FC = () => {
  const [unit, setUnit] = useState<"C" | "F">("C")
  const [city, setCity] = useState<{ lat: number; lon: number }>({
    lat: 60.1699,
    lon: 24.9384,
  })
  const unitToDisplay = (): string => {
    return units[unit]
  }

  const handleUnitToggle = (newUnit: "C" | "F"): void => {
    setUnit(newUnit)
  }

  const handleCurrentCity = (city: { lat: number; lon: number }): void => {
    setCity(city)
  }

  console.log(city)
  return (
    <>
      <Header
        title="Weather App"
        logo="clear-day.svg"
        setUnit={handleUnitToggle}
        selectedCity={handleCurrentCity}
      />
      <Dashboard unit={unitToDisplay()} city={city} />
    </>
  )
}

export default Home
