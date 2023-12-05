import IDateTime from "./base/datetime.interface";
import ITemperature from "./base/temperature.interface";
import IWeather from "./base/weather.interface";

interface ICurrentWeather extends ITemperature, IDateTime, IWeather {
  windSpeed: number;
}

export default ICurrentWeather;