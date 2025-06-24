import Header from "../../components/header";
import Diary from "../../components/diary";
import "./style.css";

const data = [
  {
    date: "2025년 6월 20일",
    content:
      "점심엔 오랜만에 친구와 만나 맛있는 김치찌개를 먹으며 웃음꽃을 피웠다.",
    img: "src/assets/emotions/happy.png",
  },
  {
    date: "2025년 8월 19일",
    content: "괜찮다고 말했지만 마음 한켠이 계속 무너져 내렸다.",
    img: "src/assets/emotions/sad.png",
  },
  {
    date: "2025년 7월 15일",
    content: "몸이 무거워 눈을 뜨는 것조차 힘들었던 아침이었다.",
    img: "src/assets/emotions/tired.png",
  },
  {
    date: "2025년 5월 20일",
    content: "아침에 일어나 창밖을 보니 흐린 날씨가 마음을 차분하게 해줬다.",
    img: "src/assets/emotions/normal.png",
  },
  {
    date: "2025년 2월 12일",
    content: "반복되는 일상 속에서 나 자신이 점점 흐려지는 기분이 들었다.",
    img: "src/assets/emotions/drained.png",
  },
];

const ListPage = () => {
  return (
    <>
      <Header />
      <div className="list-container">
        {data.map((data) => (
          <Diary date={data.date} content={data.content} img={data.img} />
        ))}
      </div>
    </>
  );
};

export default ListPage;
