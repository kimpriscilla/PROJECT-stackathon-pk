import React from "react";
import QuoteBox from "./quoteBox";

function Forest() {
  return (
    <>
      <section id="showcase">
        <video src="forest.mp4" muted loop autoPlay></video>
        <QuoteBox />
      </section>
    </>
  );
}

export default Forest;
