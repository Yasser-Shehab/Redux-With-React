import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/index";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = (amount) => {
    dispatch(counterActions.increase(amount));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const increaseValue = 3;

  const counterBody = (
    <>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler.bind(null, increaseValue)}>
          Increase by {increaseValue}
        </button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    </>
  );

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && counterBody}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
