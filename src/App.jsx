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
  const [chosen, setChosen] = useState({
    name: "Karachi",
    latitude: 24.8607,
    longitude: 67.0011,
  });
  const [weatherData, setWeather] = useState({
    main: {},
    weather: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { latitude, longitude } = chosen;
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=1f136667cfcdb418bf8b7a4c5a542f00`;
    setLoading(true);
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data), setLoading(false);
      });
  }, [chosen]);

  const { main, weather } = weatherData;
  console.log(weather);


  return (
    <div>
      <h1 className="text-3xl text-center my-10 font-medium">Weather App</h1>
      <select
        onChange={(e) => setChosen(cities[e.target.value])}
        name="cities"
        className="border p-3"
      >
        {cities.map((data, ind) => (
          <option key={ind} value={ind}>
            {data.name}
          </option>
        ))}
      </select>
      {
        loading ? 
        <h1 className="text-center my-5">Loading....</h1> 
        :
      <div>
        <h1 className="text-3xl my-2 underline">Weather : {weather[0].main}</h1>
        <h1 className="text-3xl my-2 underline">
          Current Weather : {Math.round(main?.temp - 273.15)}
          <sup>o</sup>C{" "}
        </h1>
        <h1 className="text-3xl my-2 underline">
          Feels Like : {Math.round(main?.feels_like - 273.15)}
          <sup>o</sup>C{" "}
        </h1>
      </div>
      }
    </div>
  );
}

export default App;
