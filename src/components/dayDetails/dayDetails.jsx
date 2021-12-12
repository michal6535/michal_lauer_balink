import React from "react";
import translate from "../../hooks/useTranslate";
import { getTimeText } from "../../utils/dateUtils";
import "./dayDetails.css";

const DayDetails = (props) => {
  const { time, sunRise, sunSet } = props;

  return (
    <div className="details">
      <div
        dangerouslySetInnerHTML={{
          __html: translate("Time", { timeNumbers: getTimeText(time) }),
        }}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: translate("Sunrise", { timeNumbers: getTimeText(sunRise) }),
        }}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: translate("Sunset", { timeNumbers: getTimeText(sunSet) }),
        }}
      />
    </div>
  );
};

export default DayDetails;
