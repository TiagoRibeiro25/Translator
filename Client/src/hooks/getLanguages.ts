export async function getLanguages() {
  try {
    const response = await fetch("/languages");
    const data = await response.json();

    const sortedSourceLang = data.source_lang.sort((a: string[], b: string[]) => {
      if (a[1] < b[1]) return -1;
      if (a[1] > b[1]) return 1;
      return 0;
    });

    const sortedTargetLang = data.target_lang.sort((a: string[], b: string[]) => {
      if (a[1] < b[1]) return -1;
      if (a[1] > b[1]) return 1;
      return 0;
    });

    return { source_lang: sortedSourceLang, target_lang: sortedTargetLang };
  } catch (error) {
    // red style
    console.log(
      "There was an error fetching the supported source and target languages. Using default languages instead."
    );
    return {
      source_lang: [
        ["EN", "English"],
        ["CS", "Hindi"],
        ["ES", "Czech"],
        ["DA", "Danish"],
      ],
      target_lang: [
        ["EN-US", "English (US)"],
        ["ES", "Spanish"],
        ["FR", "French"],
        ["ID", "Indonesian"],
      ],
    };
  }
}
