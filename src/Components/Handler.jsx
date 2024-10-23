import AnswerInput from "./AnswerInput";
import DisplayQuestion from "./DisplayQuestion";
import ShowResult from "./ShowResult";
import DisplayPoints from "./DisplayPoints";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ChooseComponentForMode from "./ChooseComponent";

const Handler = () => {
  const level = useSelector((state) => state.level);
  const ComponentToRender = ChooseComponentForMode(level);

  return (
    <div>
      <DisplayPoints />
      <ShowResult />
      {ComponentToRender}
    </div>
  )
}

export default Handler;
