# ReactWeather

ReactWeather is a web application that displays real-time weather information using the OpenWeather API. Built with React and SCSS, it provides users with an intuitive and visually appealing interface to access weather data for different locations.

## Features

- Real-time Weather: Fetches weather data from the OpenWeather API to display current weather conditions, including temperature, humidity, wind speed, and description.

- Location Search: Allows users to search for weather information by entering the name of a city or location.

- Responsive Design: Offers a responsive layout that adapts to different screen sizes and devices.

## Technologies Used

- React: JavaScript library for building user interfaces.
- SCSS: CSS preprocessor for styling and customizing the application's appearance.
- OpenWeather API: API service to retrieve weather data based on location.

## Installation

1. Clone the repository: git clone [Github Repo link](https://github.com/your-username/reactweather.git)
2. Navigate to the project directory: cd reactweather
3. Install dependencies: npm install
4. Obtain an API key from the OpenWeather website by creating an account.
5. Enter your api key in tempapp.jsx url: https://api.openweathermap.org/data/2.5/weather?q=${search}&appid={your_api_key}
6. Start the development server: npm start

## Usage

1. Launch the application by running `npm start` in the project directory.
2. Open your web browser and navigate to http://localhost:3000.
3. Enter the name of a city or location in the search bar and press Enter.
   The application will display the current weather.

## Contributing

Contributions to ReactWeather are welcome and encouraged! If you find any issues or would like to propose enhancements, please submit a pull request.

## Acknowledgments

- [OpenWeather](https://openweathermap.org/) for providing the weather data API.
- [React](https://react.dev/) for the JavaScript library.
