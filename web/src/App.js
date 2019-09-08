import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Account from "./components/Account";
import Login from "./components/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { keys } from "./config/backend";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }
  componentWillMount() {
    let token = sessionStorage.getItem("token");
    if (!token || token === "") {
      this.setState({ loading: false });
      return;
    } else {
      fetch(`${keys.host}/auth/profile`, {
        method: "GET",
        headers: {
          Authorization: token
        }
      }).then(res =>
        res.json().then(data => {
          this.setState({ user: data, loading: false });
        })
      );
    }
  }
  render() {
    return (
      <BrowserRouter>
        <Header user={this.state.user} loading={this.state.loading} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/account"
            component={Account}
            user={this.state.user}
          />
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
