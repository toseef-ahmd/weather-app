import axios from "axios";
import IWeatherData from "../interfaces/weather_data.interface";

export async function fetchWeatherData(): Promise<IWeatherData | Error> {
    try {
        let {current, hourly, daily} : IWeatherData;
    
        const url : string = "https://api.open-meteo.com/v1/forecast?latitude=65.01&longitude=25.47&current=temperature_2m,relative_humidity_2m,is_day,precipitation,weather_code,wind_speed_10m,wind_direction_10m&hourly=temperature_2m&daily=weather_code,temperature_2m_max,temperature_2m_min";
        const response = await axios.get<IWeatherData>(url);

        if (!response) {
            return new Error("No response");
        }
        return response.data;
    } catch (error) {
        return new Error(
            `Error fetching weather data: ${error.message as string}`
        );
    }
    return null;
  }