import IDateTime from "./base/datetime.interface";
import IWeather from "./base/weather.interface";

interface IWeeklyWeather extends IWeather, IDateTime {
    minTemperature: number;
    maxTemperature: number;
}

export default IWeeklyWeather;