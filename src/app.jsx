import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectLocale, setLocale } from "./store/reducers/appReducer";
import translate from "./hooks/useTranslate";
import { setMomentLocale } from "./locales";
import languages from "./constants/languages";
import Weather from "./pages/weather/weatherContainer";
import WeatherPerDate from "./pages/weatherPerDate/weatherPerDateContainer";
import Select from "./components/ui/select/select";
import "./app.css";

const App = () => {
  const [showWeatherText, setShowWeatherText] = useState('showWeatherPerDate');
  const [showWeather, setShowWeather] = useState(true);

  const locale = useSelector(selectLocale);
  const dispatch = useDispatch();

  useEffect(() => {
    setMomentLocale(locale);
  }, []);

  return (
    <>
      <Select
        list={languages}
        selectedValue={locale}
        handleChange={(newLocale) => {
          dispatch(setLocale(newLocale));
          setMomentLocale(newLocale);
        }}
      />
      <button onClick={() => {
        setShowWeatherText(showWeather ? 'showWeather' : 'showWeatherPerDate');
        setShowWeather(!showWeather);
      }}>
        {translate(showWeatherText)}
      </button >
      <div
        className="container"
        style={{ direction: locale === "he" ? "rtl" : "ltr" }}
      >
        {showWeather ? <Weather /> : <WeatherPerDate />}
      </div>
    </>
  );
};

export default App;

