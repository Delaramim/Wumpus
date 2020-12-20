import logo from "./logo.svg";
import "./App.css";
import Tiles from "./Tiles";

function App() {
  return (
    <div className="App">
      <div
        style={{
          backgroundColor: "pink",
          width: "100%",
          height: "45px",
          textAlign: "left",
          padding: "10px"
        }}
      >
        <h3 style={{ marginLeft: 50, color: "white" }}>Wumpus World</h3>
      </div>
      <div className="Container">
        <Tiles></Tiles>
      </div>
      <div
        style={{
          backgroundColor: "pink",
          width: "100%",
          height: "30px",
          textAlign: "left",
          padding: "10px",
          marginTop: "50px"
        }}
      >
        <p style={{ marginLeft: 50, color: "white" }}>Delara</p>
      </div>
    </div>
  );
}

export default App;
