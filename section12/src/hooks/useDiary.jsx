import { DiaryStateContext } from "../App";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// 함수 이름 앞에 use는 커스텀 훅으로 처리
const useDiary = (id) => {
    const nav = useNavigate()
    const data = useContext(DiaryStateContext);
    const [ curDiaryItem, setCurDiaryItem ] = useState();

    useEffect(() => {
        const currentDiaryItem = data.find(
            (item) => String(item.id) === String(id)
        );

        // 데이터에 없는 ID로 조회 시
        if (!currentDiaryItem) {
            window.alert("존재하지 않는 일기");
            nav("/", {replace: true});

            return;
        }
        
        setCurDiaryItem(currentDiaryItem);
    }, [id]);

    return curDiaryItem;
}

export default useDiary;