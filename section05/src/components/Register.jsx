import { useState } from "react";

// 회원가입 폼
// 이름, 생년월일, 국적, 자기 소개
const Register = () => {
    // state 생성 -> 너무 많으니 하나로 묶음
    const [ input, setInput ] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    }); // 기본값 설정

    // 통합 이벤트 핸들러(스프레드 연산자 사용)
    const onChange = (e) => {        
        setInput({
            ...input,
            [e.target.name]: e.target.value
        }) // [e.target.value] 프로퍼티 키 설정함
    }

    return (
        <div>
            <div>
                <input
                    name="name" 
                    value={input.name} 
                    onChange={onChange} 
                    placeholder="이름" 
                />
            </div>
            <div>
                <input
                    name="birth" 
                    value={input.birth} 
                    onChange={onChange} 
                    type="date"
                />
            </div>
            <div>
                <select name="country" value={input.country} onChange={onChange}>
                    <option></option>
                    <option value="kr">한국</option>
                    <option value="cn">중국</option>
                    <option value="jp">일본</option>
                </select>
                {input.country}
            </div>
            <div>
                <textarea name="bio" value={input.bio} onChange={onChange} />
            </div>
        </div>
    );
}

export default Register;