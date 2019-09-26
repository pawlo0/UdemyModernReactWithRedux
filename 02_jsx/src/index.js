// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React Component
const App = () => {
  const buttonText = { text: 'Click Me' };
  const labelText = 'Enter Name:';
  return (
    <div>
      <label htmlFor="name">{labelText}</label>
      <input type="text" name="name" id="name" />
      <button type="submit" style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the React component and show it on the screen
ReactDOM.render(<App />, document.getElementById('root'));
