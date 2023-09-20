/** 
 * #number: 변해야할 숫자
 * #inc : 증가버튼
 * #dec : 감소버튼
 * */ 
const num = document.getElementById('number')
const inc = document.querySelector('#inc')
const dec = document.getElementById('dec')
// const send = document.getElementById('send')
const bar = document.querySelector('.bar')
console.log(bar)
// console.log(num)
// console.log(inc)
// console.log(dec)


// 증감할 값이 들어있는 변수
let counter = 0;

// inc : increment(증가)하는 일
// addEventListener('이벤트이름', 함수)
// inc.addEventListener('click', function(){})
inc.addEventListener('click', () => {
    // 1. 누적시키는 방법
    // counter = counter + 1;
    // counter += 1;
    // 2. 증가연산자
    if(counter < 100){
        counter += 10;
        // number의 텍스트 값이 증가
        num.textContent = `${counter} `
        // bar의 길이가 증가
        bar.style.width = `${counter}%`
        console.log(counter)
        // inc.style.transform = `rotate(${counter}deg)`
    }
})

// dec : decrement(감소)하는 일
dec.addEventListener('click', () => {
    if(counter > 0){
        counter -= 10;
        num.textContent = counter;
        bar.style.width = `${counter}%`
    }
    // dec.style.transform = `rotate(${counter}deg)`
    console.log(counter);
})

// innerText, textContent, innerHTML
// send.addEventListener('mouseover', () => {
//     send.style.transform = `translateX(${counter}%)`
// })
