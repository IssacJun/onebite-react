// 구조 분해 할당
// 배열의 구조 분해 할당
let arr = [1, 2, 3];
let [one, two, three] = arr; // 각각 1, 2, 3이 할당됨
// type은 number, 원래 요소가 number이므로
let [one1, two1] = arr;
let [one2, two2, three2, four] = arr; // four은 undefined
let [one3, two3, three3, four3 = 4] = arr; // arr에서 할당할 수 없을 때 기본값이 세팅됨

console.log(typeof(one));


// 객체의 구조 분해 할당
let person = {
    name: "",
    age: 222,
    hobby: ""
};
let { name, age, hobby } = person;
let { name1, age1, hobby1 = 111 } = person; // 없으면 undefined, 기본값 세팅
let {
    age: myAge // myAge 변수에 age 프로퍼티의 값이 담김
} = person;

console.log(myAge);

// 객체 구조 분해 할당 이용해서 함수 매개변수 받는 방법
// 객체를 넘길때만 매개변수로 중괄호롤 받으면서 접근 가능함
const func = ({name, age, hobby, extra}) => {
    console.log({name, age, hobby, extra});  
};

func(person)
