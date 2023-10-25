import { useSelector } from "react-redux";

const DisplayPoints = () => {
  const totalPoints = useSelector((state) => state.totalPoints);

  return (
    <div className="total-points">
      Points : {totalPoints}
    </div>
  )
}

export default DisplayPoints;
