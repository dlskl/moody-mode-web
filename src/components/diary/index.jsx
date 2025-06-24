import "./style.css";

const Diary = ({ date, content, img }) => {
  return (
    <div className="diary-content">
      <img src={img} className="emotion-img-size" />
      <div>
        <div>{date}</div>
        <div className="content-text">{content}</div>
      </div>
    </div>
  );
};

export default Diary;
