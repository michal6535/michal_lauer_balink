import React, { useState, useEffect } from "react";
import moment from "moment";
import { fetchWeatherDataForSpecificDate } from "../../api/weather";
import countries from "../../constants/countries";
import Weather from "./weatherPerDate";
import "./weather.css";

const WeatherContainer = () => {
  const [data, setDate] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(
    Object.keys(countries)[1]
  );
  const [selectedDate, setSelectedDate] = useState(
    moment().format("YYYY-MM-DD")
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchWeatherDataForSpecificDate(
      selectedCountry,
      moment(selectedDate).format("YYYY/M/DD")
    ).then((d) => {
      setDate(d);
      setIsLoading(false);
    });
  }, [selectedCountry, selectedDate]);

  return (
    <Weather
      isLoading={isLoading}
      data={data}
      countries={countries}
      selectedCountry={selectedCountry}
      setSelectedCountry={setSelectedCountry}
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
    />
  );
};

export default WeatherContainer;
