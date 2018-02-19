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
      .get("wp-json/cmtemplate/v1/device")
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
        <div>
          <h1> {data && data.apiKey}</h1>
        </div>
        {/* <header className="App-header">
          {this.state.show && (
            <img
              src={this.state.data && this.state.data.avatar_url}
              className="App-logo"
              alt="logo"
            />
          )}
          <h1 className="App-title">
            {this.state.data && this.state.data.login}
          </h1>
          <button
            onClick={() => {
              this.toggle()
            }}
          >
            Click
          </button>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    )
  }
}

export default App
