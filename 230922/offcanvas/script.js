// script.js
console.log('script running...')

/**
 * #sidebar : 사이드바
 * #trigger : 버튼
 * .overlay : 오버레이
 */

// DOM : Document Object Model (HTML구성요소)
// getElementById() : 아이디를 기반으로 DOM을 탐색
// querySelector() : 태그, 아이디, 클래스 등을 기반으로 단일요소 탐색
// querySelectorAll() : 태그, 아이디, 클래스 등을 기반으로 복수요소 탐색 - 유사"배열"형태로 결과 반환

const sidebar = document.getElementById('sidebar')
const trigger = document.querySelector('#trigger')
const overlay = document.querySelector('.overlay')

// console.log(sidebar)
// console.log(trigger)
// console.log(overlay)

/**
 * trigger를 클릭했을때 sidebar가 표시/감춤 처리 
 * ---------------------------------------------
 * addEventListener('이벤트이름', 함수)
 */

trigger.addEventListener('click', () => {
    // classList.contains('클래스명') : "클래스명"가 있는지 유무에 따라 true, false 반환
    // classList.add('클래스명') : '클래스명' 추가
    // sidebar.classList.remove('클래스명') : '클래스명' 제거
    // classList.toggle('클래스명') : 해당요소에 '클래스명'이 있는지 판단해서 유무에 따라 추가 / 삭제
    // sidebar.classList.toggle('open')
    
    if(sidebar.classList.contains('open')){
        sidebar.classList.remove('open')
        overlay.classList.remove('open')
        trigger.textContent = '열기'
        
    } else {
        sidebar.classList.add('open')
        overlay.classList.add('open')
        trigger.textContent = '닫기'
    }
})

overlay.addEventListener('click', () => {
    if(overlay.classList.contains('open')){
        sidebar.classList.remove('open')
        overlay.classList.remove('open')
        trigger.textContent = '열기'
    }    
})