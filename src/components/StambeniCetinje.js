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
  borderRadius: "5px",
  position: "sticky",
  top: "40px"
};

const Stambeni = () => (
  <div
    style={{
      marginTop: "5%"
    }}
  >
    <div style={naslov}>
      <p style={{ textAlign: "center" }}>Stambeni objekat (Cetinje)</p>
    </div>
    <Galerija photos={slike.stambeni} />
  </div>
);

export default Stambeni;
