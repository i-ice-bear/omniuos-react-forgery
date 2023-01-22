import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactHtmlParser from "react-html-parser";
import "./styles.css";
import text from "./text.js";
import Article from "./article";

const WORDS_PER_MINUTE = 250;

const ReadTime = ({ checkpoint, totalWords }) => {
  const time = Math.ceil(totalWords / WORDS_PER_MINUTE); // Divison of total words... 4
  return <div className="readtime">{time - checkpoint} Minutes left</div>; // * checkpoint ?
};

function App() {
  const [checkpoint, setCheckpoint] = useState(0);
  const [parsed, setParsed] = useState(undefined);
  const [totalWords, setTotalWords] = useState(0);

  useEffect(() => {
    const allText = text.html;
    const words = allText.split(" ");
    setTotalWords(words.length);

    const wordCheckpoints = words.map((word, index) =>
      index > 0 && index % WORDS_PER_MINUTE === 0
        ? `<span class="checkpoint" data-checkpoint="${index /
            WORDS_PER_MINUTE}">${word}</span>`
        : word
    );
    const squashed = wordCheckpoints.join(` `);
    setParsed(squashed);
  }, []);

  useEffect(() => {
    const checkpoints = document.querySelectorAll(".checkpoint");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          const checkpointHTMLElement = entry.target;
          setCheckpoint(checkpointHTMLElement.getAttribute("data-checkpoint"));
        }
      });
    });

    checkpoints.forEach(checkpoint => {
      observer.observe(checkpoint);
    });
  }, [parsed]);

  return (
    <div className="App">
      <ReadTime checkpoint={checkpoint} totalWords={totalWords} />
      <Article className="article">
        {parsed ? ReactHtmlParser(parsed) : undefined}
      </Article>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);



const customLogic = () =>{
    const [changeText, setChangeText] = React.useState("");
  const [totalWords, setTotalWords] = React.useState(0);
  const [checkpoint, setCheckpoint] = React.useState(0);
  const [parsed, setParsed] = React.useState("");

  React.useEffect(() => {
    const allText = changeText;
    const words = allText.split(" ");
    setTotalWords(words.length);

    const wordCheckpoints = words.map((word, index) =>
      index > 0 && index % WORDS_READ_TIME === 0
        ? `<span class="checkpoint" data-checkpoint="${index /
        WORDS_READ_TIME}">${word}</span>`
        : word
    );
    
    // const wordCheckpoints = words.map((word, index) =>
    //   index > 0 && index % WORDS_PER_MINUTE === 0
    //     ? `<span class="checkpoint" data-checkpoint="${index /
    //         WORDS_PER_MINUTE}">${word}</span>`
    //     : word
    // );


    const squashed = wordCheckpoints.join(` `)
    setParsed(squashed)
  }, []);

  React.useEffect(() => {
    const checkpoints = document.querySelectorAll(".checkpoint");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          setCheckpoint(entry.intersectionRatio / WORDS_READ_TIME);
        }
      });
    });

    checkpoints.forEach(checkpoint => {
      observer.observe(checkpoint);
    });
  }, [parsed]);

}