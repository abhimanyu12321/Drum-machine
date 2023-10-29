import "./App.css";
import { useState, createContext } from "react";
import Drum from "./Drum";

export const diplayContext = createContext<MyContextData>({
  display: "",
  setdisplay: () => {},
  power: false,
});

const audioClips: audio = {
  items: [
    {
      keyTrigger: "Q",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      description: "Heater 1",
    },
    {
      keyTrigger: "W",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      description: "Heater 2",
    },
    {
      keyTrigger: "E",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      description: "Heater 3",
    },
    {
      keyTrigger: "A",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      description: "Heater 4",
    },
    {
      keyTrigger: "S",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      description: "Clap",
    },
    {
      keyTrigger: "D",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      description: "Open HH",
    },
    {
      keyTrigger: "Z",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      description: "Kick n' Hat",
    },
    {
      keyTrigger: "X",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      description: "Kick",
    },
    {
      keyTrigger: "C",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      description: "Closed HH",
    },
  ],
};

function App() {
  const [display, setdisplay] = useState("");
  const [power, setpower] = useState(true);

  function handlePower() {
    setpower(!power);
  }
  return (
    <diplayContext.Provider value={{ display, setdisplay, power }}>
      <div className="inner-container" id="drum-machine">
        <div className="pad-bank">
          {audioClips.items.map((item) => (
            <Drum
              url={item.url}
              keyTrigger={item.keyTrigger}
              key={item.keyTrigger}
              description={item.description}
            />
          ))}
        </div>
        <div className="logo">
          <div className="inner-logo ">FCC&nbsp;</div>
          <i className="inner-logo fa fa-free-code-camp"></i>
        </div>
        <div className="controls-container">
          <div className="control">
            <p>Power</p>
            <div className="select" onClick={handlePower}>
              <div
                className="inner"
                style={{ float: power ? "right" : "left" }}
              ></div>
            </div>
          </div>
          <p id="display">{display}</p>
        </div>
      </div>
    </diplayContext.Provider>
  );
}

export default App;
