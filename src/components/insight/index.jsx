import "./style.css";
import "./insightbox-style.css";

const InsightBox = ({img, count, name, explain, percent, color}) => {
    return (
        <div className="insightbox-box">
            <img src={img} alt={name} className="insightbox-img" />
            <div className="insightbox-title">{name}</div>
            <div className="insightbox-explain">{explain}</div>
            <div className="insightbox-progress-bar">
                <div
                    className="insightbox-progress"
                    style={{
                        width: `${percent}%`,
                        backgroundColor: color
                    }}
                />
            </div>
            <span className="insightbox-percent">{percent}%</span>
        </div>
    );
};

export default InsightBox;