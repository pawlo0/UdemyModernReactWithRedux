import React from "react";

class App extends React.Component {
  state = { language: "english" };

  render() {
    return <div>{this.state.language}</div>;
  }
}

export default App;
