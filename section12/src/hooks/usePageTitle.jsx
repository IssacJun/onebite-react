import { useEffect } from "react";

const usePageTitle = (title) => {
    // New 컴포넌트가 렌더링된 이후에(마운트 이후에) 페이지 타이틀이 바뀜
    useEffect(() => {
        // DOM 요소가 저장되기에 $ 넣음
        const $title = document.getElementsByTagName("title")[0];
        $title.innerText = title;
    }, [title])
}

export default usePageTitle;