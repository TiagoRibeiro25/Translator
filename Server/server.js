const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const deepl = require("deepl-node");
const translator = new deepl.Translator(process.env.DEEPL_API_KEY);

const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "5mb" }));
app.use(express.static("public"));

async function translate(text, source, target) {
  source = source === "auto-detect" ? null : source;
  const result = await translator.translateText(text, source, target);
  return result;
}

// Translate text
app.post("/translate", async (req, res) => {
  const text = req.body.text;
  const source = req.body.source;
  const target = req.body.target;

  let result;

  try {
    result = await translate(text, source, target);
  } catch (error) {
    console.log(`There was an error while translating text: ${error}`);
    result = null;
  }

  const resultDetails = req.body;
  resultDetails.status = result ? "success" : "failed";
  resultDetails.date = new Date().toLocaleString();

  console.log(resultDetails);

  res.send(
    result
      ? result
      : {
          text: "We couldn't translate your text. Please try again or contact the developer.",
        }
  );
});

// Get Supported Languages
app.get("/languages", (req, res) => {
  const data = require("./data/languages.json");
  res.send(data);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
