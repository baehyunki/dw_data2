// setTimeout : 지연된 시간 후에 실행되는 함수
// setTimeout(함수, 시간: 1s = 1000 ms)
setTimeout(() => {
    // console.log('1번째')    
}, 1000)
setTimeout(() => {
    // console.log('2번째')
}, 3000)
setTimeout(() => {
    // console.log('3번째')
}, 500)


// 1초 뒤에 index값을 1로 변경해서 console로 출력
setTimeout(()=>{
    document.body.style.backgroundColor = 'red'
},3000)

let index = 0;
// setInterval : 정해진 시간마다 반복 실행하는 비동기 함수
// setInterval(함수, 시간)
setInterval(() => {
    // 1초마다 index가 증가하도록 처리. 콘솔 출력
    // console.log(`나는 1000ms마다 반복됩니다`)
    index++
    document.body.textContent = index
    console.log(index)
}, 1000)



