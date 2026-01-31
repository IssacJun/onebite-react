import { memo, useContext } from 'react'
import { TodoContext } from '../App'
import './TodoItem.css'

const TodoItem = ({ id, isDone, content, date }) => {    
    const { onUpdate, onDelete } = useContext(TodoContext);
    const onChangeCheckbox = () => {
        onUpdate(id)
    }
    const onClickDeleteButton = () => {
        onDelete(id)
    }

    return (
        <div className="TodoItem">
            <input onChange={onChangeCheckbox} type="checkbox" checked={isDone} />
            <div className="content">{ content }</div>
            <div className="date">{ new Date(date).toLocaleDateString() }</div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    )
}

// memo는 얕은 비교를 함, props로 렌더링 판단함
// 새로운 todo에 대해 app 컴포넌트 리렌더링하면 그와 관련된 모든 함수가 새로운 함수로 전달됨
// memo 적용해도 계속 리렌더링됨

// React.memo의 수동 비교 기능
// 두번째 인자로 매개 변수 포함된 함수를 전달하면 리렌더링 여부를 직접 결정할 수 있음

// 2번째 인수: 콜백함수 전달 가능, prev nextprops를 전달해서 함수 반환값에 따라 바뀌었는지 판단함
// return false; -> Props 바뀜 -> 리렌더링 O
// return true; -> Props 바뀌지 않음 -> 리렌더링 X
// export default memo(TodoItem, (prevProps, nexProps) => {
//     // 4가지 값이 같지 않을 때(값이 바뀌지 않았을 때)
//     // false 반환 -> 리렌더링
//     if (prevProps.id !== nexProps.id) return false;
//     if (prevProps.isDOne !== nexProps.isDone) return false;
//     if (prevProps.content !== nexProps.content) return false;
//     if (prevProps.date !== nexProps.date) return false;

//     // 4가지 값이 바뀌지 않았을 때, true 반환 -> 리렌더링 하지 않음
//     return true;
// });

export default memo(TodoItem);