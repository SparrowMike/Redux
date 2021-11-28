import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, logged, reset } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(logged())}>
        {isLogged ? "Logout" : "Login"}
      </button>
      {isLogged && <h3>Valuable Information Only For Logged In </h3>}
    </div>
  );
}

export default App;
