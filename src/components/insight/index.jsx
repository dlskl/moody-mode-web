// 스타일 파일을 불러옵니다.
import "./style.css";

// InsightBox 컴포넌트 정의
// props로 이미지(img), 개수(count), 감정 이름(name), 설명(explain), 백분율(percent), 색상(color)을 전달받음
const InsightBox = ({ img, count, name, explain, percent, color }) => {
    return (
        // 박스 전체를 감싸는 div
        <div className="insightbox-box">
            
            {/* 감정 또는 통계에 관련된 이미지 출력 */}
            <img src={img} alt={name} className="insightbox-img" />
            
            {/* 감정 이름 혹은 카테고리 이름 출력 */}
            <div className="insightbox-title">{name}</div>
            
            {/* 해당 감정이나 항목에 대한 설명 텍스트 */}
            <div className="insightbox-explain">{explain}</div>
            
            {/* 백분율에 따라 길이가 달라지는 진행 바(Progress bar) 영역 */}
            <div className="insightbox-progress-bar">
                <div
                    className="insightbox-progress"
                    // 진행 바의 너비와 색상을 props 값으로 동적으로 설정
                    style={{
                        width: `${percent}%`,
                        backgroundColor: color
                    }}
                />
            </div>
            
            {/* 퍼센트 수치를 숫자로도 표시 */}
            <span className="insightbox-percent">{percent}%</span>
        </div>
    );
};

// 컴포넌트를 외부에서 사용할 수 있도록 export
export default InsightBox;
