import Header from "../../components/header";
import Write from "../../components/write"
import "./style.css"

const MainPage = () => {
  const today = new Date();

  const formattedDate = `${today.getFullYear()}년 ${String(
    today.getMonth() + 1
  ).padStart(2, "0")}월 ${String(today.getDate()).padStart(2, "0")}일`;

  return (
    <>
    <div style={{ textAlign: "center" }}>
      <Header />
      <div className="today-text">오늘의 날짜는</div>
      <div className="today-text">{formattedDate}입니다</div>

      <div className="today-feeling">오늘의 기분은 어떠셨나요?</div>
    </div>
    <Write/>
    </>
  );
};

export default MainPage;
