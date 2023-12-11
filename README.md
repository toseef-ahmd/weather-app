# Weather Dashboard

## Introduction

Welcome to Weather Dashboard, a demo weather application built with technologies like React, Vite, and TypeScript and Tailwind. The App fetches data from open-meteo and delivers real-time weather updates, weekly forecasts, and hourly temperature trends.

Visit live website on [https://weather-69cwsj03t-comsian106.vercel.app/](https://weather-69cwsj03t-comsian106.vercel.app/)
## Prerequisites

Before diving into Weather Dashboard, ensure you have the following prerequisites:

- Node.js installed on your machine
- npm (Node Package Manager)

## Installation

With the prerequisites in place, follow these steps to install Weather Dashboard:

1. Clone the repository:
git clone [https://github.com/toseef-ahmd/weather-app.git](https://github.com/toseef-ahmd/weather-app.git)

2. Navigate to the project directory:

  `cd weather-app`

4. Install dependencies:

  `npm install`

5. Linting

  `npm run lint`

  Checks for linting errors to ensure code consistency.

6. Format

  `npm run format`

  Formats the code using prettier.

## Running the Application

To launch Weather Dashboard in development mode:

1. Execute the command:
   
  `npm run dev`

3. The application will start on [http://localhost:3000](http://localhost:3000)


## Build

Execute `npm run build` for building the app.

## Built With

Weather Dashboard leverages a robust foundation of technologies:

- **React**: The JavaScript library for building user interfaces, ensuring a smooth and interactive experience
- **Vite**: The modern frontend build tool, handling rapid development and production-grade builds
- **TypeScript**: A typed superset of JavaScript, enhancing code readability, maintainability, and type safety
- **Tailwind CSS**: The utility-first CSS framework, empowering rapid custom designs without sacrificing flexibility

## Data Source

Weather data is sourced from [Open-Meteo](https://open-meteo.com/), a reliable weather API provider. Visit Open-Meteo for more details on their data services.

## Components

Weather Dashboard seamlessly integrates three key components:

- **Current Weather**: Displays real-time weather conditions, including temperature, humidity, and wind speed, providing a snapshot of the current weather situation.
- **Weekly Highlight**: Presents a comprehensive 7-day forecast, enabling users to plan ahead and prepare for the upcoming weather patterns.
- **Daily Component**: Renders inside the Weekly Component. each card representing one day.
- **Hourly Chart**: Visualizes temperature changes over the course of a day, offering insights into temperature trends and potential temperature fluctuations.

## Dependencies

The application relies on a carefully curated set of dependencies:

- `autoprefixer`: A PostCSS plugin that adds vendor prefixes to CSS rules for cross-browser compatibility
- `axios`: A Promise-based HTTP client for making efficient API requests
- `highcharts` & `highcharts-react-official`: A powerful tool for creating interactive charts, enhancing visual storytelling
- `lodash`: A comprehensive JavaScript utility library for common tasks and data manipulation
- `moment`: A robust date and time utility library for handling and formatting various date formats
- `postcss`: A tool for transforming styles with JavaScript plugins, enabling flexible CSS manipulation
- `react` & `react-dom`: The foundational libraries for building React applications
- `react-select`: A flexible and customizable Select Input control for enhancing user experience
- `tailwindcss`: The utility-first CSS framework for rapid and efficient UI development

## Scripts

Weather Dashboard provides various scripts for managing the application:

- `npm run dev`: Starts the development server on [http://localhost:3000](http://localhost:3000)
- `npm run test`: Executes the test suite to ensure code quality and functionality
- `npm run lint`: Checks the codebase for potential errors and enforces coding standards
- `npm run format`: Formats the code according to predefined code styles
  
## Credits 

[Meteocons](https://bas.dev/work/meteocons) for the svgs.
[stellasphere](https://gist.github.com/stellasphere) for WMO codes JSON file.

## Contributing

Contributions to Weather Dashboard are encouraged! For major changes, please open an issue to discuss your proposed changes.

## License

This project is open-sourced under the permissive MIT License, allowing for free usage and modification.

## Contact

If you have any questions or feedback, please feel free to reach out to me via [tauseefahmed92b@gmail.com](tauseefahmed92b@gmail.com)
