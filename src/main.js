import React from "react";
import QuoteBox from "./quoteBox";

function Main() {
  return (
    <>
      <section id="showcase">
        <video src="clouds.mp4" muted loop autoPlay></video>
        <QuoteBox />
      </section>
    </>
  );
}

export default Main;
