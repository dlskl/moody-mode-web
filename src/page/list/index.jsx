import Header from "../../components/header";
import Diary from "../../components/diary";
import { useEffect, useState } from "react";
import "./style.css";

const ListPage = () => {
  const [diaries, setDiaries] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("diaries") || "[]");
    setDiaries(stored.reverse()); 
  }, []);

  return (
    <>
      <Header />
      <div className="list-container">
        {diaries.length === 0 ? (
          <div>작성된 일기가 없습니다.</div>
        ) : (
          diaries.map((data) => (
            <Diary key={data.id} date={data.date} content={data.content} img={data.img} />
          ))
        )}
      </div>
    </>
  );
};

export default ListPage;
