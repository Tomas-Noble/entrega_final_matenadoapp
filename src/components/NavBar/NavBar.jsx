import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">Mateando</Link>
      <ul className="nav-links">
        <li><Link to="/categoria/mates">Mates</Link></li>
        <li><Link to="/categoria/termos">Termos</Link></li>
        <li><Link to="/categoria/accesorios">Accesorios</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;