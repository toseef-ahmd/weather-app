import React, { useState, useEffect } from "react"
import CurrentWeather from "../components/current.component"
import HourlyWeather from "../components/hourly.component"
import WeeklyWeather from "../components/weekly.component"

import { IForecast } from "../interfaces/forecast.interface"
import { fetchWeatherData } from "../services/weather.service"

type DashboardProps = {
  unit: string
  city: { lat: number; lon: number }
}

const Dashboard: React.FC<DashboardProps> = ({ unit, city }) => {
  const [weatherData, setWeatherData] = useState<IForecast | null>(null)
  const [currentDay, setCurrentDay] = useState<number>(0)

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchWeatherData(city.lat, city.lon)
      if (!data) {
        return
      }
      setWeatherData(data as IForecast)
    }

    loadData()
  }, [city])


  return (
    <div className="container w-full px-10 py-10">
      <div className="row-span-1 w-full">
        {
          !weatherData ? 
          <div
            className="p-5 m-10 text-sm text-center text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <span className="font-medium text-center">No Data to Display.</span> 
          </div> 
          :
          <div className="grid grid-cols-4 gap-2 my-10">
          <section className="col-span-1 space-x-2 max-w-sm text-center">
            <CurrentWeather
              title="Current Weather"
              data={weatherData.current}
              unit={unit}
            />
          </section>
          <section className="col-span-3 space-x-2 space-y-5 my-5">
            <section className="rounded-lg shadow p-4 text-center">
              <WeeklyWeather
                title="Weekly Forecast"
                data={weatherData.weekly}
                unit={unit}
                setCurrentDay={setCurrentDay}
              />
            </section>
            <section className="rounded-lg shadow p-4 text-center">
              <HourlyWeather
                title="Hourly Forecast"
                data={weatherData.hourly}
                unit={unit}
                selectedDay={currentDay}
              />
            </section>
          </section>
        </div>
        }
        
      </div>
    </div>
  )
}

export default Dashboard
