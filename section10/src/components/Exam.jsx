import { useReducer } from "react"; 

function reducer(state, action) {
    // 1번째 매개변수: 현재 state 값
    // 2번째 매개변수: 아래에서 정의한 액션 객체
    // console.log(state, action);
    // 0 {type: 'INCREASE', data: 1}

    switch (action.type) {
        case "INCREASE": return state + action.data
        case "DECREASE": return state - action.data
        default: return state
    }

}

const Exam = () => {
    // dispatch: 상태 변화를 알려주는 함수(발송)
    // 1번째 값: 상태를 실제로 변환시켜주는 변환기
    // 2번째 값: 초기값
    const [ state, dispatch ] = useReducer(reducer, 0);
    const onClickPlus = () => {
        // 객체 형태(액션 객체)로 상태 변화 요청
        dispatch({
            type: "INCREASE",
            data: 1
        })
    }
    const onClickMinus = () => {
        dispatch({
            type: "DECREASE",
            data: 1
        })
    }

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={onClickPlus}>+</button>
            <button onClick={onClickMinus}>-</button>
        </div>
    )
}

export default Exam;