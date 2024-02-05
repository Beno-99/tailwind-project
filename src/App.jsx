import React from "react";
import Carosel1 from "./components/carosel1/carosel1";
import Carosel2 from "./components/carosel2/carosel2";
import Carosel3 from "./components/carosel3/carosel3";
import Rating from "./components/Rating/Rating";
import Carosel4 from "./components/carosel4/carosel4.jsx";
import Carosel5 from "./components/carosel5/carosel5.jsx";
import Carosel6 from "./components/carosel6/carosel6.jsx";
import Carosel7 from "./components/carosel7/carosel7.jsx";



const App = ()=>{
  return (
    <>
      <Carosel1/>
      <Carosel2/>
      <Carosel3/>
      <Rating/>
      <Carosel4/>
      <Carosel5/>
      <Carosel6/>
      <Rating/>
      <Carosel7/>
    </>
  );
}

export default App;
