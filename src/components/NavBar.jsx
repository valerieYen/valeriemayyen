import { Link } from 'react-router-dom';
import '../stylesheets/NavBar.css';

const NavBar = () => {
  return (
    <div className="NavContainer">
      <nav className="NavBar">
        <div className="LeftSideNav NavOp">
          <Link to="/personal-site/" className="Link">
            <img src="vmy.png" className="Logo" />
          </Link>
        </div>
        <div className="Spacer"></div>
        <div className="RightSideNav NavOp">
          <Link to="/personal-site/work" className="Link NavOp">
            <h1>Work</h1>
          </Link>
          <Link to="/personal-site/about" className="Link">
            <h1>About</h1>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
