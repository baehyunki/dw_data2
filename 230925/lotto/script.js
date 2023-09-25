// script.js
// console.log('running...')
const button = document.getElementById("generate");
const li = document.querySelectorAll("#result > li");

// min: 최솟값, max: 최댓값을 이용한 난수생성
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// 로또 번호 담을 배열
let lottoNumber = []; // 6개

button.addEventListener("click", () => {
  // 버튼 비활성화
  button.classList.add("processing");

  // 로또번호 초기화 : 로또 번호 길이 체크 후 비워주기 
  if (lottoNumber.length > 0) {
    lottoNumber = [];
  }

  // 로또번호를 생성하는 반복문
  for (let i = 0; lottoNumber.length < 6; i++) {
    const random = randomNumber(1, 45);
    const isEntry = lottoNumber.includes(random);
    !isEntry ? lottoNumber.push(random) : "";
  }

  // 오름차순 정렬
  lottoNumber = lottoNumber.sort((a, b) => a - b);

  // 처리 속도 변수
  let timer = 200;

  // 로또번호를 요소에 추가하는 반복문
  for (let i = 0; i < lottoNumber.length; i++) {
    setTimeout(() => {
      li[i].textContent = lottoNumber[i];
    }, timer * i);
  }
  
  // 버튼 활성화
  setTimeout(() => {
    button.classList.remove("processing");
  }, timer * lottoNumber.length);
});
