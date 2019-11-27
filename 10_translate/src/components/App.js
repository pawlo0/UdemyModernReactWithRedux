import React, { Component } from "react";
import UserCreate from "./UserCreate";

export default class App extends Component {
  state = { language: "english" };

  onLanguageChange = language => this.setState({ language });

  render() {
    return (
      <div className="ui container">
        <div>
          Select Languange:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch")}
          />
        </div>
        <UserCreate />
      </div>
    );
  }
}
