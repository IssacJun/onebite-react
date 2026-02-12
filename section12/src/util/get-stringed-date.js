export const getStringedDate = (targetDate) => {
    // date 객체를 YYYY-MM-DD 문자열 형태로 변환
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() + 1;
    let date = targetDate.getDate();

    if(month < 10) {
        month = `0${month}`
    }
    if(date < 10) {
        date = `0${date}`
    }

    return `${year}-${month}-${date}`;
}