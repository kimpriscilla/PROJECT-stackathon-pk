import React, { useState, useEffect } from "react";
import axios from "axios";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import { IconButton } from "@mui/material";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

function QuoteBox() {
  //const [loading, setLoading] = useState(true);
  const [quotes, setQuotes] = useState("Let's take it slow, one at a time");
  const [quotesArr, setQuotesArr] = useState(null);
  const [author, setAuthor] = useState("Prof");
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

  const generateRandomQuote = () => {
    let randomQuote = Math.floor(quotesArr.length * Math.random());
    setRandomNumber(randomQuote);
    setQuotes(quotesArr[randomQuote].quote);
    setAuthor(quotesArr[randomQuote].author);
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
    navigator.clipboard.writeText(`"${quotes}"`);
  };

  return (
    <>
      <section id="quoteBox">
        <div className="wrapper">
          <header
            style={{
              fontFamily: "PT Sans Narrow",
              fontWeight: 700,
              fontSize: 40,
              color: "white",
            }}
          >
            {" "}
            Quote{" "}
          </header>
          <div className="content">
            <div className="quote-area">
              <div className="quote">
                <span
                  style={{
                    fontFamily: "PT Sans Narrow",
                    fontSize: 35,
                    fontWeight: 400,
                    color: "white",
                  }}
                >
                  {} {`" ${quotes} "`}
                </span>
              </div>
            </div>
            <div className="author">
              <i
                className="bi bi-dash"
                style={{ fontSize: 30, fontWeight: "bold", color: "white" }}
              ></i>
              <span
                style={{
                  fontFamily: "PT Sans Narrow",
                  fontSize: 25,
                  color: "white",
                }}
              >
                {" "}
                {author}
              </span>
            </div>
          </div>
          <div className="buttons">
            <IconButton onClick={() => generateRandomQuote()}>
              <FavoriteRoundedIcon
                size="small"
                variant="outlined"
                sx={{ color: "white" }}
              />
            </IconButton>
            <IconButton onClick={() => speaker()}>
              <CampaignOutlinedIcon
                fontSize="medium"
                sx={{ color: "white" }}
                // sx={{ pl: "10px" }}
              />
            </IconButton>
            <IconButton onClick={() => copy()}>
              <ContentCopyOutlinedIcon
                fontSize="medium"
                sx={{ color: "white" }}
                // sx={{ pl: "10px" }}
              />
            </IconButton>
          </div>
        </div>
      </section>
    </>
  );
}

export default QuoteBox;
