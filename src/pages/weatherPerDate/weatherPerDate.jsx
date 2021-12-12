import React from "react";
import translate from "../../hooks/useTranslate";
import Select from "../../components/ui/select/select";
import Loading from "../../components/ui/loading/loading";
import Location from "../../components/location/location";
import DaysTable from "../../components/daysTable/daysTable";
import "./weather.css";

const Weather = (props) => {
  const {
    isLoading,
    data,
    countries,
    selectedCountry,
    setSelectedCountry,
    selectedDate,
    setSelectedDate,
  } = props;

  const day = data?.[0];

  return (
    <>
      <div className="header">
        <h1 className="title">{translate("InfoWeather")}</h1>
      </div>
      <div className="selections">
        <Select
          list={countries}
          selectedValue={selectedCountry}
          handleChange={setSelectedCountry}
        />
        <input
          type="date"
          id="start"
          value={selectedDate}
          onChange={(e) => {
            setSelectedDate(e.target.value);
          }}
        />
      </div>
      {isLoading && <Loading />}
      {!isLoading && (
        <div className="body">
          <div className="table-header">
            <Location
              cityTitle={data?.title}
              countryTitle={data?.parent?.title}
            />
          </div>
          <DaysTable list={day ? [day] : []} />
        </div>
      )}
    </>
  );
};

export default Weather;
