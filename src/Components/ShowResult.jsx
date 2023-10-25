import { useSelector } from "react-redux";

const ShowResult = () => {
  const correctAnswer = useSelector(state => state.correctAnswer);
  const enteredAnswer = useSelector(state => state.enteredAnswer);

  const isAnswerCorrect = correctAnswer === enteredAnswer;

  return (
    <div>
      {isAnswerCorrect}
    </div>
  )
}

export default ShowResult;
