import { useEffect, useState } from "react";
import "./App.css";

const cities = [
  { name: "Karachi", latitude: 24.8607, longitude: 67.0011 },
  { name: "Lahore", latitude: 31.5497, longitude: 74.3436 },
  { name: "Islamabad", latitude: 33.6844, longitude: 73.0479 },
  { name: "Faisalabad", latitude: 31.418, longitude: 73.079 },
  { name: "Rawalpindi", latitude: 33.5651, longitude: 73.0169 },
  { name: "Multan", latitude: 30.1575, longitude: 71.5249 },
  { name: "Peshawar", latitude: 34.0151, longitude: 71.5249 },
  { name: "Quetta", latitude: 30.1798, longitude: 66.975 },
  { name: "Sialkot", latitude: 32.4927, longitude: 74.5319 },
  { name: "Gujranwala", latitude: 32.1877, longitude: 74.1945 },
  { name: "Sukkur", latitude: 27.7052, longitude: 68.8574 },
  { name: "Hyderabad", latitude: 25.396, longitude: 68.3578 },
  { name: "Abbottabad", latitude: 34.1688, longitude: 73.2215 },
  { name: "Bahawalpur", latitude: 29.3956, longitude: 71.6836 },
  { name: "Sargodha", latitude: 32.0836, longitude: 72.6711 },
];

function App() {
  const [chosen, setChosen] = useState(cities[0]);
  const [weatherData, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { latitude, longitude } = chosen;
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=1f136667cfcdb418bf8b7a4c5a542f00`;
    setLoading(true);
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
        setLoading(false);
      });
  }, [chosen]);

  const handleCityChange = (e) => {
    setChosen(cities[e.target.value]);
  };

  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center min-h-screen bg-gray-100">
  //       <h1 className="text-4xl font-bold">Loading...</h1>
  //     </div>
  //   );
  // }

  const { main, weather, sys , name } = weatherData;
  const weatherIcon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  const temperature = Math.round(main.temp - 273.15);
  const feelsLike = Math.round(main.feels_like - 273.15);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center">
      <h1 className="text-3xl text-gray-800 font-bold mb-10">Weather App</h1>
      <select
        onChange={handleCityChange}
        className="p-3 mb-5 border rounded bg-white text-black"
      >
        {cities.map((data, ind) => (
          <option key={ind} value={ind}>
            {data.name}
          </option>
        ))}
      </select>

      <div className="bg-white bg-opacity-80 p-10 rounded-lg shadow-lg text-center">
        <img
          src={weatherIcon}
          alt={weather[0].description}
          className="mx-auto"
        />
        <h1 className="text-3xl font-bold underline my-2">{weather[0].main}</h1>
        <h2 className="text-2xl mb-4">
          {temperature}°C (Feels like: {feelsLike}°C)
        </h2>
        <div className="text-xl my-2 flex justify-between">
          <span className="font-semibold">Humidity:</span>
          <span>{main.humidity}%</span>
        </div>
        <div className="text-xl my-2 flex justify-between">
          <span className="font-semibold">Pressure:</span>
          <span>{main.pressure} hPa</span>
        </div>
        <div className="text-xl my-2 flex justify-between">
          <span className="font-semibold">Sunrise:</span>
          <span>{new Date(sys.sunrise * 1000).toLocaleTimeString()}</span>
        </div>
        <div className="text-xl my-2 flex justify-between">
          <span className="font-semibold">Sunset:</span>
          <span>{new Date(sys.sunset * 1000).toLocaleTimeString()}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
