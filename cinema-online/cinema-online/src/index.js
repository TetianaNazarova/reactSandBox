import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./index.css";
import App from "./App";
import StartRating from "./components/StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StartRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movies was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StartRating
      maxRating={5}
      messages={["Terrible", "Bad", "Ok", "Good", "Amazing"]}
    />
    <StartRating
      defaultRating={3}
      maxRating={10}
      size={24}
      color="red"
      className="test"
    />
    <StartRating />
    <Test /> */}
  </React.StrictMode>
);
