import '../Assets/Styles/Question.scss';
import createQuestion from '../Actions/CreateQuestion';
import { useSelector } from "react-redux";

const DisplayQuestion = (props) => {

  return (
    <div className="question">
      {props.question}
    </div>
  )
}

export default DisplayQuestion;
