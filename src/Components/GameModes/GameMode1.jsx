import DisplayQuestion from "../DisplayQuestion";
import AnswerInput from "../AnswerInput";
import generateOperands from "../../Actions/GenerateOperands";
import CreateQuestion from "../../Actions/CreateQuestion";
import { generateRandomNumber } from "../../helpers/helperFunctions";
import { useState } from 'react';
import {evaluate} from "mathjs";
import { useDispatch } from "react-redux";
import DisplayPoints from "../DisplayPoints";
import ShowResult from "../ShowResult";

import '../../Assets/Styles/GameMode1.scss';
import CountDownTimer from "../CountDownTimer";

const GameMode1 = () => {
  const dispatch = useDispatch();

  const [questionNumber, setQuestionNumber] = useState(1);
  dispatch({
    type: 'questionNumber',
    payload: {
      questionNumber,
    },
  })

  const questionSetGenerated = `${generateRandomNumber(50)} + ${generateRandomNumber(50)}`;

  dispatch({
    type: 'setQuestion',
    payload: {
      questionSetGenerated,
    },
  })
  const correctAnswer = evaluate(questionSetGenerated);

  dispatch({
    type: 'correctAnswer',
    payload: {
      correctAnswer,
    },
  })

  const handleAfterSubmit1 = () => {
    setQuestionNumber(questionNumber+1);

  }

  return (
    <div className="game-mode-1">
      <CountDownTimer resetTimer={re}/>
      <DisplayQuestion question={questionSetGenerated} />
      <AnswerInput handleAfterSubmit={handleAfterSubmit1}/>
    </div>
  )
}

export default GameMode1;
