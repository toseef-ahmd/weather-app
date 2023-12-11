// src/components/Header.tsx
import React, { useState } from "react"
import Icon from "./icon.component"
import { MockCities } from "../../utils/cities.mock"
import Search from "./search.component"

type HeaderProps = {
  title: string
  logo: string
  setUnit: (unit: "C" | "F") => void
  selectedCity: (city: { lat: number; lon: number }) => void
}

const Header: React.FC<HeaderProps> = ({
  title,
  logo,
  setUnit,
  selectedCity,
}) => {
  const [isCelsius, setIsCelsius] = useState(true)

  const toggleUnit = () => {
    const newUnit = isCelsius ? "F" : "C"
    setIsCelsius(!isCelsius)
    setUnit(newUnit)
  }

  const handleSelectedCity = (city: {lat : number, lon : number}) => {
    selectedCity(city)
  }

  return (
    <header className="fixed w-full py-4 px-6  flex justify-between items-center shadow-md">
      <div className=" inline-flex items-center">
        <Icon icon={logo} alt="Weather Logo" width={10} height={8} />
        <h3 className="text-lg ml-2 min-w-fit">{title}</h3>
      </div>

      <div className="w-1/3">
        <Search data={MockCities} selectedCity={handleSelectedCity} />
      </div>

      <div className="flex items-center ">
        <span className="text-md font-bold mr-2">
          {isCelsius ? "°C" : "°F"}
        </span>
        <div className="relative">
          {/* Toggle Button */}
          <button
            onClick={toggleUnit}
            className={`w-10 h-3 flex items-center rounded-full p-0 cursor-pointer ${
              isCelsius ? "bg-gray-400" : "bg-gray-600 justify-end"
            }`}
          >
            <div
              className={`bg-black w-5 h-5 rounded-full shadow-md transform transition duration-300 ease-in-out`}
            ></div>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
