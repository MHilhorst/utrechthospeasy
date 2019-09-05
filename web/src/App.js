import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Account from "./components/Account";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/account" component={Account} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
