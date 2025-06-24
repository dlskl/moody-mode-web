import "./style.css";
import Header from "../../components/header";
import InsightBox from "../../components/insight";

const data = [
    {
        img: "src/assets/emotions/happy.png",
        count: 10,
        name: "기쁨",
        explain: "지금까지 10번의 기쁨을 느꼈어요. 작은 행복들이 모여 큰 미소가 되었네요!"
    },
    {
        img: "src/assets/emotions/normal.png",
        count: 30,
        name: "보통",
        explain: "10번의 평범한 하루. 아무 일 없던 날들도 소중한 감정이에요."
    },
    {
        img: "src/assets/emotions/sad.png",
        count: 10,
        name: "슬픔",
        explain: "슬픔을 10번 기록했어요. 마음이 아팠던 순간들이었지만, 모두 나의 일부예요."
    },
    {
        img: "src/assets/emotions/tired.png",
        count: 10,
        name: "피곤함",
        explain: "10번 피곤함을 느꼈네요. 오늘도 고생 많았어요. 충분히 쉬어야 해요."
    },
    {
        img: "src/assets/emotions/drained.png",
        count: 10,
        name: "지친",
        explain: "지친 하루가 벌써 10번. 스스로를 돌볼 시간이 필요해요."
    }
];

const COLORS = ['#FFB74D', '#90A4AE', '#64B5F6', '#BA68C8', '#A1887F'];

const totalCount = data.reduce((sum, item) => sum + item.count, 0);
const dataWithPercent = data.map(item => ({
  ...item,
  percent: totalCount === 0 ? 0 : Math.round((item.count / totalCount) * 100),
}));

const InsightPage = () => {
    return (
        <div className="insight-page">
            <Header />
            <div className="insight-container">
                {dataWithPercent.map((item, idx) => (
                    <InsightBox
                        key={item.name}
                        img={item.img}
                        count={item.count}
                        name={item.name}
                        explain={item.explain}
                        percent={item.percent}
                        color={COLORS[idx % COLORS.length]}
                    />
                ))}
            </div>
        </div>
    );
};

export default InsightPage;