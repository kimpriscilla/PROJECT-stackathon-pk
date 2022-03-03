import React, { Component, useState, useEffect } from "react";
import { render } from "react-dom";
import axios from "axios";

function App() {
  //const [loading, setLoading] = useState(true);
  const [quotes, setQuotes] = useState("I love you");
  const [quotesArr, setQuotesArr] = useState(null);
  const [author, setAuthor] = useState("Priscilla");
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    const fetchQuotes = async () => {
      ///setLoading(true);
      try {
        const { data } = await axios.get("/api/quotes");
        setQuotesArr(data);
      } catch (error) {
        console.log(error);
      }
      //setLoading(false);
    };
    fetchQuotes();
  }, []);
  console.log("!!!!", quotesArr);
  console.log("woohoo", quotes);

  const generateRandomQuote = () => {
    let randomQuote = Math.floor(quotesArr.length * Math.random());
    setRandomNumber(randomQuote);
    setQuotes(quotesArr[randomQuote].quote);
    setAuthor(quotesArr[randomQuote].author);
    // console.log("??????", setQuotes(quotes[randomQuote].quote));
    console.log("am i diff?", quotes);
  };

  const speaker = () => {
    let utterance, voices;
    // voices = window.speechSynthesis.getVoices();
    console.log(voices);
    utterance = new SpeechSynthesisUtterance(`${quotes} by ${author}`);
    //utterance.voice = voices[59];
    speechSynthesis.speak(utterance);
  };

  const copy = () => {
    navigator.clipboard.writeText(`${quotes} `);
  };

  return (
    <>
      <section id="showcase">
        <video src="clouds.mp4" muted loop autoPlay></video>
        <div className="wrapper">
          <header> Quote of the day</header>
          <div className="content">
            <div className="quote-area">
              <div className="quote">{quotes}</div>
            </div>
            <div className="author">
              <span> ----</span>
              <span> {author}</span>
            </div>
          </div>
          <div className="buttons">
            <button onClick={() => generateRandomQuote()}>New Quote</button>
            <button onClick={() => speaker()}>Speak</button>
            <button onClick={() => copy()}>Copy</button>
          </div>
        </div>
      </section>
    </>
  );
}
render(<App />, document.querySelector("#root"));
