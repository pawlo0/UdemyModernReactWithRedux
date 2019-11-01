import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => (
  <div>
    Page One
    <br />
    <Link to="/pagetwo">Navigate to page Two</Link>
  </div>
);

const PageTwo = () => (
  <div>
    Page Two
    <br />
    <Link to="/">Navigate to page One</Link>
  </div>
);

const App = () => (
  <div>
    <BrowserRouter>
      <Route path="/" exact component={PageOne} />
      <Route path="/pagetwo" component={PageTwo} />
    </BrowserRouter>
  </div>
);

export default App;
