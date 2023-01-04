import Translator from "./components/Translator";

function App() {
  return (
    <div className="App">
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
