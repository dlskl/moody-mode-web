// 컴포넌트 및 스타일 불러오기
import Header from "../../components/header";   // 상단 공통 헤더
import Write from "../../components/write";     // 일기 작성 UI 컴포넌트
import "./style.css";                           // 스타일

const MainPage = () => {
  // 오늘 날짜를 가져오는 Date 객체 생성
  const today = new Date();

  // 날짜를 '2025년 06월 25일' 형태로 포맷팅
  const formattedDate = `${today.getFullYear()}년 ${String(
    today.getMonth() + 1 // 월은 0부터 시작하므로 +1
  ).padStart(2, "0")}월 ${String(today.getDate()).padStart(2, "0")}일`;

  return (
    <>
      {/* 텍스트 중앙 정렬 */}
      <div style={{ textAlign: "center" }}>
        <Header />

        {/* 오늘 날짜 표시 */}
        <div className="today-text">오늘의 날짜는</div>
        <div className="today-text">{formattedDate}입니다</div>

        {/* 감정 입력 안내 */}
        <div className="today-feeling">오늘의 기분은 어떠셨나요?</div>
        <p className="help-word">
          오늘의 감정에 맞는 캐릭터를 선택하고, 일기를 작성해주세요
        </p>
      </div>

      {/* 감정 선택 및 일기 작성 컴포넌트 */}
      <Write />
    </>
  );
};

export default MainPage;
