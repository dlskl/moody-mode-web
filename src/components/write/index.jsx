// React의 useState 훅을 사용하기 위해 import
import { useState } from "react";
import "./style.css";

// 선택 가능한 감정 리스트를 배열로 정의
const emotions = [
  { name: "슬픔", emotion: "/emotions/sad.png" },
  { name: "기쁨", emotion: "/emotions/happy.png" },
  { name: "지친", emotion: "/emotions/drained.png" },
  { name: "피곤함", emotion: "/emotions/tired.png" },
  { name: "보통", emotion: "/emotions/normal.png" },
];

// Write 컴포넌트 정의
const Write = () => {
  // 선택된 감정 상태 
  const [selectedEmotion, setSelectedEmotion] = useState(null);

  // 일기 텍스트 상태 
  const [content, setContent] = useState("");

  // 감정 선택 시 실행되는 함수
  const handleSelect = (name) => setSelectedEmotion(name);

  // '입력완료' 버튼 클릭 시 실행되는 함수
  const handleSubmit = () => {
    // 감정 또는 내용이 비어있으면 경고창 띄우기
    if (!selectedEmotion || !content.trim()) {
      alert("감정과 내용을 모두 입력해주세요!");
      return;
    }

    // 선택된 감정에 해당하는 객체 찾기
    const emotionObj = emotions.find((e) => e.name === selectedEmotion);

    // 새로운 일기 객체 생성
    const diary = {
      id: Date.now(), // 고유 ID
      date: new Date().toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }), // 오늘 날짜 (예: 2025년 6월 25일)
      emotion: selectedEmotion, // 선택된 감정 이름
      img: `/emotions/${emotionObj.emotion.split("/").pop()}`, // 감정 이미지 경로
      content, // 사용자가 입력한 텍스트
    };

    // 기존 localStorage에서 데이터 가져오기 (없으면 빈 배열)
    const prev = JSON.parse(localStorage.getItem("diaries") || "[]");

    // 기존 데이터 + 새 일기를 localStorage에 저장
    localStorage.setItem("diaries", JSON.stringify([...prev, diary]));

    // 입력창 초기화
    setContent("");
    setSelectedEmotion(null);

    // 저장 완료 알림
    alert("일기가 저장되었습니다!");
  };

  // JSX 반환 (화면 렌더링 부분)
  return (
    <>
      {/* 감정 선택 UI */}
      <div className="choice-container">
        {emotions.map((emotion) => (
          <div
            key={emotion.name}
            className={`emotions-wrap ${
              selectedEmotion === emotion.name ? "selected" : ""// 선택된 감정이면 className을 select로 바꿔 ui 적용 
            }`}
            onClick={() => handleSelect(emotion.name)} // 클릭 시 감정 선택
          >
            <img
              src={emotion.emotion}
              className="emotion-img"
              alt={emotion.name}
            />
            <div className="emotion-text">{emotion.name}</div>
          </div>
        ))}
      </div>

      {/* 일기 입력 영역 */}
      <div className="write-textarea-container">
        <textarea
          className="write-textarea"
          placeholder="오늘의 하루는 어땠는지 궁금해요!"
          value={content} // 상태와 연동된 값
          onChange={(e) => setContent(e.target.value)} // 입력 시 상태 업데이트
        />
        <div className="write-button-wrapper">
          {/* 입력 완료 버튼 */}
          <div className="write-textarea-button" onClick={handleSubmit}>
            입력완료
          </div>
        </div>
      </div>
    </>
  );
};

// 컴포넌트를 외부에서 사용할 수 있게 export
export default Write;
