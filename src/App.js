import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/counter";

const App = () => {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <center>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <code>{value}</code>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(incrementByAmount(value));
        }}
      >
        Double It
      </button>
    </center>
  );
};

export default App;
