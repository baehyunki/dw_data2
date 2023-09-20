// array.js - 배열

const number = [1, 2, 3, 4, 5, 6]
const animal = ['고양이', '강아지', '코끼리']

// number 배열의 길이를 출력해보세요
// todo : 변수명 일치 시킬것
// console.log(number.length)

// 객체, object
const classRoom = {
    number : '202',
    students: '20',
    aircon: true,
    computer : true,
    pokemon : ['피카츄', "꼬부기"],
    func : () => {
        console.log('함수도 담을 수 있습니다')
    }
}
// 객체에는 배열도 담을 수 있다.
// console.log(classRoom.pokemon)
// console.log(classRoom.pokemon[0])
// 객체에 담긴 함수 실행
// classRoom.func()

// classRoom 객체에서 number라는 키를 이용해 값을 출력한 
// classRoom.number = '300'
// console.log(classRoom.number)

// classRoom의 학생 수를 출력해주세요
// console.log(classRoom["students"])

// 점심메뉴

const lunch = [
    {name: "짜장면",cost: 7000},    
    {name: "짬뽕",cost: 8000},
    {name: "김밥",cost: 3500},
    {name : "콩나물국밥",cost: 6000}
]
// "짜장면"이 출력되도록 고쳐보세요
// console.log(lunch[0].name)
// console.log(lunch[0]["name"])

// 콩나물 국밥의 가격을 출력해보세요
// console.log(lunch[3].cost)

// for - 반복문
// for(초기화; 조건; 증가/감소){
    // 반복해서 해야할 일
// }

// 총 합계
let totalCost = 0;

// 리스트 
const list = document.getElementById('list')

for(let i = 0; i < lunch.length; i++){
    // console.log(i);
    // 각 메뉴 이름을 출력해주세요
    // console.log(lunch[i].name);
    // 각 메뉴의 금액을 출력해주세요
    // console.log(lunch[i].cost);
    // '짜장면의 가격은 7000원입니다' 형태로 출력해주세요;
    // number.toLocaleString('ko-kr') 로 적어주면, 현지 통화 기준으로 한국식에 맞춰 천단위 구분자를 표현해준다.
    
    // console.log(lunch[0].cost) 7000 
    // console.log(lunch[1].cost) 8000
    // console.log(lunch[2].cost) 3500
    // console.log(lunch[3].cost) 6000
    
    // totalCost = totalCost + lunch[i].cost
    totalCost += lunch[i].cost
    list.innerHTML += `<li>${lunch[i].name} : ${lunch[i].cost} </li>`
    // document.body.querySelector('#list').innerHTML += `<li>${lunch[i].name} : ${lunch[i].cost} </li>`
}
console.log(totalCost)    

