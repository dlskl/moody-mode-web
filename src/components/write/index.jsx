import { useState } from "react";
import "./style.css";

const emotions = [
  { name: "슬픔", emotion: "src/assets/emotions/sad.png" },
  { name: "기쁨", emotion: "src/assets/emotions/happy.png" },
  { name: "지친", emotion: "src/assets/emotions/drained.png" },
  { name: "피곤함", emotion: "src/assets/emotions/tired.png" },
  { name: "보통", emotion: "src/assets/emotions/normal.png" },
];

const Write = () => {
  const [selectedEmotion, setSelectedEmotion] = useState(null);

  const handleSelect = (name) => {
    setSelectedEmotion(name);
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
            placeholder="오늘의 하루는 어땠는지 궁금해요!"/>
        <div className="write-button-wrapper">
        <div className="write-textarea-button">입력완료</div>
      </div>
    </div>

    </>
  );
};

export default Write;
