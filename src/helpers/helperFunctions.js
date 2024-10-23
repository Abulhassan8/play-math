const generateRandomNumber = (range) => {
  return Math.round((Math.random() * range)+1);
};

export{
  generateRandomNumber
}
