import logo from "./logo.svg";
import "./App.css";
import Snippet from "./components/Snippet.component"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Snippet />
      </header>
    </div>
  );
}

export default App;