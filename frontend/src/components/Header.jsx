
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import CategoriesDropdown from './CategoriesDropdown';




const Header = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('redirectAfterLogin', window.location.pathname);
    navigate('/signin');
  }

  const handleRegister = () => {
    localStorage.setItem('redirectAfterRegister', window.location.pathname);
    navigate('/signup');
  }

  return (
    <header className="bg-white p-4 shadow-xl font-bold">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl font-bold">SKILLER</Link>
          <input
            type="text"
            placeholder="Search"
            className="p-2 border border-black w-[400px] rounded-full"
          />
          <CategoriesDropdown />
          <Link to = "/Instructor" > 
          <button>Teach on SKILLER</button>
          </Link>
          
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2">
            <FaShoppingCart className="w-6 h-6 text-black hover:text-teal-600" />
          </button>
          <button onClick={handleLogin} className="p-2 text-black hover:text-teal-600">Login</button>
          <button onClick={handleRegister} className="p-2 bg-black text-white rounded-lg hover:bg-white hover:text-black border-2 border-black">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
