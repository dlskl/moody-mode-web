import "./style.css";
import Header from "../../components/header";
import InsightBox from "../../components/insight";
import { useEffect, useState } from "react";

const EMOTIONS = [
  { name: "기쁨", img: "src/assets/emotions/happy.png", explain: "작은 행복들이 모여 큰 미소가 되었네요!" },
  { name: "보통", img: "src/assets/emotions/normal.png", explain: "아무 일 없던 날들도 소중한 감정이에요." },
  { name: "슬픔", img: "src/assets/emotions/sad.png", explain: "마음이 아팠던 순간들이었지만, 모두 나의 일부예요." },
  { name: "피곤함", img: "src/assets/emotions/tired.png", explain: "오늘도 고생 많았어요. 충분히 쉬어야 해요." },
  { name: "지친", img: "src/assets/emotions/drained.png", explain: "스스로를 돌볼 시간이 필요해요." }
];

const COLORS = ['#FFB74D', '#90A4AE', '#64B5F6', '#BA68C8', '#A1887F'];

const InsightPage = () => {
  const [stat, setStat] = useState([]);

  useEffect(() => {
    const diaries = JSON.parse(localStorage.getItem("diaries") || "[]");
    const total = diaries.length;
    const statArr = EMOTIONS.map((emo, idx) => {
      const count = diaries.filter(d => d.emotion === emo.name).length;
      return {
        ...emo,
        count,
        percent: total === 0 ? 0 : Math.round((count / total) * 100),
        color: COLORS[idx % COLORS.length]
      };
    });
    setStat(statArr);
  }, []);

  return (
    <div className="insight-page">
      <Header />
      <div className="insight-container">
        {stat.map(item => (
          <InsightBox
            key={item.name}
            img={item.img}
            name={item.name}
            explain={`${item.count}번의 ${item.name}. ${item.explain}`}
            percent={item.percent}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
};


export default InsightPage;