export default class Config {
  constructor() {
    this.API_KEY = 'http://api.openweathermap.org/data/2.5/weather?q={city}&APPID={API-Key}&units=imperial';
  }

  getKey() {
    return this.API_KEY;
  }
}