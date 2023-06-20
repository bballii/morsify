import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [encoded, setEncoded] = useState("");

  const morsify = () => {
    const morsify = require("morsify");
    let encoded = morsify.encode(text);
    setEncoded(encoded);
    const audio = morsify.audio(text);
    audio.play(); // play audio
    audio.stop(); // comment to stop audio
  };

  return (
    <div className="App">
      <h1>MORSIFY</h1>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <br />
      <button onClick={(e) => morsify()}>MORSIFY</button>
      <br />
      <br />
      {encoded && <div className="output">{encoded ? encoded : ""}</div>}
    </div>
  );
}
