const setPoints = (isAnswerCorrect, levelSelected) => {
  switch(levelSelected){
    case 'level-one':
      return {
        pointChange: isAnswerCorrect ? 3 : 0,
      };
    default:
      return {
        pointChange: 0,
      };
  }
};

export default setPoints;
