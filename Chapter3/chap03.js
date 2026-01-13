// 개체 구조 분해 할당

let person = {
    name: "Alice",
    age: 20,
    city: "New York",
    job: "Nurse"
};

const { age, name, ...rest} = person;

console.log(rest);
// 배열의 구조 분해 할당

const colors = ["red", "blue", "green"];

// const firstColor = colors[0];
// const secondColor = colors[1];

const [ firstColor, ...res] = colors;

console.log(firstColor);

console.log(res);

// 객체의 스프레드 연산
const person1 = {name: "Bob", age: 23};
const person2 = {
    ...person1,
    name: "Sandy",
    city: "Busan",
};

console.log(person1);
console.log(person2);

// 배열의 스프레드 연산
const fruits = ["Apple", "Banana"];
const fruits2 = [...fruits, "Mango"];

console.log(fruits2);

// 함수의 나머지 매개변수
function sum(...paras) {
    let ret = 0;

    paras.forEach((paras) => {
        ret += paras;
    });
    console.log(ret);
}
sum(10,20);
sum(1,2,3,45,6,7);