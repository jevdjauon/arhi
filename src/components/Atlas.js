import React from "react";
import Galerija from "./Galerija";
import slike from "./Slike";

const naslov = {
  color: "black",
  background: "rgba(219, 197, 137, 0.9)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "50%",
  margin: "auto",
  minHeight: "50px",
  borderRadius: "0px 0px 5px 5px",
  position: "sticky",
  top: "40px"
};

const Atlas = () => (
  <div
    style={{
      marginTop: "5%"
    }}
  >
    <div style={naslov}>
      <p style={{ textAlign: "center" }}>
        Atlas Banka u Capital Plaza Centru (Podgorica)
      </p>
    </div>
    <Galerija photos={slike.atlas} />
  </div>
);

export default Atlas;
