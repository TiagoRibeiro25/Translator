import Translator from "./components/Translator";

function App() {
  return (
    <div className="App">
      <div className="made-by-info">
        Made by{" "}
        <a
          href="https://github.com/TiagoRibeiro25"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tiago Ribeiro
        </a>
      </div>

      <h1>
        Translator - Made with{" "}
        <a
          style={{ color: "blue", textDecoration: "none" }}
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>{" "}
        +{" "}
        <a
          style={{ color: "green", textDecoration: "none" }}
          href="https://nodejs.org/en/about/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Node.js
        </a>
      </h1>
      <Translator />
    </div>
  );
}

export default App;
