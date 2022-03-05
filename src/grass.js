import React from "react";
import QuoteBox from "./quoteBox";

function Grass() {
  return (
    <>
      <section id="showcase">
        <video src="grass.mp4" muted loop autoPlay></video>
        <QuoteBox />
      </section>
    </>
  );
}

export default Grass;
