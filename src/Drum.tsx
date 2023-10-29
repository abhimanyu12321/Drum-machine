import { useState, useRef, useContext } from "react";
import { diplayContext } from "./App";

function Drum({
  url,
  keyTrigger,
  description,
}: {
  url: string;
  keyTrigger: string;
  description: string;
}) {
  const [clickFlag, setclickFlag] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { setdisplay, power } = useContext<MyContextData>(diplayContext);

  function handleClick() {
    setclickFlag(true);
    if (audioRef.current) audioRef.current.play();
    setdisplay(description);
    setTimeout(() => {
      setclickFlag(false);
    }, 150);
  }
  return (
    <button
      className="drum-pad"
      id={description}
      onClick={handleClick}
      onKeyDown={handleClick}
      disabled={!power}
      style={{
        backgroundColor: clickFlag ? "orange" : "grey",
        marginTop: clickFlag ? "13px" : "10px",
        height: clickFlag ? "77px" : "80px",
      }}
    >
      <audio className="clip" id={keyTrigger} src={url} ref={audioRef}></audio>
      {keyTrigger}
    </button>
  );
}

export default Drum;
