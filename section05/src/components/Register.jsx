import { useState } from "react";

// 회원가입 폼
// 이름, 생년월일, 국적, 자기 소개
const Register = () => {
    // state 생성
    const [ name, setName ] = useState("이름");
    const [ birth, setBirth ] = useState("");
    const [ country, setCountry ] = useState("");
    const [ bio, setBio ] = useState("")
    
    const onChangeName = (e) => {
        setName(e.target.value);
    }
    const onChangeBirth = (e) => {
        setBirth(e.target.value);
    }
    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    }
    const onChangeBio = (e) => {
        setBio(e.target.value);
    }
    // input 태그에 값 입력 시 이벤트헨들러 onChangeName 실행
    // setName 함수 호출하며 e.target.value에 입력된 값이 전달됨
    // Name state에 입력한 값들이 변경됨
    return (
        <div>
            <div>
                <input 
                    value={name} 
                    onChange={onChangeName} 
                    placeholder="이름" 
                />
            </div>
            <div>
                <input 
                    value={birth} 
                    onChange={onChangeBirth} 
                    type="date"
                />
            </div>
            <div>
                <select value={country} onChange={onChangeCountry}>
                    <option></option>
                    <option value="kr">한국</option>
                    <option value="cn">중국</option>
                    <option value="jp">일본</option>
                </select>
                {country}
            </div>
            <div>
                <textarea value={bio} onChange={onChangeBio} />
            </div>
            {bio}
        </div>
    );
}

export default Register;