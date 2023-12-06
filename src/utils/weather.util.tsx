
import {WMOCodeMap}  from '../interfaces/wmo_codes.interface';

// This will be used to use the units in the app
export const units = {
    'Celcius': '°C',
    'Fahrenheit': '°F',
};

// This will be used to convert the weather code to a weather type and icon

export const codes : WMOCodeMap = {
	0:{
		"day":{
			"summary":"Sunny",
			"icon":"http://openweathermap.org/img/wn/01d@2x.png"
		},
		"night":{
			"summary":"Clear",
			"icon":"http://openweathermap.org/img/wn/01n@2x.png"
		}
	},
	1:{
		"day":{
			"summary":"Mainly Sunny",
			"icon":"http://openweathermap.org/img/wn/01d@2x.png"
		},
		"night":{
			"summary":"Mainly Clear",
			"icon":"http://openweathermap.org/img/wn/01n@2x.png"
		}
	},
	2:{
		"day":{
			"summary":"Partly Cloudy",
			"icon":"http://openweathermap.org/img/wn/02d@2x.png"
		},
		"night":{
			"summary":"Partly Cloudy",
			"icon":"http://openweathermap.org/img/wn/02n@2x.png"
		}
	},
	3:{
		"day":{
			"summary":"Cloudy",
			"icon":"http://openweathermap.org/img/wn/03d@2x.png"
		},
		"night":{
			"summary":"Cloudy",
			"icon":"http://openweathermap.org/img/wn/03n@2x.png"
		}
	},
	45:{
		"day":{
			"summary":"Foggy",
			"icon":"http://openweathermap.org/img/wn/50d@2x.png"
		},
		"night":{
			"summary":"Foggy",
			"icon":"http://openweathermap.org/img/wn/50n@2x.png"
		}
	},
	48:{
		"day":{
			"summary":"Rime Fog",
			"icon":"http://openweathermap.org/img/wn/50d@2x.png"
		},
		"night":{
			"summary":"Rime Fog",
			"icon":"http://openweathermap.org/img/wn/50n@2x.png"
		}
	},
	51:{
		"day":{
			"summary":"Light Drizzle",
			"icon":"http://openweathermap.org/img/wn/09d@2x.png"
		},
		"night":{
			"summary":"Light Drizzle",
			"icon":"http://openweathermap.org/img/wn/09n@2x.png"
		}
	},
	53:{
		"day":{
			"summary":"Drizzle",
			"icon":"http://openweathermap.org/img/wn/09d@2x.png"
		},
		"night":{
			"summary":"Drizzle",
			"icon":"http://openweathermap.org/img/wn/09n@2x.png"
		}
	},
	55:{
		"day":{
			"summary":"Heavy Drizzle",
			"icon":"http://openweathermap.org/img/wn/09d@2x.png"
		},
		"night":{
			"summary":"Heavy Drizzle",
			"icon":"http://openweathermap.org/img/wn/09n@2x.png"
		}
	},
	56:{
		"day":{
			"summary":"Light Freezing Drizzle",
			"icon":"http://openweathermap.org/img/wn/09d@2x.png"
		},
		"night":{
			"summary":"Light Freezing Drizzle",
			"icon":"http://openweathermap.org/img/wn/09n@2x.png"
		}
	},
	57:{
		"day":{
			"summary":"Freezing Drizzle",
			"icon":"http://openweathermap.org/img/wn/09d@2x.png"
		},
		"night":{
			"summary":"Freezing Drizzle",
			"icon":"http://openweathermap.org/img/wn/09n@2x.png"
		}
	},
	61:{
		"day":{
			"summary":"Light Rain",
			"icon":"http://openweathermap.org/img/wn/10d@2x.png"
		},
		"night":{
			"summary":"Light Rain",
			"icon":"http://openweathermap.org/img/wn/10n@2x.png"
		}
	},
	63:{
		"day":{
			"summary":"Rain",
			"icon":"http://openweathermap.org/img/wn/10d@2x.png"
		},
		"night":{
			"summary":"Rain",
			"icon":"http://openweathermap.org/img/wn/10n@2x.png"
		}
	},
	65:{
		"day":{
			"summary":"Heavy Rain",
			"icon":"http://openweathermap.org/img/wn/10d@2x.png"
		},
		"night":{
			"summary":"Heavy Rain",
			"icon":"http://openweathermap.org/img/wn/10n@2x.png"
		}
	},
	66:{
		"day":{
			"summary":"Light Freezing Rain",
			"icon":"http://openweathermap.org/img/wn/10d@2x.png"
		},
		"night":{
			"summary":"Light Freezing Rain",
			"icon":"http://openweathermap.org/img/wn/10n@2x.png"
		}
	},
	67:{
		"day":{
			"summary":"Freezing Rain",
			"icon":"http://openweathermap.org/img/wn/10d@2x.png"
		},
		"night":{
			"summary":"Freezing Rain",
			"icon":"http://openweathermap.org/img/wn/10n@2x.png"
		}
	},
	71:{
		"day":{
			"summary":"Light Snow",
			"icon":"http://openweathermap.org/img/wn/13d@2x.png"
		},
		"night":{
			"summary":"Light Snow",
			"icon":"http://openweathermap.org/img/wn/13n@2x.png"
		}
	},
	73:{
		"day":{
			"summary":"Snow",
			"icon":"http://openweathermap.org/img/wn/13d@2x.png"
		},
		"night":{
			"summary":"Snow",
			"icon":"http://openweathermap.org/img/wn/13n@2x.png"
		}
	},
	75:{
		"day":{
			"summary":"Heavy Snow",
			"icon":"http://openweathermap.org/img/wn/13d@2x.png"
		},
		"night":{
			"summary":"Heavy Snow",
			"icon":"http://openweathermap.org/img/wn/13n@2x.png"
		}
	},
	77:{
		"day":{
			"summary":"Snow Grains",
			"icon":"http://openweathermap.org/img/wn/13d@2x.png"
		},
		"night":{
			"summary":"Snow Grains",
			"icon":"http://openweathermap.org/img/wn/13n@2x.png"
		}
	},
	80:{
		"day":{
			"summary":"Light Showers",
			"icon":"http://openweathermap.org/img/wn/09d@2x.png"
		},
		"night":{
			"summary":"Light Showers",
			"icon":"http://openweathermap.org/img/wn/09n@2x.png"
		}
	},
	81:{
		"day":{
			"summary":"Showers",
			"icon":"http://openweathermap.org/img/wn/09d@2x.png"
		},
		"night":{
			"summary":"Showers",
			"icon":"http://openweathermap.org/img/wn/09n@2x.png"
		}
	},
	82:{
		"day":{
			"summary":"Heavy Showers",
			"icon":"http://openweathermap.org/img/wn/09d@2x.png"
		},
		"night":{
			"summary":"Heavy Showers",
			"icon":"http://openweathermap.org/img/wn/09n@2x.png"
		}
	},
	85:{
		"day":{
			"summary":"Light Snow Showers",
			"icon":"http://openweathermap.org/img/wn/13d@2x.png"
		},
		"night":{
			"summary":"Light Snow Showers",
			"icon":"http://openweathermap.org/img/wn/13n@2x.png"
		}
	},
	86:{
		"day":{
			"summary":"Snow Showers",
			"icon":"http://openweathermap.org/img/wn/13d@2x.png"
		},
		"night":{
			"summary":"Snow Showers",
			"icon":"http://openweathermap.org/img/wn/13n@2x.png"
		}
	},
	95:{
		"day":{
			"summary":"Thunderstorm",
			"icon":"http://openweathermap.org/img/wn/11d@2x.png"
		},
		"night":{
			"summary":"Thunderstorm",
			"icon":"http://openweathermap.org/img/wn/11n@2x.png"
		}
	},
	96:{
		"day":{
			"summary":"Light Thunderstorms With Hail",
			"icon":"http://openweathermap.org/img/wn/11d@2x.png"
		},
		"night":{
			"summary":"Light Thunderstorms With Hail",
			"icon":"http://openweathermap.org/img/wn/11n@2x.png"
		}
	},
	99:{
		"day":{
			"summary":"Thunderstorm With Hail",
			"icon":"http://openweathermap.org/img/wn/11d@2x.png"
		},
		"night":{
			"summary":"Thunderstorm With Hail",
			"icon":"http://openweathermap.org/img/wn/11n@2x.png"
		}
	}
}
