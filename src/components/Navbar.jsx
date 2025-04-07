import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">KevinStudio秘密基地</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">首页</Link>
        <Link to="/blog">博客</Link>
        <Link to="/portfolio">作品集</Link>
        <Link to="/news">动态</Link>
      </div>
    </nav>
  );
}

export default Navbar;