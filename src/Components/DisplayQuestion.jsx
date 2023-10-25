import '../Assets/Styles/Question.scss';
import createQuestion from '../Actions/CreateQuestion';

const DisplayQuestion = () => {
  const level = 'level-one';
  console.log("Display Question Called....");
  const questionGenerated = createQuestion(level);

  return (
    <div className="question">
      {questionGenerated}
    </div>
  )
}

export default DisplayQuestion;
