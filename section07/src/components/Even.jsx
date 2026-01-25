import { useEffect } from "react";

const Even = () => {

    // Unmount 단계
    useEffect(() => {
        console.log("unmount 1");
        return () => {
            // 클린업, 정리함수: 컴포넌트의 Unmount 단계에서 실행됨
            console.log("unmount 2");
            
        };
    }, []);

    return <div>짝수</div>;;
}

export default Even;