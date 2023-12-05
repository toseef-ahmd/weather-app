import axios from "axios";
import IWeather from "../interfaces/weather.interface";

export async function fetchWeatherData(): Promise<IWeatherData | Error> {
    try {
        let {current, hourly, daily} : IWeather;
    
        const url : string = "https://api.open-meteo.com/v1/forecast?latitude=65.01&longitude=25.47&current=temperature_2m,relative_humidity_2m,is_day,precipitation,weather_code,wind_speed_10m,wind_direction_10m&hourly=temperature_2m&daily=weather_code,temperature_2m_max,temperature_2m_min";
        const response = await axios.get<IWeather>(url);

        if (!response) {
            throw new Error("No response from the API");
        }

       // current.temperature = response.data.current.temperature_2m;


        return response.data;
    } catch (error) {
        throw new Error(
            `Error fetching weather data: ${error}`
        );
    }
  }