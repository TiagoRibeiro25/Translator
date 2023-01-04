const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const deepl = require("deepl-node");
const translator = new deepl.Translator(process.env.DEEPL_API_KEY);

const PORT = 3000 || process.env.PORT;

app.use(express.json({ limit: "50mb" }));
app.use(express.static("public"));

async function translate(text, source, target) {
  const result = await translator.translateText(text, source, target);
  return result;
}

// Translate text
app.post("/translate", async (req, res) => {
  const text = req.body.text;
  const source = req.body.source === "auto-detect" ? null : req.body.source;
  const target = req.body.target;

  let result =
    "We couldn't translate your text. Please try again or contact the developer.";

  try {
    result = await translate(text, source, target);
  } catch (error) {
    console.log(`There was an error while translating text: ${error}`);
  }

  const resultDetails = req.body;
  resultDetails.status = result ? "success" : "failed";
  resultDetails.date = new Date().toLocaleString();

  console.table(resultDetails);

  res.send(result);
});

// Get Supported Languages
app.get("/languages", (req, res) => {
  const data = require("./data/languages.json");
  res.send(data);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
