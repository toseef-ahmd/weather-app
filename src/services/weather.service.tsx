import axios from "axios";
import {IWeather} from "../interfaces/weather.interface";

export async function fetchWeatherData(): Promise<IWeather | Error> {
    try {
        // let {current, hourly, daily} : IWeather;
    
        //const url : string = "https://api.open-meteo.com/v1/forecast?latitude=65.01&longitude=25.47&current=temperature_2m,relative_humidity_2m,is_day,precipitation,weather_code,wind_speed_10m,wind_direction_10m&hourly=temperature_2m&daily=weather_code,temperature_2m_max,temperature_2m_min";
        
        const baseURL: string = "https://api.open-meteo.com/v1/forecast";

        const latitude: string = "65.01";
        const longitude: string = "25.47";

        const currentParams: string = "current=temperature_2m,relative_humidity_2m,is_day,precipitation,weather_code,wind_speed_10m,wind_direction_10m";
        const hourlyParams: string = "hourly=temperature_2m";
        const dailyParams: string = "daily=weather_code,temperature_2m_max,temperature_2m_min";

        const url: string = `${baseURL}?latitude=${latitude}&longitude=${longitude}&${currentParams}&${hourlyParams}&${dailyParams}`;

        
        const response = await axios.get<IWeather>(url);
        console.log('response new', response);
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