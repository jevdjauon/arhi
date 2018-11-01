import React from "react";
import Oaza from "./Oaza";
import Ambasada from "./Ambasada";
import Atlas from "./Atlas";
import Bogdanov from "./Bogdanov";
import Benexfitnes from "./Benexfitnes";
import StambeniCetinje from "./StambeniCetinje";
import Planinski from "./Planinski";
import Vila from "./Vila";

import slika1 from "../images/Oaza/1A.jpg";
import slika2 from "../images/Oaza/2A.jpg";
import slika3 from "../images/Oaza/3A.jpg";
import slika4 from "../images/Oaza/4A.jpg";
import slika5 from "../images/Oaza/5A.jpg";
import slika6 from "../images/Oaza/6.jpg";
import slika7 from "../images/Oaza/7A.jpg";
import slika8 from "../images/Oaza/8A.jpg";
import slika9 from "../images/Oaza/9A.jpg";
import slika10 from "../images/Oaza/10A.jpg";
import slika11 from "../images/Oaza/11A.jpg";
import slika12 from "../images/Oaza/12A.jpg";

import slike from "../slike";

// const slike = {
//   oaza: [
//     { src: slika1, width: 6, height: 4 },
//     { src: slika2, width: 6, height: 4 },
//     { src: slika3, width: 6, height: 4 },
//     { src: slika4, width: 6, height: 4 },
//     { src: slika5, width: 6, height: 4 },
//     { src: slika6, width: 6, height: 4 },
//     { src: slika7, width: 6, height: 4 },
//     { src: slika8, width: 6, height: 4 },
//     { src: slika9, width: 6, height: 4 },
//     { src: slika10, width: 6, height: 4 },
//     { src: slika11, width: 6, height: 4 },
//     { src: slika12, width: 6, height: 4 }
//   ]
// };

// const photos = [
//   { src: slika1, width: 6, height: 4 },
//   { src: slika2, width: 6, height: 4 },
//   { src: slika3, width: 6, height: 4 },
//   { src: slika4, width: 6, height: 4 },
//   { src: slika5, width: 6, height: 4 },
//   { src: slika6, width: 6, height: 4 },
//   { src: slika7, width: 6, height: 4 },
//   { src: slika8, width: 6, height: 4 },
//   { src: slika9, width: 6, height: 4 },
//   { src: slika10, width: 6, height: 4 },
//   { src: slika11, width: 6, height: 4 },
//   { src: slika12, width: 6, height: 4 }
// ];
// console.log(slika1);

const Portfolio = () => (
  <div>
    <Oaza photos={slike.oaza} />
    <Ambasada />
    <Atlas />
    <Bogdanov />
    <Benexfitnes />
    <StambeniCetinje />
    <Planinski />
    <Vila />
  </div>
);

export default Portfolio;
