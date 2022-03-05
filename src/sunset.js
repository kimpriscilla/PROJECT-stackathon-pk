import React from "react";
import QuoteBox from "./quoteBox";

function Sunset() {
  return (
    <>
      <section id="showcase">
        <video src="sunset.mp4" muted loop autoPlay></video>
        <QuoteBox />
      </section>
    </>
  );
}

export default Sunset;
