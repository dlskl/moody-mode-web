// 스타일 및 컴포넌트 불러오기
import "./style.css";
import Header from "../../components/header";         // 공통 헤더 컴포넌트
import InsightBox from "../../components/insight";    // 감정 통계 박스 컴포넌트
import { useEffect, useState } from "react";

// 감정 목록 정의 - 이름(name), 이미지(img), 설명(explain)
const EMOTIONS = [
  {
    name: "기쁨",
    img: "/emotions/happy.png",
    explain: "작은 행복들이 모여 큰 미소가 되었네요!",
  },
  {
    name: "보통",
    img: "/emotions/normal.png",
    explain: "아무 일 없던 날들도 소중한 감정이에요.",
  },
  {
    name: "슬픔",
    img: "/emotions/sad.png",
    explain: "마음이 아팠던 순간들이었지만, 모두 나의 일부예요.",
  },
  {
    name: "피곤함",
    img: "/emotions/tired.png",
    explain: "오늘도 고생 많았어요. 충분히 쉬어야 해요.",
  },
  {
    name: "지친",
    img: "/emotions/drained.png",
    explain: "스스로를 돌볼 시간이 필요해요.",
  },
];

// 각 감정에 대응하는 색상 배열 (진행 바에 사용됨)
const COLORS = ["#FFB74D", "#90A4AE", "#64B5F6", "#BA68C8", "#A1887F"];

const InsightPage = () => {
  // 통계 데이터를 저장할 state
  const [stat, setStat] = useState([]);

  // 컴포넌트가 마운트될 때 localStorage의 일기 데이터를 불러와 통계 계산
  useEffect(() => {
    // localStorage에서 저장된 일기 배열 가져오기 (없으면 빈 배열)
    const diaries = JSON.parse(localStorage.getItem("diaries") || "[]");
    const total = diaries.length;

    // 각 감정에 대한 출현 횟수와 비율 계산
    const statArr = EMOTIONS.map((emo, idx) => {
      const count = diaries.filter((d) => d.emotion === emo.name).length;
      return {
        ...emo,                            // 감정의 이름, 이미지, 설명 유지
        count,                             // 감정에 해당하는 일기 수
        percent: total === 0 ? 0 : Math.round((count / total) * 100), // 전체 대비 비율 (%)
        color: COLORS[idx % COLORS.length], // 색상 배열에서 순서대로 지정
      };
    });

    // 계산된 통계 데이터 저장
    setStat(statArr);
  }, []);

  return (
    <div className="insight-page">
      {/* 상단 헤더 컴포넌트 */}
      <Header />

      {/* 감정 통계 박스들이 나열되는 컨테이너 */}
      <div className="insight-container">
        {stat.map((item) => (
          <InsightBox
            key={item.name}                                // key는 감정 이름
            img={item.img}                                 // 감정 이미지
            name={item.name}                               // 감정 이름
            explain={`${item.count}번의 ${item.name}. ${item.explain}`} // 설명 텍스트
            percent={item.percent}                         // 비율
            color={item.color}                             // 진행 바 색상
          />
        ))}
      </div>
    </div>
  );
};

export default InsightPage;
