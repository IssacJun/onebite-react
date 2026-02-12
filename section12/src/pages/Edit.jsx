import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

const Edit = () => {
    const params = useParams();
    const nav = useNavigate();
    const { onUpdate, onDelete } = useContext(DiaryDispatchContext);
    const data = useContext(DiaryStateContext);
    const [ curDiaryItem, setCurDiaryItem ] = useState();

    useEffect(() => {
        const currentDiaryItem = data.find(
            (item) => String(item.id) === String(params.id)
        );

        // 데이터에 없는 ID로 조회 시
        if (!currentDiaryItem) {
            window.alert("존재하지 않는 일기");
            // 아래처럼 작성하면 작동 안 됨
            // Edit 컴포넌트 렌더링 다 되고 나서 쓸 수 있음
            // 그런데 지금은 렌더링 중에 쓰고 있어서 안 됨
            // useEffect 대신 써야 함
            nav("/", {replace: true});
            return;
        }
        
        setCurDiaryItem(currentDiaryItem);
    }, [params.id]);

    const onClickDelete = () => {
        // 브라우저 내장 팝업(T/F)
        if (window.confirm("일기를 정말 삭제할까요? 복구 안 됨")) {
            onDelete(params.id)
            // 뒤로가기 방지
            nav("/", { replace: true })
        }
    };

    const onSubmit = (input) => {
        if (window.confirm("정말 수정하나요?")) {
            onUpdate(params.id, input.createdDate.getTime(), input.emotionId, input.content);
            nav("/", { replace: true })
        }
    }

    return (
        <div>
            <Header
                title={"일기 수정하기"}
                leftChild={
                    <Button text={"< 뒤로 가기"} onClick={() => nav(-1)} />
                }
                rightChild={
                    <Button text={"삭제하기"} onClick={onClickDelete} type={"NEGATIVE"} />
                }
            />
            <Editor initData={curDiaryItem} onSubmit={onSubmit} />
        </div>
    );
}

export default Edit;