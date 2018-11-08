import React, { Component } from "react";
import "./App.css";
import { Image, Responsive } from "semantic-ui-react";
import Main from "./components/Main";
import Topbar from "./components/Topbar";
import back from "./images/back.jpg";

class App extends Component {
  render() {
    return (
      <div className="main">
        <Topbar />
        <div>
          <Responsive>
            <Image
              style={{
                position: "fixed",
                zIndex: "-1",
                left: "0px",
                top: "0px",
                filter: "blur(5px)"
              }}
              src={back}
            />
          </Responsive>
          <Responsive maxWidth={768}>
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
              src={back}
            />
          </Responsive>
        </div>

        <Main style={{ position: "absolute" }} />
      </div>
    );
  }
}

export default App;
