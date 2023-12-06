import {WeatherCondition} from './weather_condition.interface';

export interface WMOCodeMap {
    [code: number]: WeatherCondition;
}
