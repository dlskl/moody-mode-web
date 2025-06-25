// React Router에서 제공하는 Link 컴포넌트를 가져옴
// Link를 사용하면 페이지를 새로고침하지 않고도 라우팅이 가능
import { Link } from "react-router-dom";

// 스타일 파일을 불러옵니다.
import "./style.css";

// Header 컴포넌트 정의 - 페이지 상단에 표시되는 공통 헤더
const Header = () => {
  return (
    // 헤더 전체를 감싸는 div
    <div className="header-container">
      
      {/* 로고 텍스트*/}
      <span className="logo-text">무디모드</span>
      
      {/* 메뉴 링크들을 감싸는 div */}
      <div>
        {/* 감정 통계 페이지로 이동하는 링크 */}
        <Link className="menu" to="/insight">
          감정 통계
        </Link>

        {/* 일기 목록을 보는 페이지로 이동하는 링크 */}
        <Link className="menu" to="/list">
          일기 보기
        </Link>

        {/* 일기 작성 페이지로 이동하는 링크 */}
        <Link className="menu" to="/main">
          일기 쓰기
        </Link>
      </div>
    </div>
  );
};

// Header 컴포넌트를 외부에서 사용할 수 있도록 export
export default Header;
