import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import axios from "axios"

class App extends Component {
  state = {
    data: null,
    show: true
  }

  toggle = () => {
    this.setState({ show: !this.state.show })
  }

  componentDidMount() {
    axios
      .get(`${window.wp_home_url.base_url}/wp-json/cmtemplate/v1/device`)
      .then(response => {
        this.setState({ data: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {

    const { data } = this.state

    return (
      <div className="App">

        {data &&
          (
            <div>
              <h1> <span>Api key: </span> {data.apiKey}</h1>
              <h1> <span>App id: </span> {data.appId}</h1>
              <h1> <span>device id: </span> {data.deviceId}</h1>
            </div>
          )
        }

      </div>
    )
  }
}

export default App
