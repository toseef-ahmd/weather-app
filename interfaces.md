# Weather Data Interfaces Documentation
## Overview

This documentation outlines the structure of various interfaces used to represent weather data in the application. These interfaces are crucial for handling and displaying weather-related information like current conditions, daily forecasts, and hourly weather data. The interfaces are designed while keeping SOLID principles in mind. Specifically Interface Segregation Principle. so that functionality is kept separate.

## Interfaces

### IWeatherInfo

  IWeatherInfo is a basic interface for representing general weather information.

  Fields:'
  
  summary: string - A brief description of the weather condition.
  
  icon: string - The identifier for a graphical representation of the weather condition (e.g., sunny, cloudy).


### ITemperature

  ITemperature represents temperature data.`

  Fields:
  
  temperature: number - The current temperature.`


### IDateTime

  IDateTime provides date and time information in the context of weather data.

  Fields:
  
  datetime: Date - The specific date and time, represented as a Date object.

### ICurrentWeather

ICurrentWeather extends multiple interfaces to provide a comprehensive view of the current weather conditions.

  Fields:
  
  Inherits temperature from ITemperature.
  
  Inherits summary and icon from IWeatherInfo.
  
  Inherits datetime from IDateTime.
  
  windSpeed: number - The speed of the wind in the given unit (e.g., km/h, mph).
  
  windDirection: number - The direction of the wind in degrees.
  
  humidity: number - The humidity level as a percentage.
  
  precipitation: number - The precipitation amount.`

### IDailyWeather

IDailyWeather extends IWeatherInfo and IDateTime for daily weather forecasts.

  Fields:
  
  Inherits summary and icon from IWeatherInfo.
  
  Inherits datetime from IDateTime.
  
  minTemperature: number - The minimum expected temperature for the day.
  
  maxTemperature: number - The maximum expected temperature for the day.`

### IHourlyWeather
  IHourlyWeather extends ITemperature and IDateTime, specifically for hourly weather data.

  Fields:
  
  Inherits temperature from ITemperature.
  
  Inherits datetime from IDateTime.`
  
  Additional fields can be included as needed (e.g., humidity, apparent_temperature).
