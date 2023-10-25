const initialState = {
  correctAnswer: 0,
  totalPoints: 0,
  isAnswerCorrect: false,
  level: 'level-one',
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
        question: payload.question,
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
    default:
      return state
  }
}

export default reducer
