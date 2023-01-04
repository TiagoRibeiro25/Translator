import React from "react";
import { getLocalStorage, setLocalStorage } from "../hooks/LocalStorage";
import { getLanguages } from "../hooks/getLanguages";
import { translateText } from "../hooks/translateText";
import "../styles/translator.css";

class Translator extends React.Component {
  // Declare state variables
  state = {
    inputText: "",
    outputText: "Translated Text",
    sourceLanguage: "",
    targetLanguage: "",
    sourceLanguages: [],
    targetLanguages: [],
  };

  componentDidMount() {
    getLanguages().then((data) => {
      this.setState({
        sourceLanguages: data.source_lang,
        targetLanguages: data.target_lang,
      });

      // Set the default source and target languages
      this.setState({
        sourceLanguage: getLocalStorage("sourceLanguage") || data.source_lang[0],
      });
      this.setState({
        targetLanguage: getLocalStorage("targetLanguage") || data.target_lang[0],
      });
    });
  }

  // Send a POST request to the server with the input text
  handleText = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // Get the input text
    const text: string = e.target.value;
    this.setState({ inputText: text });

    // Save the source and target languages to local storage
    setLocalStorage("sourceLanguage", this.state.sourceLanguage);
    setLocalStorage("targetLanguage", this.state.targetLanguage);

    // If the input text is empty, reset the output text
    if (text.length === 0) {
      this.setState({ outputText: "Translated Text" });
      return;
    }

    // Translate the text
    this.setState({ outputText: "Loading..." });

    setTimeout(() => {
      // If the text is still the same, send the request
      if (text === this.state.inputText) {
        // If the input text is not empty, translate it
        if (text !== "") {
          translateText(text, this.state.sourceLanguage, this.state.targetLanguage).then(
            (data) => {
              this.setState({ outputText: data });
            }
          );
        }
      }
    }, 1500);
  };

  render() {
    return (
      <div className="translator">
        <div className="languages">
          {/* INPUT */}
          <div className="language">
            <label htmlFor="input-language">Input</label>
            <select
              className="input-language"
              name="input-language"
              value={this.state.sourceLanguage}
              onChange={(e) => this.setState({ sourceLanguage: e.target.value })}
            >
              {this.state.sourceLanguages.map((language) => (
                <option key={language[0]} value={language[0]}>
                  {language[1]}
                </option>
              ))}
            </select>
          </div>

          {/* OUTPUT */}
          <div className="language">
            <label htmlFor="output-language">Output</label>
            <select
              className="output-language"
              name="output-language"
              value={this.state.targetLanguage}
              onChange={(e) => this.setState({ targetLanguage: e.target.value })}
            >
              {this.state.targetLanguages.map((language) => (
                <option key={language[0]} value={language[0]}>
                  {language[1]}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* INPUT TEXT */}
        <textarea
          name="input"
          id="input-area"
          cols={30}
          rows={10}
          maxLength={5000}
          value={this.state.inputText}
          onChange={this.handleText}
          placeholder="Enter text here..."
        ></textarea>

        {/* OUTPUT TEXT */}
        <div className="output-area">{this.state.outputText}</div>
      </div>
    );
  }
}

export default Translator;
