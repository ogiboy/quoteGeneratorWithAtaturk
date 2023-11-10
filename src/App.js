import "./styles.css";
import RandomQuotes from "./components/RandomQuotes";
import AtaturkQuotes from "./components/AtaturkQuotes";

export default function App() {
  return (
    <div className="App">
      <h1 style={{ color: "#666" }}>Quote Generator</h1>
      <AtaturkQuotes />
      <RandomQuotes />
    </div>
  );
}
