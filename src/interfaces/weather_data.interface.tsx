import ICurrentWeather from "./current.interface";
import IWeeklyWeather from "./weekly.interface";
import IHourlyWeather from "./hourly.interface";

interface IWeatherData {
    current: ICurrentWeather;
    hourly: IHourlyWeather[];
    daily: IWeeklyWeather[];
}

export default IWeatherData;