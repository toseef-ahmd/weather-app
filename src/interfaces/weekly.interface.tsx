import IDateTime from "./base/datetime.interface";
import IWeatherType from "./base/weather_type.interface";

interface IWeeklyWeather extends IWeatherType, IDateTime {
    minTemperature: number;
    maxTemperature: number;
}

export default IWeeklyWeather;