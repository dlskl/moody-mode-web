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
        <span className="logo-text">모디모드</span>
        <Link className="start-button">시작하기</Link>
        {/* 후에 메인 화면으로 이동 */}
      </div>
    </div>
  );
};

export default StartPage;
