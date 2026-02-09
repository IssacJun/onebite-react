
import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";

const emotionList = [
    {
        emotionID: 1,
        emotionName: "완전 좋음"
    }, {
        emotionID: 2,
        emotionName: "좋음"
    }, {
        emotionID: 3,
        emotionName: "보통"
    }, {
        emotionID: 4,
        emotionName: "완전 좋음"
    }, {
        emotionID: 5,
        emotionName: "끔찍함"
    }
];

const Editor = () => {
    const emotionId = 5;

    return (
        <div className="Editor">
            <section className="date_section">
                <h4>오늘의 날짜</h4>
                <input type="date" />
             </section>
            <section className="emotion_section">
                <h4>오늘의 감정</h4>
                <div className="emotion_list_wrapper">
                    { emotionList.map((item) => 
                            <EmotionItem
                                key={item.emotionID} 
                                emotionId={item.emotionID} 
                                emotionName={item.emotionName} 
                                isSelected={item.emotionID === emotionId} 
                                {...item}
                            />
                    )}
                </div>
            </section>
            <section className="content_section">
                <h4>오늘의 일기</h4>
                <textarea placeholder="오늘은 어땠나요?"></textarea>
            </section>
            <section className="button_section">
                <Button text={"취소하기"} />
                <Button text={"작성완료"} type={"POSITIVE"} />
            </section>
        </div>
    );
}

export default Editor;