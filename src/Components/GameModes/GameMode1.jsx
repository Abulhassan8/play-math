import DisplayQuestion from "../DisplayQuestion";
import AnswerInput from "../AnswerInput";
import generateOperands from "../../Actions/GenerateOperands";

const GameMode1 = () => {
  const time = 20;
  let questionSet;
  const level = 'level_one';


  const generateQuestion = () => {
    const operand1 = generateOperands(level_one);
    const operand2 = generateOperands(level_one);
    const operator1 = "+";

    questionSet = {
      operands: [operand1, operand2],
      operators: [operator1],
    }
  }

  const handleAnswerSubmit = (enteredAnswer) => {
    
  }

  return (
    <div>
      <DisplayQuestion />
      <AnswerInput />
    </div>
  )
}

export default GameMode1;
