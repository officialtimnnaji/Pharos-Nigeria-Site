import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#006E61] text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold text-pharosGold">Pharos Nigeria</h1>

      <div className="space-x-6">
        <Link to="/" className="hover:text-pharosGold">Home</Link>
        <Link to="/events" className="hover:text-pharosGold">Events</Link>
        <Link to="/community" className="hover:text-pharosGold">Community</Link>
      </div>
    </nav>
  );
}
