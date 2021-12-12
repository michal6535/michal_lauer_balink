import React from "react";
import translate from "../../hooks/useTranslate";
import Select from "../../components/ui/select/select";
import Loading from "../../components/ui/loading/loading";
import Location from "../../components/location/location";
import DayDetails from "../../components/dayDetails/dayDetails";
import DaysTable from "../../components/daysTable/daysTable";
import "./weather.css";

const Weather = (props) => {
  const { isLoading, data, countries, selectedValue, handleChange } = props;

  return (
    <>
      <div className="header">
        <h1 className="title">{translate("InfoWeather")}</h1>
      </div>
      <Select
        list={countries}
        selectedValue={selectedValue}
        handleChange={handleChange}
      />
      {isLoading && <Loading />}
      {!isLoading && (
        <div className="body">
          <div className="table-header">
            <Location
              cityTitle={data?.title}
              countryTitle={data?.parent?.title}
            />
            <DayDetails
              time={data.time}
              sunSet={data.sun_set}
              sunRise={data.sun_rise}
            />
          </div>
          <DaysTable list={data?.consolidated_weather || []} />
        </div>
      )}
    </>
  );
};

export default Weather;
