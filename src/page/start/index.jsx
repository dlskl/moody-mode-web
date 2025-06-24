import "./style.css";
import logo from "../../assets/logo/image.png";
import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <div className="background">
      <div className="content-container">
        <span className="introduce-text">
          나의 감정을 기록하고, 위로를 받는 한줄 감정일기
        </span>
        <img className="logo" src={logo} />
        <span className="logo-text">무디모드</span>
        <Link to="/main" className="start-button">
          시작하기
        </Link>
      </div>
    </div>
  );
};

export default StartPage;
