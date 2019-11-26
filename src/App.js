import React, {Component} from 'react'
import GeoLocation from './components/geolocation.js'
import Form from './components/form.js'
import WeatherForecast from './components/weatherForecast.js'
import './App.css';

const REACT_APP_WEATHER_API_KEY="28ccc8212815bf01425b9246846753f0"
export default class App extends Component{
  state ={
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async(e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${REACT_APP_WEATHER_API_KEY}&units=metric`)
    const data = await apiCall.json()
    if(city && country){
      console.log(data)
      this.setState({
        temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ''
      })
    } else {
      this.setState({
        temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: 'please enter the values'
      })
    }
}
  render(){
    return (
      <div className="App">
       <Form getWeather={this.getWeather}/>
       <WeatherForecast 
         temperature={this.state.temperature}
         city={this.state.city}
         country={this.state.country}
         humidity={this.state.humidity}
         description={this.state.description}
         error={this.state.error}
       />
      </div>
    );
  }
}


