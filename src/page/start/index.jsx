// CSS 스타일 파일 불러오기
import "./style.css";

// 로고 이미지 불러오기
import logo from "../../assets/logo/image.png";

// 페이지 이동을 위한 React Router의 Link 컴포넌트
import { Link } from "react-router-dom";

// StartPage 컴포넌트 정의
const StartPage = () => {
  return (
    // 전체 배경을 감싸는 div
    <div className="background">
      {/* 중앙 컨텐츠를 감싸는 컨테이너 */}
      <div className="content-container">
        
        {/* 서비스 소개 문구 */}
        <span className="introduce-text">
          나의 감정을 기록하고, 위로를 받는 한줄 감정일기
        </span>

        {/* 서비스 로고 이미지 */}
        <img className="logo" src={logo} />

        {/* 서비스 이름 텍스트 */}
        <span className="logo-text">무디모드</span>

        {/* 메인 페이지로 이동하는 시작 버튼 */}
        <Link to="/main" className="start-button">
          시작하기
        </Link>
      </div>
    </div>
  );
};

export default StartPage;
