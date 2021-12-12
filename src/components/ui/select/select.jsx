import React from "react";
import translate from "../../../hooks/useTranslate";
import "./select.css";

const Select = (props) => {
  const { list, selectedValue, handleChange } = props;
  return (
    <div className="select-wrapper">
      <select
        name="select"
        id="select"
        value={selectedValue}
        onChange={(e) => {
          const value = e.target.value;
          if (value !== "select") handleChange(value);
        }}
      >
        {Object.entries(list).map(([value, text]) => (
          <option key={value} value={value}>
            {translate(text)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
