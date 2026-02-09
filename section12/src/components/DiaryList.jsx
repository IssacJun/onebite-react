import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import "./DiaryList.css"

const DiaryList = ({data}) => {
    const nav = useNavigate();
    const [sortType, setSortType] = useState("latest");
    const onChangeSortType = (e) => {
        setSortType(e.target.value);
        // sortType이라는 state가 변경되면서 이 컴포넌트가 리렌더링됨
        // 리렌더링 과정에서 아래 const sortedData = getSortedData(); 실행함
    }
    // 원본 data는 건드리지 않고 새로운 배열을 복사해서 만듦
    const getSortedData = () => {
        return data.toSorted((a, b)=>{
            if (sortType === "oldest") {
                return Number(a.createdDate) - Number(b.createdDate);
            } else {
                return Number(b.createdDate) - Number(a.createdDate);
            }
        })
    }
    const sortedData = getSortedData();

    return (
        <div className="DiaryList">
            <div className="menu_bar">
                <select onChange={onChangeSortType}>
                    <option value={"latest"}>최신순</option>
                    <option value={"oldest"}>오래된 순</option>
                </select>
                <Button onClick={() => nav("/new")} text={"새 일기 쓰기"} type={"POSITIVE"}/>
            </div>
            <div className="list_wrapper">
                {sortedData.map((item) => <DiaryItem key={item.id} {...item}/>)}
            </div>
        </div>
    );
}

export default DiaryList