import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <div className="header-container">
      <span className="logo-text">무디모드</span>
      <div>
        <Link className="menu" to="/insight">감정 통계</Link>
        <Link className="menu" to="/list">일기 보기</Link>
        <Link className="menu" to="/main">일기 쓰기</Link>
      </div>
    </div>
  );
};

export default Header;
