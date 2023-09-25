console.log('running...')
const dot = document.querySelector('.dot')
console.log(dot)

window.addEventListener('mousemove', (event) => {
    // console.log(`X 좌표 : ${event.clientX}`)
    // console.log(`Y 좌표 : ${event.clientY}`)
    // console.log(`dot의 width : ${dot.clientWidth / 2}`)
    // console.log(`dot의 height : ${dot.clientHeight / 2}`)
    requestAnimationFrame(() => {
        mouseMove(event)
    })
})

const mouseMove = (event) => {
    dot.style.left = event.clientX - (dot.clientWidth / 2) + 'px';
    dot.style.top = event.clientY - (dot.clientHeight / 2) + 'px';
}

window.addEventListener('click', () => {
    // dot에게 bubble 클래스를 가진 자식요소 추가
    const span = document.createElement('span')
    span.classList.add('bubble')
    dot.append(span)

    setTimeout(() => {
        // 요소를 삭제하는 메소드
        span.remove()
    }, 1000)
})