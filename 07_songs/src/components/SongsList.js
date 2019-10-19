import React, { Component } from "react";
import { connect } from "react-redux";

export class SongsList extends Component {
  render() {
    return <div>Songs List</div>;
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongsList);
