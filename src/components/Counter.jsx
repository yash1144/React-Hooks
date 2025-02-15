import { useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../slice/counterSlice";
import { useTheme } from "../context/ThemeContext";

function Counter({ styles }) {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const { state: { isDark } } = useTheme();

  const handleIncrement = useCallback(() => {
    dispatch(increment());
  }, [dispatch]);

  const handleDecrement = useCallback(() => {
    dispatch(decrement());
  }, [dispatch]);


  const doubleCount = useMemo(() => count * 2, [count]);

  return (
    <div style={styles.counterContainer}>
      <h2 style={styles.heading}>Counter Component</h2>
      <p style={styles.text}>Current Count: {count}</p>
      <p style={styles.text}>Double Count: {doubleCount}</p>
      <button style={styles.counterButton} onClick={handleIncrement}>Increment</button>
      <button style={styles.counterButton} onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default Counter;
