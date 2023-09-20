//color.js
// console.log('color')

/**
 * .color: 색깔이 반영되는 곳
 * .plus : 수치를 증가시키는 버튼
 * .minus : 수치를 감소시키는 버튼
 * .hue : 반영된 수치가 나타는 곳 (범위:0 ~ 360)
 */

const color = document.querySelector(".color");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const hue = document.querySelector(".hue");

// 콘솔로 출력
// console.log(color)
// console.log(plus)
// console.log(minus)
// console.log(hue)

let value = 0;

// changeHue : 컬러값을 변경해주는 함수
const changeHue = (param) => {
    // hue의 텍스트 값을 param
    hue.textContent = param;
    // color의 hue 값을 param
    color.style.backgroundColor = `hsl(${param}, 50%, 50%)`
}

// 수치가 증가하는 버튼
plus.addEventListener("click", () => {
  if (value < 360) {    
    value += 10;    
    changeHue(value)    
  }
});

// 수치가 감소하는 버튼
minus.addEventListener("click", () => {
  if (value > 0) {    
    value -= 10;
    changeHue(value)    
  }
});

