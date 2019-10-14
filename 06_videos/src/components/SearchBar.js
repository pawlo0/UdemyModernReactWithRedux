import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { searchTerm: "" };

  onInputChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    //this.props.onSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              onChange={this.onInputChange}
              value={this.state.searchTerm}
            />
          </div>
        </form>
      </div>
    );
  }
}
