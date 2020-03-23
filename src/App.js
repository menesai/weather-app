import React, {Component} from 'react';
import axios from 'axios'
import SearchForm from './components/SearchForm/SearchForm'
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state ={
      weatherData: [],
      weatherData2: [],
      city: '',
      st: '',
      data: ['dsd'],

    }
  }

  componentDidMount(){
    const {city, st} = this.state
    if(city === '' ||  st === ''){
      console.log('data needs to bee filled')
    } else {
      this.fetchingWeater()
    }
  }

  fetchingWeater = () => {
    const {city, st} = this.state
     axios
    .get(`http://api.weatherstack.com/current?access_key=216b83b59e86240052cbff9a8c4688dd&query=${city}%${st}&units=f`)
    .then(res => {
      console.log(res.data)
      this.setState({
        weatherData: [res.data.current],
        weatherData2: [res.data.location]
      })
    }).catch(error => {
      console.log(error)
    })
  }

  handleChange = (e) => {
  this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.fetchingWeater()
    // alert(`you submitted ${this.state.city}`)
  }

  displayData = data => 
  data.map((el, id) => {
    // console.log(el.temperature)
      return (
        <div key={id} className={el.is_day === 'yes' ? 'day' : 'night'}>
            <ul>
              <li>{el.temperature} F</li>
              <li>{el.feelslike}</li>
              <li>{el.humidity} %</li>
              <li>{el.wind_speed} mph</li>
              <li>{el.humidity}</li>
            </ul>
          </div>
        )
  })
  
  
displayData2 = (data) => 
  data.map((el,id) => {
  return (
    <div key={id}>
      <h1>{el.name}, {el.region}</h1>
    </div>
  )
})

  render(){
    const {weatherData, weatherData2, data} = this.state

    if(data.weatherData === 0 && weatherData2.length === 0){
      return(
        <div className='container'>
          {this.displayData2(weatherData2)}
          {this.displayData(weatherData)}
        </div>
      )

    } else {
      return (        
       <div>
          NO data
          <SearchForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            />
      </div>
      )
    }

  }
}

export default App;
