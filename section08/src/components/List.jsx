import TodoItem from './TodoItem';
import { useState } from 'react';
import './List.css'

const List = ({ todos, onUpdate }) => {
    const [ search, setSearch ] = useState("");
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }
    // 검색 결과가 담긴 배열
    const getFilteredData = () => {
        if(search === "") {
            return todos;
        } 
        // 중괄호 사용 시 return을 사용해야 함
        // 그렇지 않으면 falsy => undefined 처리됨 => 빈배열
        return todos.filter((todo) => {
            // 소문자 검색
            return todo.content.toLowerCase().includes(search.toLowerCase())
        })
        // 아래처럼 작성해도 됨
        // return todos.filter((todo) => (
        //      todo.content.toLowerCase().includes(search.toLowerCase())
        // )
    }   

    const filteredTodos = getFilteredData()    

    return (
        <div className="List">
            <h4>Todo List</h4>
            <input 
                value={search} 
                onChange={onChangeSearch} 
                placeholder="검색어를 입력하세요" 
            />
            <div className='todos_wrapper'>
                {/* 검색 결과를 대상으롤 map 메서드 호출 */}
                {filteredTodos.map((todo) => {                    
                    return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} />
                    // 객체 내 모든 프로퍼티를 각각 개별의 props로 해채해서 던져줌
                    // TodoItem에서 값 접근이 용이함(바로 구조분해 할당을 하면 좋음)

                    // return <TodoItem todo={todo} />
                    // 이렇게 쓰면 TodoItem에서 값을 쓸 때
                    // props.todo.content, props.todo.date 처럼 두 단계를 거쳐서 접근해야

                    // 리스트로 특정 컴포넌트를 렌더링할 때 key를 고유 값으로 전달해야 함
                })}
            </div>
        </div>
    );
}

export default List;