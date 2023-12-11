import React from "react"
import { IDailyWeather } from "../interfaces/daily.interface"
import DayWeather from "./day.component"

interface WeeklyWeatherProps {
  title: string
  data: Array<IDailyWeather>
  unit: string
  setCurrentDay: (day: number) => void
}

const WeeklyWeather: React.FC<WeeklyWeatherProps> = ({
  title,
  data,
  unit,
  setCurrentDay,
}) => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(0)

  function onItemSelect(index: number): void {
    setCurrentDay(index)
    setActiveIndex(index)
  }

  return (
    <>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div className="flex space-x-2 overflow-x-auto py-10">
        {data.map((dataItem, index) => (
          <div
            key={index}
            onClick={() => onItemSelect(index)}
            className={`cursor-pointer ${
              index === activeIndex ? "bg-blue-200" : ""
            } hover:bg-blue-100`}
          >
            <DayWeather data={dataItem} unit={unit} />
          </div>
        ))}
      </div>
    </>
  )
}

export default WeeklyWeather
