// 필요한 컴포넌트 및 훅 불러오기
import Header from "../../components/header";   // 상단 공통 헤더
import Diary from "../../components/diary";     // 단일 일기 표시용 컴포넌트
import { useEffect, useState } from "react";    // React 훅
import "./style.css";                           // 스타일 파일

const ListPage = () => {
  // 일기 목록 상태 
  const [diaries, setDiaries] = useState([]);

  // 컴포넌트가 처음 렌더링될 때 localStorage에서 데이터 불러오기
  useEffect(() => {
    // 저장된 일기 데이터 가져오기 
    const stored = JSON.parse(localStorage.getItem("diaries") || "[]");

    // 최신 일기가 위로 오도록 순서 뒤집어서 저장
    setDiaries(stored.reverse());
  }, []);

  return (
    <>
      {/* 공통 헤더 컴포넌트 */}
      <Header />

      {/* 일기 목록을 감싸는 컨테이너 */}
      <div className="list-container">
        {diaries.length === 0 ? (
          // 일기가 하나도 없을 때 메시지 표시
          <div>작성된 일기가 없습니다.</div>
        ) : (
          // 일기가 있을 경우, Diary 컴포넌트를 사용해 하나씩 렌더링
          diaries.map((data) => (
            <Diary
              key={data.id}               // 고유한 키
              date={data.date}           // 작성 날짜
              content={data.content}     // 일기 내용
              img={data.img}             // 감정 이미지
            />
          ))
        )}
      </div>
    </>
  );
};

export default ListPage;
