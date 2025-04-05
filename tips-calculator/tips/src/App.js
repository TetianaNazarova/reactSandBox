import { useState } from "react";

import "./App.css";
import BillPrice from "./components/BillPrice";
import LikeServiceTool from "./components/LikeServiceTool";
import Pay from "./components/Pay";
import Reset from "./components/Reset";

function App() {
  const [value, setValue] = useState("");
  const [likeValue, setLikeValue] = useState(0);
  const [likeFriendValue, setLikeFriendValue] = useState(0);

  const tips =
    Number(value) * ((Number(likeValue) + Number(likeFriendValue)) / 2 / 100);

  function handleReset() {
    setValue("");
    setLikeValue(0);
    setLikeFriendValue(0);
  }

  return (
    <>
      <BillPrice value={value} onSetValue={setValue} />

      <LikeServiceTool likeValue={likeValue} onSetLikeValue={setLikeValue}>
        How did you like the service?
      </LikeServiceTool>

      <LikeServiceTool
        likeValue={likeFriendValue}
        onSetLikeValue={setLikeFriendValue}
      >
        How did your friend like the service?
      </LikeServiceTool>

      {value > 0 && <Pay bill={Number(value)} tips={tips} />}

      <Reset onReset={handleReset} />
    </>
  );
}

export default App;
