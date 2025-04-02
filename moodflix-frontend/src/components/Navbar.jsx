import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">MoodFlix</Link>
      <div>
        <Link to="/login" className="mx-2">Login</Link>
        <Link to="/register" className="mx-2">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
