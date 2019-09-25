// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a React Component
const App = () => {
  return (
    <div>
      <label htmlFor="name">Enter Name:</label>
      <input type="text" name="name" id="name" />
      <button type="submit" style={{ backgroundColor: "blue", color: "white" }}>
        Submit
      </button>
    </div>
  );
};

// Take the React component and show it on the screen
ReactDOM.render(<App />, document.getElementById("root"));
