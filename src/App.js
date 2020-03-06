import React, {Component} from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state ={
      weatherData: [],
      weatherData2: [],
    }
  }

  componentDidMount(){
    this.fetchingWeater()
  }

  fetchingWeater = () => {
    axios
    .get('http://api.weatherstack.com/current?access_key=216b83b59e86240052cbff9a8c4688dd&query=Kaufman%TX&units=f')
    .then(res => {
      // console.log(res.data)
      this.setState({
        weatherData: [res.data.current],
        weatherData2: [res.data.location]
      })
    }).catch(error => {
      console.log(error)
    })
  }


  render(){
  let displayData = this.state.weatherData.map((el, id) => {
      console.log(el.temperature)
      if(!this.state.weatherData){
        return (
          <div>
            <p>Loading data...</p>
          </div>
        )
      } else {
        return (
          <div key={id}>
            <ul>
              <li>{el.temperature} F</li>
              <li>{el.feelslike}</li>
              <li>{el.humidity} %</li>
              <li>{el.wind_speed} mph</li>
              <li>{el.humidity}</li>
            </ul>
          </div>
        )
      }
    })

    let displayData2 = this.state.weatherData2.map((el,id) => {
      return (
        <div key={id}>
          <h1>{el.name}, {el.region}</h1>
        </div>
      )
    })

    return(
      <div>
        {displayData2}
        {displayData}

      </div>
    )
  }
}

export default App;
