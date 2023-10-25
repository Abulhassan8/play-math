const HandleEnteredAnswer = (isAnswerCorrect, dispatch) => {

  const dispatchObject = isAnswerCorrect ? {
    type: 'increasePoints',
    payload: {
      pointChange: 5,
    }
  } : {
    type: 'decreasePoints',
    payload: {
      pointChange: 1,
    }
  }
  
  dispatch(dispatchObject);
}

export default HandleEnteredAnswer;
