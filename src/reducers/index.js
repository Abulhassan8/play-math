const initialState = {
  correctAnswer: 0,
  totalPoints: 0,
  isAnswerCorrect: false,
  level: 'level-one',
  questionNumber: 0,
  timeLeft: 10,
};

const reducer = (state = initialState, action) => {
  const actionType = action.type;
  const payload = action.payload;

  switch (actionType) {
    case 'levelSelected':
      return {
        ...state,
        level: payload.level,
      }
    case 'correctAnswer':
      return {
        ...state,
        correctAnswer: payload.correctAnswer,
      }
    case 'setQuestion':
      return {
        ...state,
        question: payload.questionSetGenerated,
      }
    case 'isAnswerCorrect':
      return {
        ...state,
        isAnswerCorrect: payload.isAnswerCorrect,
      }
    case 'increasePoints':
      return {
        ...state,
        totalPoints: state.totalPoints + payload.pointChange,
      }
    case 'decreasePoints':
      return {
        ...state,
        totalPoints: state.totalPoints - payload.pointChange,
      }
    case 'updatePoints':
      console.log("Update Points calld ", payload);
      return {
        ...state,
        totalPoints: state.totalPoints + payload.pointChange,
      }
    case 'updateTimer':
      console.log("update timer called")
      return {
        ...state,
        timeLeft: payload.timeLeft,
      }
    case 'questionNumber':
      return {
        ...state,
        questionNumber: state.questionNumber + payload.questionNumber,
      }
    default:
      return state
  }
}

export default reducer
