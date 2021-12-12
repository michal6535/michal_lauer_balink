import React from "react";
import translate from "../../hooks/useTranslate";
import { baseUrl } from "../../api/weather";
import { getDayText } from "../../utils/dateUtils";
import { trunc, round1dec, round } from "../../utils/unitConversion";
import { CELCIUS } from "../../utils/unitConversion";
import "./daysTable.css";

const DaysTable = (props) => {
  const { list } = props;

  return (
    <div className="table">
      {list.map((item, i) => {
        return (
          <div className="column" key={i}>
            <div className="day-text">{getDayText(item.applicable_date)}</div>
            <div className="img-wrapper">
              <img
                src={`${baseUrl}/static/img/weather/${item.weather_state_abbr}.svg`}
                alt="img"
              />
              <div>{item.weather_state_name}</div>
            </div>
            <div>
              {translate("Max:", {
                maxTemp: trunc(item.max_temp),
                celcius: CELCIUS,
              })}
            </div>
            <div>
              {translate("Min:", {
                minTemp: trunc(item.min_temp),
                celcius: CELCIUS,
              })}
            </div>
            <div>
              <h5>{translate("Humidity")}</h5>
              <div>{trunc(item.humidity)}%</div>
            </div>
            <div>
              <h5>{translate("Visibility")}</h5>
              <div>
                {translate("visibilityMiles", {
                  milesNumber: round1dec(item.visibility),
                })}
              </div>
            </div>
            <div>
              <h5>{translate("Pressure")}</h5>
              <div>
                {translate("airPressure", {
                  airPressureNumber: round(item.air_pressure),
                })}
              </div>
            </div>
            <div>
              <h5>{translate("Confidence")}</h5>
              <div>{round(item.predictability)}%</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DaysTable;
