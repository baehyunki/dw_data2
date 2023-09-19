/**
 * const 이용해서 title이란 변수에 
 * h1#title 요소를 담아주세요
 */
const title = document.getElementById('title')
console.log(title)
// getElementById(), querySelector(), querySelectorAll()
// 1. button 가져와서 변수에 담는다 (#btn)
// const button = document.getElementById('btn')
const button = document.querySelector('#btn')

// 2. container 가져와서 변수에 담는다 (.container)
const container = document.querySelector('.container')

// 3. button 클릭했을때 container에 bg 클래스를 추가한다.
button.addEventListener('click', () => {
    container.classList.add('bg')
})

// 제목을 클릭했을때, alert 창에 '클릭'이라는 문구가 출력
// addEventListener('이벤트이름', 실행할 함수)
title.addEventListener('click', () => {
    // alert('클릭')
    // 클릭을 했을때 컬러가 red가 되도록 변경
    
    // title의 컬러값이 red라면
    if(title.style.color === 'red'){
        // title의 컬러값을 black
        title.style.color = 'black'
    } else { 
        // title의 컬러값을 red
        title.style.color = 'red'
    }
})