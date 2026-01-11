import React, { useState, useEffect, useCallback } from "react";

function Generator() {
  const [length, setLength] = useState(8);
  const [result, setResult] = useState("");

  const generateString = useCallback(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let str = "";
    for (let i = 0; i < length; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setResult(str);
  }, [length]);

  useEffect(() => {
    generateString();
  }, [generateString]);

  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Random String Generator</h1>

      <input
        type="number"
        value={length}
        onChange={(e) => setLength(e.target.value)}
        className="border p-2 w-20 text-center"
      />

      <button
        onClick={generateString}
        className="ml-3 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Generate
      </button>

      <p className="mt-4 font-mono text-lg">{result}</p>
    </div>
  );
}

export default Generator;
