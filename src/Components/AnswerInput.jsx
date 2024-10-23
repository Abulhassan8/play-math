import { useState, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";

import setPoints from '../Actions/calculatePoints';
import HandleAfterSubmit from '../Actions/HandleAfterSubmit';
import '../Assets/Styles/AnswerInput.scss';

const AnswerInput = (props) => {
  const dispatch = useDispatch();
  const correctAnswer = useSelector((state) => state.correctAnswer);
  const levelSelected = useSelector((state) => state.level);
  const [enteredAnswer, setEnteredAnswer] = useState('');
  const [message, setMessage] = useState('');

  const answerInputRef = useRef(null);

  const handleAnswerInput = (event) => {
    setEnteredAnswer(event.target.value.trim());
  }

  const handleAnswerSubmit = (event) => {
    event.preventDefault();

    if(enteredAnswer != ''){
      const enteredAnswerInt = parseInt(enteredAnswer);
      const isAnswerCorrect = enteredAnswerInt === correctAnswer;
      const payload = setPoints(isAnswerCorrect, levelSelected);

      dispatch({
        type: 'updatePoints',
        payload,
      });

      dispatch({
        type: 'updateTimer',
        payload: {
          timeLeft: 10,
        },
      });

      setMessage('');

      props.handleAfterSubmit();
      answerInputRef.current.focus();
    }
    else {
      setMessage('No answer entered 🙂');
    }
    setEnteredAnswer('');
  }

  return (
    <form onSubmit={handleAnswerSubmit} >
      <div className="input-form">
        <input
          type="text"
          ref={answerInputRef}
          autoFocus={true}
          value={enteredAnswer}
          onChange={handleAnswerInput}
          className="answer-input"
        />
        {message}
        <div className="input-buttons">
          <button type="submit" className="submit-button" >Submit</button>
          <button type="reset" className="reset-button">Skip</button>
        </div>
      </div>
    </form>
  )
}

export default AnswerInput;
