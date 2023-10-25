import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import setPoints from '../Actions/calculatePoints';

const AnswerInput = () => {
  const dispatch = useDispatch();
  const correctAnswer = useSelector((state) => state.correctAnswer);
  const levelSelected = useSelector((state) => state.level);
  const [enteredAnswer, setEnteredAnswer] = useState('');

  const handleAnswerInput = (event) => {
    setEnteredAnswer(parseInt(event.target.value))
  }

  const handleAnswerSubmit = (event) => {
    event.preventDefault();

    const isAnswerCorrect = enteredAnswer === correctAnswer;
    const payload = setPoints(isAnswerCorrect, levelSelected);

    dispatch({
      type: 'updatePoints',
      payload,
    });
    
  }

  return (
    <form onSubmit={handleAnswerSubmit}>
      <div>
        <div>
          <button type="submit">Submit</button>
          <button type="reset">Skip</button>
        </div>
        <input
          type="number"
          autoFocus={true}
          value={enteredAnswer}
          onChange={handleAnswerInput}
          className="answer-input"
        />
      </div>
    </form>
  )
}

export default AnswerInput;
