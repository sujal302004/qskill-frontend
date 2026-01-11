import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Translator from "./pages/Translator";
import Generator from "./pages/Generator";

function App() {
  return (
    <BrowserRouter>
      <nav className="flex gap-4 p-4 bg-black text-white">
        <Link to="/">Home</Link>
        <Link to="/translator">Translator</Link>
        <Link to="/generator">Generator</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/translator" element={<Translator />} />
        <Route path="/generator" element={<Generator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
