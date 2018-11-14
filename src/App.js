import React, { Component } from "react";
import "./App.css";
import { Image, Responsive } from "semantic-ui-react";
import Main from "./components/Main";
import Topbar from "./components/Topbar";
import TopbarRes from "./components/TopbarRes";
import back from "./images/back.jpg";
import back2 from "./images/back3.jpg";
import back3 from "./images/back2.jpg";
import back4 from "./images/back4.jpg";

class App extends Component {
  render() {
    return (
      <div className="main">
        <Responsive>
          <Topbar />
        </Responsive>
        <Responsive maxWidth={768}>
          <TopbarRes />
        </Responsive>
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
              src={back2}
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
              src={back3}
            />
          </Responsive>
        </div>

        <Main style={{ position: "absolute" }} />
      </div>
    );
  }
}

export default App;
