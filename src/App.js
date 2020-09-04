import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import Characters from "./containers/Characters";
import Episodes from "./containers/Episodes";
import Quotes from "./containers/Quotes";
import ScrollToTop from "./components/UI/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <section className="container">
        <Switch>
          <Route path="/" component={Characters} exact />
          <Route path="/episodes" component={Episodes} exact />
          <Route path="/quotes" component={Quotes} exact />
        </Switch>
      </section>
    </Router>
  );
}

export default App;
