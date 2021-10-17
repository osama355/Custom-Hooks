import "./styles.css";
import useCounter from "./Hooks/useCounter";
import List from "./Hooks/List/list";
import MainHover from "./Hooks/Hover/mainHover";

export default function App() {
  // const { count, increment, decrement } = useCounter(0);
  return (
    // <div className="App">
    //   <h1>{count}</h1>
    //   <button onClick={increment}>Inc</button>
    //   <button onClick={decrement}>Dec</button>
    // </div>

    // <div>
    //   <List />
    // </div>

    <div>
      <MainHover />
    </div>
  );
}
