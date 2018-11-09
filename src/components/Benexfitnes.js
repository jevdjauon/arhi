import React from "react";
import Galerija from "./Galerija";
import slike from "./Slike";

const naslov = {
  color: "white",
  background: "rgba(30, 30, 30, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "50%",
  margin: "auto",
  minHeight: "50px",
  borderRadius: "5px"
};

const Benex = () => (
  <div
    style={{
      marginTop: "5%"
    }}
  >
    <div style={naslov}>
      <p style={{ textAlign: "center" }}>
        "Benex fitnes centar" u Capital Plaza Centru (Podgorica)
      </p>
    </div>
    <Galerija photos={slike.benex} />
  </div>
);
export default Benex;
