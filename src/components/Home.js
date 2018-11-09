import React from "react";

const Home = () => (
  <container
    style={{
      backgroundColor: "rgba(30, 30, 30, 0.5)"
    }}
  >
    {/* <div style={{ color: "black", position: "fixed" }} /> */}

    <div
      style={{
        margin: "5%",
        position: "absolute",
        marginLeft: "5%",
        color: "white",
        backgroundColor: "rgba(30, 30, 30, 0.5)",
        borderRadius: "5px"
      }}
    >
      {/* <h1>Dobro dosli</h1> */}
      <div style={{ margin: "3%" }}>
        <h1>Arhitektura… Dizajn… Kreacija… Umjetnost… Enterijer…</h1>
        <br />
        <h3>“An interior is the Natural projection of the soul” </h3>
        <h5>(Coco Chanel)</h5>
      </div>
    </div>
  </container>
);

export default Home;
