import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Oaza from "./Oaza";
import Ambasada from "./Ambasada";
import Atlas from "./Atlas";
import Benexfitnes from "./Benexfitnes";
import Bogdanov from "./Bogdanov";
import Vila from "./Vila";
import Planinski from "./Planinski";
import StambeniCetinje from "./StambeniCetinje";
import Portfolio from "./Portfolio";

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/oaza" component={Oaza} />
        <Route path="/ambasada" component={Ambasada} />
        <Route path="/atlas" component={Atlas} />
        <Route path="/benexfitnes" component={Benexfitnes} />
        <Route path="/bogdanov" component={Bogdanov} />
        <Route path="/vila" component={Vila} />
        <Route path="/planinski" component={Planinski} />
        <Route path="/stambenicetinje" component={StambeniCetinje} />
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
    );
  }
}

export default Main;
