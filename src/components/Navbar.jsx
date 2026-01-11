import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Coding Ninjas</h1>

      <div className="space-x-6">
        <Link to="/" className="hover:text-orange-400">Home</Link>
        <Link to="/courses" className="hover:text-orange-400">Courses</Link>
        <a href="#" className="hover:text-orange-400">Careers</a>
        <a href="#" className="hover:text-orange-400">Login</a>
      </div>
    </nav>
  );
}
