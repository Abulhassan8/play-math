import GameMode1 from "./GameModes/GameMode1"

const ChooseComponentForMode = (level) => {
  switch(level){
    case 'level_one':
      return <GameMode1 />;
    default:
      return <GameMode1 />
  }
}

export default ChooseComponentForMode;
