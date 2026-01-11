import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Translator from "./pages/Translator";
import Generator from "./pages/Generator";


function App() {
  return (
    <Router>
      <nav className="bg-black text-white px-6 py-3 flex gap-6">
        <a href="/" className="hover:text-yellow-400">Home</a>
        <a href="/translator" className="hover:text-yellow-400">Translator</a>
        <a href="/generator" className="hover:text-yellow-400">Generator</a>
        <a href="/dashboard" className="hover:text-yellow-400">Dashboard</a>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/translator" element={<Translator />} />
        <Route path="/generator" element={<Generator />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
