import React from "react"
import Icon from "./Common/icon.component"
import { IDailyWeather } from "../interfaces/daily.interface"
import moment from "moment"
import { TemperatureToDisplay } from "../utils/data_parser.util"

type DayWeatherProps = {
  data: IDailyWeather // Data for the day
  unit: string
}
const cardStyle = {
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  maxWidth: '100%', // Adjust as necessary for your layout
}
// Individual day weather card
const DayWeather: React.FC<DayWeatherProps> = ({ data, unit }) => {
  const day = moment(data.datetime)
  const datePlaceholder = day.isSame(moment(), "day")
    ? "Today"
    : day.format("dddd")

  return (
    <div className="rounded-lg shadow-md p-7">
      <p className="text-xs font-bold">{datePlaceholder}</p>
      <p className="text-xs m-2" 
      style={cardStyle}
      >{data.summary}</p>
      <Icon icon={data.icon} alt="Day Weather Logo" width={16} height={16} />
      <p className="text-xs overflow-auto" style={cardStyle}>
      
      Min: {TemperatureToDisplay(data.minTemperature, unit)}
        {unit}
      
      </p>
      <p className="text-xs" style={cardStyle}>
      Max: {TemperatureToDisplay(data.maxTemperature, unit)}
        {unit}
      </p>
    </div>
  )
}

export default DayWeather
