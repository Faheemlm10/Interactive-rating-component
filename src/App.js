import "./App.css";
import { useState } from "react";
import Img from "./Components/img";
import Button from "./Components/Button";
import Thanks from "./images/illustration-thank-you.svg";
import ThankYou from "./Components/ThankYou";

function App() {
  const [submitted, onsubmitted] = useState(false);
  const submitFunction = () => {
    onsubmitted(true);
  };

  const [Final, isFinal] = useState();

  const ratingFunction = (number) => {
    isFinal(number);
  };

  return (
    <>
      {!submitted && (
        <div className="container">
          <Img />
          <div className="text">
            <h2>How did we do?</h2>
            <p>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
          </div>
          <div className="rating">
            <Button number={1} ratingFunction={ratingFunction} />
            <Button number={2} ratingFunction={ratingFunction} />
            <Button number={3} ratingFunction={ratingFunction} />
            <Button number={4} ratingFunction={ratingFunction} />
            <Button number={5} ratingFunction={ratingFunction} />
          </div>
          <div className="submit-btn">
            <button className="submit" onClick={submitFunction}>
              SUBMIT
            </button>
          </div>
        </div>
      )}
      {submitted && <ThankYou ratedNumber={Final} />}
    </>
  );
}

export default App;
