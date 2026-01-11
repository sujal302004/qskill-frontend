import { useState } from "react";

export default function Translator() {
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");
  const [loading, setLoading] = useState(false);

  const translateText = async () => {
    if (!text) return;

    setLoading(true);

    try {
      const response = await fetch(
        "https://text-translator2.p.rapidapi.com/translate",
        {
          method: "POST",
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            "X-RapidAPI-Key": "5c4df7f5admshf8d02e2fafd771cp1a33fejsn664d00851ea7",
            "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
          },
          body: new URLSearchParams({
            source_language: "en",
            target_language: "hi",
            text: text,
          }),
        }
      );

      const data = await response.json();
      setTranslated(data.data.translatedText);
    } catch (error) {
      setTranslated("Error while translating");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center mt-10 px-4">
      <h1 className="text-2xl font-bold mb-4">Text Translator</h1>

      <textarea
        className="border p-2 w-full max-w-md mb-3"
        rows="4"
        placeholder="Enter English text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={translateText}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        {loading ? "Translating..." : "Translate"}
      </button>

      <div className="mt-4 font-semibold text-center">
        {translated}
      </div>
    </div>
  );
}
