export async function getTemperature(city) {
  const response = await fetch(`https://weather-api.com/temp?city=${city}`);
  const data = await response.json();
  return data.temperature;
}