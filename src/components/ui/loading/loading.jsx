import React from "react";
import loadingGif from "../../../assets/loading-gif.jpeg";
import "./loading.css";

const Loading = () => {
  return (
    <div className="loading-wrapper">
      <img src={loadingGif} alt="loading..." />
      <div>{"Loading"}</div>
    </div>
  );
};

export default Loading;
