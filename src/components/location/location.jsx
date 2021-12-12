import React from "react";
import "./location.css";

const Location = (props) => {
  const { cityTitle, countryTitle } = props;

  return (
    <div className="location">
      <h3>{cityTitle}</h3>
      <h5>
        {countryTitle ? ", " : ""}
        {countryTitle}
      </h5>
    </div>
  );
};

export default Location;
