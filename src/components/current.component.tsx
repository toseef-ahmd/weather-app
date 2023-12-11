import React from "react"
import { ICurrentWeather } from "../interfaces/current.interface"
import Icon from "./Common/icon.component"
import moment from "moment"
import { TemperatureToDisplay } from "../utils/data_parser.util"

interface CurrentWeatherProps {
  title: string
  data: ICurrentWeather
  unit: string
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({
  data,
  unit,
  title,
}) => {
  const date = moment(data.datetime).format("dddd, MMMM Do YYYY")
  return (
    <>
      <div className="rounded-lg shadow my-2">
        <div className="font-bold text-xl mb text-center">{title}</div>
        <div className="flex flex-col items-center justify-center">
          <Icon icon={data.icon} alt="Current Logo" width={16} height={16} />
          <p className="text-4xl py-2">{data.summary}</p>
          <p className="text-2xl">
            {TemperatureToDisplay(data.temperature, unit)} {unit}
          </p>
          <p className="p-2">{date}</p>
        </div>
        {/* <div className="flex justify-center">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 my-2">
            Wind speed: {data.windSpeed.toFixed(1)} m/s
          </span>
        </div> */}
      </div>
      <div className="rounded-lg shadow my-5 p-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center">
            <div className="icon w-10 h-10 flex items-center justify-center rounded-full">
              <Icon icon="wind.svg" alt="Weather Logo" width={16} height={16} />
            </div>
            <p className="text-sm mt-2">Wind Speed</p>
            <span className="text-sm mt-2 font-bold">{data.windSpeed} m/s</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="icon w-10 h-10 flex items-center justify-center">
              <Icon icon="wind.svg" alt="Weather Logo" width={16} height={16} />
            </div>
            <p className="text-sm mt-2">Wind Direction</p>
            <span className="text-sm mt-2 font-bold">
              {data.windDirection} degrees
            </span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-10 h-10 flex items-center justify-center rounded-full">
              <Icon icon="rain.svg" alt="arrow Logo" width={16} height={16} />
            </div>
            <p className="text-sm mt-2">Humidity</p>
            <span className="text-sm mt-2 font-bold"> {data.humidity}</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="icon w-10 h-10 flex items-center justify-center rounded-full">
              <Icon icon="rain.svg" alt="arrow Logo" width={16} height={16} />
            </div>
            <p className="text-sm mt-2">Precipitation</p>
            <span className="text-sm mt-2 font-bold">{data.precipitation}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default CurrentWeather
