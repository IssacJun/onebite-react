import "./Button.css"

const Button = ({ text, type, onClick }) => {
    return (
        // props로 전달한 값에 따라 class name 다르게 설정하기
        <button 
            onClick={onClick} 
            className={`Button Button_${type}`}
        >{text}</button>
    );
}

export default Button;