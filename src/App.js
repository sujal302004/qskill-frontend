import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Translator from "./pages/Translator";
import Generator from "./pages/Generator";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      {/* NAVBAR */}
      <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Coding Ninjas</h1>

        <div className="space-x-6">
          <Link to="/" className="hover:text-orange-400">
            Home
          </Link>
          <Link to="/translator" className="hover:text-orange-400">
            Translator
          </Link>
          <Link to="/generator" className="hover:text-orange-400">
            Generator
          </Link>
          <Link to="/dashboard" className="hover:text-orange-400">
            Dashboard
          </Link>
          <span className="hover:text-orange-400 cursor-pointer">
            Login
          </span>
        </div>
      </nav>

      {/* ROUTES */}
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
