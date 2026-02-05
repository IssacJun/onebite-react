import { useParams } from "react-router-dom";
// URL Parameter 값을 꺼내올 수 있도록 위의 훅을 사용함

const Diary = () => {
    const params = useParams();
    console.log(params);
    
    return <div>{params.id} 일기</div>;
}

export default Diary;