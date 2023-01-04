export async function translateText(
  text: string,
  source_lang: string,
  target_lang: string
) {
  try {
    const response = await fetch("/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: text, source: source_lang, target: target_lang }),
    });

    const data = await response.json();

    return data.text;
  } catch (error) {
    console.log(`There was an error translating the text: ${error}`);
    return "There was an error translating the text...";
  }
}
