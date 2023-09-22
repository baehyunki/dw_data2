const listItem = document.querySelectorAll('.list-item')
// console.log(listItem)

// .list-item 클래스를 가진 모든 요소를 가져와서 반복문처리
for(let i = 0; i < listItem.length; i++){
    // 그 요소중 i번째 요소를 클릭했을때
    listItem[i].addEventListener('click', () => {
        // .list-item 클래스를 가진 모든 요소를 반복문처리
        for(let j = 0; j < listItem.length; j++){
            // .list-item 클래스를 가진 모든 요소에서 selected 클래스를 제거
            listItem[j].classList.remove('selected')
        }

        // 클릭한 i번째 요소에 selected 클래스 추가
        listItem[i].classList.add('selected')
    })
}

// listItem.forEach(item => {
//     item.addEventListener('click',() => {
//         listItem.forEach(list => list.classList.remove('selected'))
//         item.classList.add('selected')
//     }) 
// })

// 변수
// 변수를 선언하는 방법
let y = 0;
y = 1;
console.log(y)

// 상수
// 상수는 바뀔수 없다
const text = '고양이'
// text = '강아지'
console.log(text)
