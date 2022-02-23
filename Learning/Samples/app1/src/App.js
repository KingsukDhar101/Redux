import "./App.css";
import { incNumber, decNumber, mulTen, divTen } from "./actions/action";
import { useDispatch, useSelector } from "react-redux";
import Rectangle from "./Rectangle";

function App() {
  const dispatch = useDispatch();

  let count = useSelector((state) => state.ChangeNum);
  let count2 = useSelector((state) => state.Multiply10);

  function handleInc() {
    console.log("increment call");
    dispatch(incNumber(5));
  }
  function handleDec() {
    console.log("decrement call");
    dispatch(decNumber());
  }
  function handleMultiply10() {
    console.log("multiply10 call");
    dispatch(mulTen());
  }
  function handleDivision10() {
    console.log("division10 call");
    dispatch(divTen());
  }
  return (
    <div className="App">
      <button onClick={handleInc}>+</button>
      {count}
      <button onClick={handleDec}>-</button>
      <br />
      <br />
      <button onClick={handleMultiply10}>*</button>
      {count2}
      <button onClick={handleDivision10}>/</button>
      <br />
      <br />
      <Rectangle />
    </div>
  );
}

export default App;
