const generateOperands = (level) => {
  switch(level){
    case 'level_one':
      return Math.round((Math.random() * 50)+1);
    default:
      return Math.round((Math.random() * 50)+1);
  }
};

export default generateOperands;
