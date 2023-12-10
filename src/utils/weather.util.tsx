/* eslint-disable react-refresh/only-export-components */

import {WMOCodeMap}  from '../interfaces/wmo_codes.interface';

// This will be used to use the units in the app
export const units = {
    'C': '°C',
    'F': '°F',
};


// This will be used to convert the weather code to a weather type and icon
export const weatherCodesMap : WMOCodeMap = {
	0:{
		"day":{
			"summary":"Sunny",
			"icon":"clear-day.svg"
		},
		"night":{
			"summary":"Clear",
			"icon":"clear-night.svg"
		}
	},
	1:{
		"day":{
			"summary":"Mainly Sunny",
			"icon":"clear-day.svg"
		},
		"night":{
			"summary":"Mainly Clear",
			"icon":"clear-night.svg"
		}
	},
	2:{
		"day":{
			"summary":"Partly Cloudy",
			"icon":"partly-cloudy-day.svg"
		},
		"night":{
			"summary":"Partly Cloudy",
			"icon":"partly-cloudy-night.svg"
		}
	},
	3:{
		"day":{
			"summary":"Cloudy",
			"icon":"overcast.svg"
		},
		"night":{
			"summary":"Cloudy",
			"icon":"overcast.svg"
		}
	},
	45:{
		"day":{
			"summary":"Foggy",
			"icon":"fog-day.svg"
		},
		"night":{
			"summary":"Foggy",
			"icon":"fog-night.svg"
		}
	},
	48:{
		"day":{
			"summary":"Rime Fog",
			"icon":"fog.svg"
		},
		"night":{
			"summary":"Rime Fog",
			"icon":"fog.svg"
		}
	},
	51:{
		"day":{
			"summary":"Light Drizzle",
			"icon":"drizzle.svg"
		},
		"night":{
			"summary":"Light Drizzle",
			"icon":"drizzle.svg"
		}
	},
	53:{
		"day":{
			"summary":"Drizzle",
			"icon":"overcast-drizzle.svg"
		},
		"night":{
			"summary":"Drizzle",
			"icon":"overcast-drizzle.svg"
		}
	},
	55:{
		"day":{
			"summary":"Heavy Drizzle",
			"icon":"extreme-drizzle.svg"
		},
		"night":{
			"summary":"Heavy Drizzle",
			"icon":"extreme-drizzle.svg"
		}
	},
	56:{
		"day":{
			"summary":"Light Freezing Drizzle",
			"icon":"partly-cloudy-day-sleet.svg"
		},
		"night":{
			"summary":"Light Freezing Drizzle",
			"icon":"partly-cloudy-night-sleet.svg"
		}
	},
	57:{
		"day":{
			"summary":"Freezing Drizzle",
			"icon":"overcast-sleet.svg"
		},
		"night":{
			"summary":"Freezing Drizzle",
			"icon":"overcast-sleet.svg"
		}
	},
	61:{
		"day":{
			"summary":"Light Rain",
			"icon":"rain.svg"
		},
		"night":{
			"summary":"Light Rain",
			"icon":"rain.svg"
		}
	},
	63:{
		"day":{
			"summary":"Rain",
			"icon":"overcast-rain.svg"
		},
		"night":{
			"summary":"Rain",
			"icon":"overcast-rain.svg"
		}
	},
	65:{
		"day":{
			"summary":"Heavy Rain",
			"icon":"extreme-rain.svg"
		},
		"night":{
			"summary":"Heavy Rain",
			"icon":"extreme-rain.svg"
		}
	},
	66:{
		"day":{
			"summary":"Light Freezing Rain",
			"icon":"sleet.svg"
		},
		"night":{
			"summary":"Light Freezing Rain",
			"icon":"sleet.svg"
		}
	},
	67:{
		"day":{
			"summary":"Freezing Rain",
			"icon":"overcast-sleet.svg"
		},
		"night":{
			"summary":"Freezing Rain",
			"icon":"overcast-sleet.svg"
		}
	},
	71:{
		"day":{
			"summary":"Light Snow",
			"icon":"snow.svg"
		},
		"night":{
			"summary":"Light Snow",
			"icon":"snow.svg"
		}
	},
	73:{
		"day":{
			"summary":"Snow",
			"icon":"overcast-snow.svg"
		},
		"night":{
			"summary":"Snow",
			"icon":"overcast-snow.svg"
		}
	},
	75:{
		"day":{
			"summary":"Heavy Snow",
			"icon":"extreme-snow.svg"
		},
		"night":{
			"summary":"Heavy Snow",
			"icon":"extreme-snow.svg"
		}
	},
	77:{
		"day":{
			"summary":"Snow Grains",
			"icon":"snow.svg"
		},
		"night":{
			"summary":"Snow Grains",
			"icon":"snow.svg"
		}
	},
	80:{
		"day":{
			"summary":"Light Showers",
			"icon":"partly-cloudy-day-rain.svg"
		},
		"night":{
			"summary":"Light Showers",
			"icon":"partly-cloudy-night-rain.svg"
		}
	},
	81:{
		"day":{
			"summary":"Showers",
			"icon":"overcast-day-rain.svg"
		},
		"night":{
			"summary":"Showers",
			"icon":"overcast-night-rain.svg"
		}
	},
	82:{
		"day":{
			"summary":"Heavy Showers",
			"icon":"extreme-rain.svg"
		},
		"night":{
			"summary":"Heavy Showers",
			"icon":"extreme-rain.svg"
		}
	},
	85:{
		"day":{
			"summary":"Light Snow Showers",
			"icon":"partly-cloudy-day-snow.svg"
		},
		"night":{
			"summary":"Light Snow Showers",
			"icon":"partly-cloudy-night-snow.svg"
		}
	},
	86:{
		"day":{
			"summary":"Snow Showers",
			"icon":"overcast-day-snow.svg"
		},
		"night":{
			"summary":"Snow Showers",
			"icon":"overcast-night-snow.svg"
		}
	},
	95:{
		"day":{
			"summary":"Thunderstorm",
			"icon":"thunderstorm.svg"
		},
		"night":{
			"summary":"Thunderstorm",
			"icon":"thunderstorm.svg"
		}
	},
	96:{
		"day":{
			"summary":"Light Thunderstorms With Hail",
			"icon":"thunderstorms-day-snow.svg"
		},
		"night":{
			"summary":"Light Thunderstorms With Hail",
			"icon":"thunderstorms-night-snow.svg"
		}
	},
	99:{
		"day":{
			"summary":"Thunderstorm With Hail",
			"icon":"thunderstorms-overcast-day-snow.svg"
		},
		"night":{
			"summary":"Thunderstorm With Hail",
			"icon":"thunderstorms-overcast-night-snow.svg"
		}
	}
}
