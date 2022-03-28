import useClick from "../hooks/useClick";

export default function BigBox() {
  const {clickCoordinate, screen} = useClick();
  return (
    <div className="big-box" onClick={clickCoordinate} >
      {console.log(screen)}
      {screen.x > 0 && <div className="click" style={{left: `${screen.x}px`, top: `${screen.y}px`}}></div>}
    </div>
  );
}
