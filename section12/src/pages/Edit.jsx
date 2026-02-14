import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import usePageTitle from "../hooks/usePageTitle";
import useDiary from "../hooks/useDiary";

const Edit = () => {
    const params = useParams();
    const nav = useNavigate();
    usePageTitle(`${params.id}번 일기 수정`);
    const { onUpdate, onDelete } = useContext(DiaryDispatchContext);
    const curDiaryItem = useDiary(params.id)

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