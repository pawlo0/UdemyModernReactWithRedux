import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = { lat: null, errMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errMessage: err.message })
    );
  }
  render() {
    if (!this.state.lat && this.state.errMessage) {
      return <div>Error: {this.state.errMessage}</div>;
    }
    if (this.state.lat && !this.state.errMessage) {
      return <div>Latitude: {this.state.lat}</div>;
    }
    return <div>Loading...</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
