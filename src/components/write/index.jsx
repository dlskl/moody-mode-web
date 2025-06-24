import { useState } from "react";
import "./style.css";

const emotions = [
  { name: "슬픔", emotion: "/emotions/sad.png" },
  { name: "기쁨", emotion: "/emotions/happy.png" },
  { name: "지친", emotion: "/emotions/drained.png" },
  { name: "피곤함", emotion: "/emotions/tired.png" },
  { name: "보통", emotion: "/emotions/normal.png" },
];

const Write = () => {
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [content, setContent] = useState("");

  const handleSelect = (name) => setSelectedEmotion(name);

  const handleSubmit = () => {
    if (!selectedEmotion || !content.trim()) {
      alert("감정과 내용을 모두 입력해주세요!");
      return;
    }
    const emotionObj = emotions.find((e) => e.name === selectedEmotion);
    const diary = {
      id: Date.now(),
      date: new Date().toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      emotion: selectedEmotion,
      img: `/emotions/${emotionObj.emotion.split('/').pop()}`,
      content,
    };
    const prev = JSON.parse(localStorage.getItem("diaries") || "[]");
    localStorage.setItem("diaries", JSON.stringify([...prev, diary]));
    setContent("");
    setSelectedEmotion(null);
    alert("일기가 저장되었습니다!");
  };

  return (
    <>
      <div className="choice-container">
        {emotions.map((emotion) => (
          <div
            key={emotion.name}
            className={`emotions-wrap ${
              selectedEmotion === emotion.name ? "selected" : ""
            }`}
            onClick={() => handleSelect(emotion.name)}
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

      <div className="write-textarea-container">
        <textarea
          className="write-textarea"
          placeholder="오늘의 하루는 어땠는지 궁금해요!"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="write-button-wrapper">
          <div className="write-textarea-button" onClick={handleSubmit}>
            입력완료
          </div>
        </div>
      </div>
    </>
  );
};

export default Write;
