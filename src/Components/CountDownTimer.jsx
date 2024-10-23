import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";



const CountDownTimer = (props) => {
  const initialTimeInSeconds = 10;

  const [timer, setTimer] = useState(initialTimeInSeconds);

  const resetTimer = () => {
    const remainingTime = timer;
    setTimer(initialTimeInSeconds);
  }

  useEffect(() => {
    if(timer === 0) setTimer(null);

    if(!timer) return;

    let timerId = setInterval(() => {
    setTimer(timer-1);
  }, 1000);

  return () => clearInterval(timerId);
  }, [timer]);

  return(
    <div className="timer">
      {timer}
    </div>
  )
}

export default CountDownTimer;
