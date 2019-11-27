import React, {Component} from 'react'

export default class WeatherForecast extends Component{
    render(){
        return(
            <div className="weather__info">
                {
                    this.props.city && this.props.country && <p className="weather__key">Location: <span>{this.props.city}, {this.props.country}</span></p>  
                }

                {
                    this.props.humidity && <p className="weather__key">Humidity: <span>{this.props.humidity}</span></p>  
                }

                {
                    this.props.description && <p className="weather__key">Conditions: <span>{this.props.description}</span></p> 
                }

                {
                    this.props.temperature && <p className="weather__key">Temperature: <span>{this.props.temperature}</span></p>
                }

                {
                    this.props.error && <p>Error: <span>{this.props.error}</span></p>
                }
            </div>
        )
    }
}