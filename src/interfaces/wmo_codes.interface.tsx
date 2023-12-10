
// Defines the Current Weather Condition.  
// Contains a summary and an icon for particular weather condition i.e. day or night.
export interface CurrentCondition { 
    summary: string;
    icon: string;
}

// Defines the Weather Condition.
// Contains a CurrentCondition for both day and night.
export interface WeatherCondition {
	day: CurrentCondition
	night: CurrentCondition
}

export interface WMOCodeMap {
    [code: number]: WeatherCondition;
}
