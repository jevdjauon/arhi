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

const Bogdanov = () => (
  <div
    style={{
      marginTop: "5%"
    }}
  >
    <div style={naslov}>
      <p style={{ textAlign: "center" }}>
        Stambeno-poslovni objekat "Bogdanov kraj" (Cetinje)
      </p>
    </div>
    <Galerija photos={slike.bogdanov} />
  </div>
);

export default Bogdanov;
