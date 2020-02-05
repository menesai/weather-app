import React, {Component} from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state ={
      weatherData: []
    }
  }

  componentDidMount(){
    this.fetchingWeater()
  }

  fetchingWeater = () => {
    const params = {
      access_key: '216b83b59e86240052cbff9a8c4688dd',
      query: 'Kaufman TX',
      units: 'f'
    }
    axios
    .get('http://api.weatherstack.com/current?access_key=216b83b59e86240052cbff9a8c4688dd&query=Kaufman%TX&units=f')
    .then(res => {
      // console.log(response.data)
      this.setState({weatherData: res.data})
    }).catch(error => {
      console.log(error)
    })
  }
  
  render(){
    return(
      <div>
        Hello
      </div>
    )
  }
}

export default App;
