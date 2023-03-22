import { Button } from "@mui/material";
import { useState } from "react";
import {
  WeatherAppCelsius,
  WeatherAppDescription,
  WeatherAppForm,
  WeatherAppImage,
} from "../pages/WeatherApp";
import SearchBar from "../Searchbar";
import { CustomButton, PageHeader } from "../shared";
import { API_KEY } from "../shared/Constants";

const WeatherApp: React.FC<{}> = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");
  const [weatherDescription, setWeatherDescription] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const GetWeather = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    const data = await response.json();
    return data;
  };

  return (
    <div style={{}}>
      <PageHeader>Weather APP</PageHeader>

      <div style={{ width: "300px", marginLeft: "650px" }}>
        <SearchBar GetCity={handleChange} />
      </div>
      <WeatherAppForm>
        {weather ? (
          <WeatherAppCelsius>
            Forecast: {parseInt(weather)}
            &deg;C
          </WeatherAppCelsius>
        ) : (
          <WeatherAppCelsius>Forecast:</WeatherAppCelsius>
        )}

        {weather ? (
          <WeatherAppImage>
            <img
              src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
            />
          </WeatherAppImage>
        ) : (
          <WeatherAppImage sx={{ visibility: "hidden" }}>
            <img
              src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
            />
          </WeatherAppImage>
        )}

        <WeatherAppDescription>
          Description: {weatherDescription}
        </WeatherAppDescription>

        <CustomButton
          onClick={() =>
            GetWeather()
              .then((res) => {
                console.log(res);
                setWeather(res.main.temp);
                setWeatherIcon(res.weather[0].icon);
                setWeatherDescription(res.weather[0].description);
              })
              .catch((err) => console.log(err))
          }
        >
          Get Weather
        </CustomButton>
      </WeatherAppForm>
    </div>
  );
};
export default WeatherApp;
