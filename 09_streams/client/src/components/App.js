import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const PageOne = () => <div>Page One</div>;

const PageTwo = () => <div>Page Two</div>;

const App = () => (
  <div>
    <BrowserRouter>
      <Route path="/" exact component={PageOne} />
      <Route path="/pagetwo" component={PageTwo} />
    </BrowserRouter>
  </div>
);

export default App;
