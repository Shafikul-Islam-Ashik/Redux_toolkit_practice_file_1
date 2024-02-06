import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  manualSet,
  reset,
  set,
} from "../features/counterSlice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="container py-1">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1>Counter</h1>
          <hr />
          <h2>{count}</h2>
          <hr />
          <button
            className="btn btn-sm btn-warning"
            onClick={() => dispatch(decrement())}
          >
            --
          </button>
          <button
            className="btn btn-sm btn-info"
            onClick={() => dispatch(increment())}
          >
            ++
          </button>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => dispatch(reset())}
          >
            reset
          </button>
          <button
            className="btn btn-sm btn-primary"
            onClick={() => dispatch(set())}
          >
            set
          </button>
          <button
            className="btn btn-sm btn-success"
            onClick={() => dispatch(manualSet(3000))}
          >
            manual set
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
