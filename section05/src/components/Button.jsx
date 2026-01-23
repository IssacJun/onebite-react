// 구조 분해 할당 적용됨 (props) -> ({text, color = "black"})
// 구조 분해 할당을 할 때는 객체로 감싸줘야
// color엔 기본값 설정함
const Button = ({ children, text = "기본값", color = "black", ...etc }) => {    
    console.log(etc);
    
    // style = {{}}
    return (
        <button style={{ color: color }}>
            {text} - {color}
            {children}
        </button>
    );
};

export default Button;