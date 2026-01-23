// 구조 분해 할당 적용됨 (props) -> ({text, color = "black"})
// 구조 분해 할당을 할 때는 객체로 감싸줘야
// color엔 기본값 설정함
const Button = ({ children, text = "기본값", color = "black", ...etc }) => {    
    // console.log(etc);
    
    // style = {{}}
    // onClick, onMouseEnter: 이벤트 핸들러
    // 이벤트 객체: 모든 이벤트들은 이벤트 핸들러 함수를 호출하고 매개변수로 이벤트 객체를 제공함(e)
    function onClickButton(e) {
        // SyntheticBaseEvent: 합성 이벤트 객체
        // 모든 웹 브라우저의 이벤트 객체를 하나로 통일한 형태, 규격(크로스 브라우징 이슈 막기 위해)
        console.log(text, e); 
    }

    return (
        <button 
            onClick={onClickButton} 
            // onMouseEnter={onClickButton}
            style={{ color: color }}
        >
            {text} - {color}
            {children}
        </button>
    );
};

export default Button;