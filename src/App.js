import React, { Component } from "react";
import "./App.css";
import { Image, Responsive } from "semantic-ui-react";
import Main from "./components/Main";
import Topbar from "./components/Topbar";
import TopbarRes from "./components/TopbarResTest";
import back2 from "./images/back5.jpg";
import back3 from "./images/back2.jpg";

class App extends Component {
  render() {
    return (
      <div className="main">
        <Responsive>
          <Topbar />
          <Image
            style={{
              position: "fixed",
              zIndex: "-1",
              left: "0px",
              top: "0px",
              filter: "blur(5px)"
            }}
            src={back2}
          />
          <Main style={{ position: "absolute" }} />
        </Responsive>
        <Responsive maxWidth={768}>
          <TopbarRes />
          <Image
            style={{
              position: "fixed",
              zIndex: "-1",
              left: "0px",
              top: "0px",
              filter: "blur(5px)",
              height: "100%",
              width: "auto"
            }}
            src={back3}
          />
          <Main style={{ position: "absolute" }} />
        </Responsive>
      </div>
    );
  }
}

export default App;
