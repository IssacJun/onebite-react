import { useState, useContext } from "react";
import { DiaryStateContext } from "../App";

import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";

const getMonthlyData = (pivotDate, data) => {
    // getTime(): 타임스탬프 형태
    const beginTime = new Date(
        pivotDate.getFullYear(),
        pivotDate.getMonth(),
        1,
        0,
        0,
        0
    ).getTime();

    // 끝나는 날을 구하려면?
    // 기준이 되는 달에서 1을 더하고 일 데이터를 0으로 설정
    // 예) 지금 2월일 때, 2월의 마지막 날을 구하려면, 3월 0일로 설정하기
    const endTime = new Date(
        pivotDate.getFullYear(),
        pivotDate.getMonth() + 1,
        0,
        23,
        59,
        59
    ).getTime();

    return data.filter(
        (item) => 
            beginTime <= item.createdDate && item.createdDate <= endTime
    );
};

const Home = () => {
    const data = useContext(DiaryStateContext);
    const [ pivotDate, setPivotDate ] = useState(new Date());
    const monthlyData = getMonthlyData(pivotDate, data)    

    // 한달 후
    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
    };
    // 한달 전
    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
    };

    return (
        <div>
            <Header 
                title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`} 
                leftChild={<Button onClick={onDecreaseMonth} text={"<"}/>}
                rightChild={<Button onClick={onIncreaseMonth} text={">"}/>}
            />
            <DiaryList data={monthlyData} />
        </div>
    );
}

export default Home;