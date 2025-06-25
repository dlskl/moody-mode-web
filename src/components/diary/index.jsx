import "./style.css"

// Diary 컴포넌트를 정의 props로 날짜(date), 내용(content), 이미지(img)를 전달받음
const Diary = ({ date, content, img }) => {
  return (
    // 전체 일기 항목을 감싸는 최상위 div
    <div className="diary-content">
      
      {/* 감정이나 상황을 표현하는 이미지 */}
      {/* img props는 이미지의 경로 또는 URL*/}
      <img src={img} className="emotion-img-size" />
      
      {/* 텍스트(날짜, 내용)를 포함하는 영역 */}
      <div>
        {/* 일기 작성 날짜를 출력 */}
        <div>{date}</div>

        {/* 일기 내용을 출력 */}
        <div className="content-text">{content}</div>
      </div>
    </div>
  );
};

// 이 Diary 컴포넌트를 다른 파일에서 사용할 수 있도록 export
export default Diary;
