export const baseUrl = "https://www.metaweather.com";
export const locationUrl = "/api/location/";

export const fetchWeatherData = async (woeid) => {
  const url = `${baseUrl}${locationUrl}${woeid}/`;
  return await (await fetch(url)).json();
};


export const fetchWeatherDataForSpecificDate = async (woeid, date) => {
  const url = `${baseUrl}${locationUrl}${woeid}/${date}/`;
  return await (await fetch(url)).json();
};
