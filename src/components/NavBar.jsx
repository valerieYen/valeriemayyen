import { Link } from 'react-router-dom';
import '../stylesheets/NavBar.css';
import vmy from '../assets/vmy.svg';

const NavBar = () => {
  return (
    <div className="NavContainer">
      <nav className="NavBar">
        <div className="LeftSideNav NavOp">
          <Link to="/valeriemayyen" className="Link">
            <img src={vmy} alt="VMY Logo" className="Logo" />
          </Link>
        </div>
        <div className="Spacer"></div>
        <div className="RightSideNav NavOp">
          <Link to="/valeriemayyen/work" className="Link NavOp">
            <h1>Work</h1>
          </Link>
          <Link to="/valeriemayyen/contact" className="Link">
            <h1>Contact</h1>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
