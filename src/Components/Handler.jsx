import AnswerInput from "./AnswerInput";
import DisplayQuestion from "./DisplayQuestion";
import ShowResult from "./ShowResult";
import DisplayPoints from "./DisplayPoints";
import { useDispatch } from "react-redux";

const Handler = () => {
  const dispatch = useDispatch();

  dispatch({
    type: 'levelSelected',
    payload: {
      level: 'level-one'
    }
  })
  return (
    <div>
      <DisplayPoints />
      <DisplayQuestion />
      <ShowResult />
      <AnswerInput />
    </div>
  )
}

export default Handler;
