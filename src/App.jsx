// React Router에서 필요한 컴포넌트 불러오기
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 각각의 페이지 컴포넌트 불러오기
import StartPage from "./page/start";     // 시작 화면
import MainPage from "./page/main";       // 일기 작성 페이지
import ListPage from "./page/list";       // 일기 목록 페이지
import InsightPage from "./page/insight"; // 감정 통계 페이지

// App 컴포넌트 정의 - 라우팅을 설정하는 최상위 컴포넌트
const App = () => {
  return (
    <>
      {/* BrowserRouter로 전체 라우팅 감싸기 (HTML5 history API 기반) */}
      <BrowserRouter>
        <Routes>
          {/* / 경로 -> StartPage 컴포넌트 렌더링 */}
          <Route path="/" element={<StartPage />} />

          {/* /main 경로 -> 일기 작성 페이지 */}
          <Route path="/main" element={<MainPage />} />

          {/* /list 경로 -> 작성한 일기 목록 보기 */}
          <Route path="/list" element={<ListPage />} />

          {/* /insight 경로 -> 감정 통계 분석 페이지 */}
          <Route path="/insight" element={<InsightPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
