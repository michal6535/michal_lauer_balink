import React, { useState, useEffect } from "react";
import { fetchWeatherData } from "../../api/weather";
import countries from "../../constants/countries";
import Weather from "./weather";
import "./weather.css";

const WeatherContainer = () => {
  const [data, setDate] = useState([]);
  const [selectedValue, setSelectedValue] = useState(Object.keys(countries)[1]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchWeatherData(selectedValue).then((d) => {
      setDate(d);
      setIsLoading(false);
    });
  }, [selectedValue]);

  return (
    <Weather
      isLoading={isLoading}
      data={data}
      countries={countries}
      selectedValue={selectedValue}
      handleChange={setSelectedValue}
    />
  );
};

export default WeatherContainer;
