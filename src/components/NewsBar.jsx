import { Link } from "react-router-dom";
import "../stylesheets/NewsBar.css";

const NewsBar = () => {
  return (
    <div className="NewsBar">
      <div className="BarTitle">BREAKING NEWS</div>

      <ul>
        <li>
          <Link to="/valeriemayyen/about/cats" className="Link NavOp">
            𓃠 Local Feline Duo Continues Pattern of Domestic Manipulation 𓃠
          </Link>
        </li>

        <li>
          <Link to="/valeriemayyen/about/music" className="Link NavOp">
            𝄞 Musician&apos;s Career Pivots from Classical to... Video Game? 𝄞
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NewsBar;
