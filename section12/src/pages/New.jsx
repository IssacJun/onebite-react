import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const New = () => {
    const nav = useNavigate();
    const { onCreate } = useContext(DiaryDispatchContext);
    const onSubmit = (input) => {        
        onCreate(
            input.createdDate.getTime(), 
            input.emotionId, 
            input.content
        );

        // 뒤로 가기 방지
        nav("/", { replace: true });
    }
    
    return (
        <div>
            <Header 
                title={"새 일기 쓰기"} 
                leftChild={
                    // useNavigate(-1) 하면 페이지를 뒤로 이동
                    <Button text={"< 뒤로 가기"} onClick={() => nav(-1)}/>
                }
            />
            <Editor onSubmit={onSubmit} />
        </div>
    );
}

export default New;