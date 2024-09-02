import { useEffect, useState } from "react";
import "./App.css";
import WeatherInfo from "./components/Weather";

const popularCities = [
  "Karachi",
  "Tokyo",
  "New York",
  "Paris",
  "London",
  "Shanghai",
  "Los Angeles",
  "Beijing",
  "Mumbai",
  "Moscow",
  "Hong Kong",
  "São Paulo",
  "Dubai",
  "Singapore",
  "Bangkok",
  "Istanbul",
  "Sydney",
  "Seoul",
  "Mexico City",
  "Berlin",
  "Madrid",
];

function App() {
  const [chosen, setChosen] = useState(popularCities[0]);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${chosen}&appid=1f136667cfcdb418bf8b7a4c5a542f00`
    )
      .then((res) => res.json())
      .then((res) => {
        setWeatherData(res);
        setLoading(false);
      });
  }, [chosen]);

  const handleCityChange = (e) => {
    setChosen(e.target.value);
  };


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center">
      <h1 className="text-3xl text-gray-800 font-bold mb-10">Weather App</h1>
      <select
        onChange={handleCityChange}
        value={chosen}
        className="p-3 mb-5 border rounded bg-white text-black"
      >
        {popularCities.map((data, ind) => (
          <option key={ind} value={data}>
            {data}
          </option>
        ))}
      </select>

      {!weatherData ? (
        <div className="h-96 flex justify-center items-center">
          <h1>Loading...</h1>
        </div>
      ) : (
        <WeatherInfo weatherData={weatherData} />
      )}
    </div>
  );
}

export default App;
