import { useDispatch, useSelector } from "react-redux";
import { makeGreen, makeRed, makeYellow } from "../features/bgSlice";

const Bg = () => {
  const { bg } = useSelector((state) => state.bg);
  const dispatch = useDispatch();
  return (
    <div style={{ padding: "50px", background: bg }}>
      <button onClick={() => dispatch(makeRed())}>red</button>
      <button onClick={() => dispatch(makeGreen())}>green</button>
      <button onClick={() => dispatch(makeYellow())}>yellow</button>
    </div>
  );
};

export default Bg;
