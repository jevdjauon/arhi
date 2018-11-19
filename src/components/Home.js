import React from "react";
import { Responsive } from "semantic-ui-react";

const contStyle = {
  backgroundColor: "rgba(30, 30, 30, 0.5)"
};

const divStyle = {
  position: "absolute",
  // marginTop: "40px",
  color: "white",
  backgroundColor: "#DFBE90",
  color: "#3B524F",
  minWidth: "50%",
  height: "100%"
};

const Home = () => (
  <div>
    <Responsive minWidth={1441}>
      <container style={contStyle}>
        <div style={divStyle}>
          <div style={{ margin: "3%" }}>
            <p>Arhitektura…</p>
            <p>Dizajn…</p>
            <p>Kreacija…</p>
            <p>Umjetnost…</p>
            <p>Enterijer…</p>
            <br />
            <h3>“An interior is the Natural projection of the soul” </h3>
            <h5>(Coco Chanel)</h5>
          </div>
        </div>
      </container>
    </Responsive>
    <Responsive maxWidth={1440} minWidth={769}>
      <container
        style={{
          // backgroundColor: "rgba(30, 30, 30, 0.5)",
          marginTop: "50%"
        }}
      >
        <div style={divStyle}>
          <div style={{ margin: "10%", fontSize: "25", fontWeight: "bold" }}>
            <p>Arhitektura…</p>
            <p>Dizajn…</p>
            <p>Kreacija…</p>
            <p>Umjetnost…</p>
            <p>Enterijer…</p>
            <br />
            <h3>“An interior is the Natural projection of the soul” </h3>
            <h5>(Coco Chanel)</h5>
          </div>
        </div>
      </container>
    </Responsive>
    <Responsive maxWidth={768} minWidth={601}>
      <container style={contStyle}>
        <div
          style={{
            margin: "5%",
            position: "absolute",
            marginLeft: "5%",
            marginTop: "10%",
            color: "white",
            backgroundColor: "rgba(30, 30, 30, 0.5)",
            borderRadius: "5px"
          }}
        >
          <div style={{ margin: "3%" }}>
            <p>Arhitektura…</p>
            <p>Dizajn…</p>
            <p>Kreacija…</p>
            <p>Umjetnost…</p>
            <p>Enterijer…</p>
            <br />
            <h3>“An interior is the Natural projection of the soul” </h3>
            <h5>(Coco Chanel)</h5>
          </div>
        </div>
      </container>
    </Responsive>
    <Responsive maxWidth={600}>
      <container style={contStyle}>
        <div
          style={{
            margin: "5%",
            position: "absolute",
            marginLeft: "5%",
            marginTop: "15%",
            color: "white",
            backgroundColor: "rgba(30, 30, 30, 0.5)",
            borderRadius: "5px"
          }}
        >
          <div style={{ margin: "3%" }}>
            <p>Arhitektura…</p>
            <p>Dizajn…</p>
            <p>Kreacija…</p>
            <p>Umjetnost…</p>
            <p>Enterijer…</p>
            <br />
            <h3>“An interior is the Natural projection of the soul” </h3>
            <h5>(Coco Chanel)</h5>
          </div>
        </div>
      </container>
    </Responsive>
  </div>
);

export default Home;
