import {evaluate} from "mathjs";
import { useDispatch } from "react-redux";

const generateOperand = (range) => {
  return Math.round((Math.random() * range)+1);
};

const generateQuestionWithLevel = (level) =>{
  switch(level){
    case 'level-one':
      return `${generateOperand(50)} + ${generateOperand(50)}`;
    case 'leve-two':
      return `${generateOperand(100)} + ${generateOperand(100)}`;
    default:
      return `${generateOperand(50)} + ${generateOperand(50)}`;
  }
};

const CreateQuestion = (level) => {
  const dispatch = useDispatch();
  const questionSetGenerated = generateQuestionWithLevel(level);
  const correctAnswer = evaluate(questionSetGenerated);

  dispatch({
    type: 'correctAnswer',
    payload: {
      correctAnswer,
    },
  })

  return questionSetGenerated;
};

export default CreateQuestion;
