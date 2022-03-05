import React from "react";
import QuoteBox from "./quoteBox";

function Galaxy() {
  return (
    <>
      <section id="showcase">
        <video src="galaxy.mp4" muted loop autoPlay></video>
        <QuoteBox />
      </section>
    </>
  );
}

export default Galaxy;
