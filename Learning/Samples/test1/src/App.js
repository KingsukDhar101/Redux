import "./App.css";
import {inc} from './actions/action';
import {useDispatch, useSelector} from 'react-redux';

function App() {
  return (
    <div
      className="App"
      style={{
        border: "1px solid black",
        height: "100vh",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid red",
          height: "100%",
        }}
      >
        <button style={{ height: "3em", width: "3em" }}> + </button>
        <p style={{ margin: "0 20px" }}>100</p>
        <button style={{ height: "3em", width: "3em" }}> - </button>
      </div>
    </div>
  );
}

export default App;
