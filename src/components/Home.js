import React from "react";
import { Responsive } from "semantic-ui-react";

const divStyle = {
  margin: "5%",
  position: "absolute",
  marginLeft: "5%",
  color: "white",
  backgroundColor: "rgba(30, 30, 30, 0.5)",
  borderRadius: "50"
};

const contStyle = {
  backgroundColor: "rgba(30, 30, 30, 0.5)"
};

const Home = () => (
  <div>
    <Responsive minWidth={1441}>
      <container style={contStyle}>
        <div style={divStyle}>
          <div style={{ margin: "3%" }}>
            <h1>Arhitektura… Dizajn… Kreacija… Umjetnost… Enterijer…</h1>
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
          backgroundColor: "rgba(30, 30, 30, 0.5)",
          marginTop: "50%"
        }}
      >
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
            <h1>Arhitektura… Dizajn… Kreacija… Umjetnost… Enterijer…</h1>
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
            <h1>Arhitektura… Dizajn… Kreacija… Umjetnost… Enterijer…</h1>
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
            <h1>Arhitektura… Dizajn… Kreacija… Umjetnost… Enterijer…</h1>
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
