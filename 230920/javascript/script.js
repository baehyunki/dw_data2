// 더하기 함수 ES5 형식
function add(x, y){
    return x + y;
}
// 실행
console.log(add(2, 3))

// Fat arrow function, 혹은 화살표함수
const addFunc = (x,y) => {
    return console.log(x + y);
}
// 실행
addFunc(5, 5)

// 매개변수가 하나일때, 화살표함수를 축약해서 표현하는 방법
// const double = (x) => {
//     return console.log(x * x);
// }
const double = x => console.log(x * x);

// 매개변수를 제곱하는 함수
double(4)

// 일반적인 화살표함수의 형태
// const showName = (name) => {
//     return console.log(`제 이름은 ${name}입니다`)
// }
// 화살표함수 축약형
// 따옴표 종류 : 작은따옴표, 큰따옴표, 백틱(backtick :  esc 키 밑에 있는 키)

// ES5 형식의 함수형태로 바꿔주세요
// const showName = name => console.log(`제 이름은 ${name}입니다`)

// if문
const 조건 = true
if(조건){
    // 조건이 맞을 경우 실행되는 내용
    console.log(조건)
} else {
    // 조건이 안 맞을 경우 실행되는 내용
}


// ES6이전에 쓰이던 일반적인 함수 선언형태
function showName(name){
    console.log(`매개변수의 타입은 ${typeof name}입니다`);    
    
    // length는 배열, 문자열의 길이를 알아낼때 사용할 수 있다.
    console.log(name.length)
    
    // 매개변수 name의 타입이 'string'일 경우에만 출력
    if(typeof name === 'string'){
        return console.log(`제 이름은 ${name}입니다`)
    }
    // return 아래에 작성된 내용은 실행되지 않는다.
}

showName('배현기')
