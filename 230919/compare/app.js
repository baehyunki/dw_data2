// app.js
// title이라는 아이디를 가진 요소를 변수에 담아서 콘솔로 출력해주세요 변수이름은 : title

// getElementById는 ID를 기반으로 찾기때문에, #이라는 표현을 따로 적어주지 않아도 된다.
// const title = document.getElementById('title')

// querySelector는 태그, 클래스, 아이디 등 범용으로 사용하기때문에 꼭 아이디인지, 클래스인지, 태그인지 구분해서 적어줘야한다.
// const title = document.querySelector('#title')

// const content = document.getElementById('title')
// console.log(title)

// querySelector를 이용해서 title이라는 클래스를 가진 요소를 탐색해서, title 변수에 담아 출력해주세요
const title = document.querySelectorAll(".title");
console.log(title);

// h1태그를 출력해보세요

for (let i = 0; i < title.length; i++) {
  // 요소들의 텍스트 내용을 `i번째 요소입니다`로 변경
  // title[i].style.fontSize = `${(i + 10) * 2}px`;
  // title[i].style.fontWeight = '100';
  // title[i].style.color = 'red'
  //   console.log(title.length);

  // i번째의 텍스트를 변경
  title[i].textContent = `${i}번째 요소입니다.`;

  // i번째의 red 클래스를 추가
  title[i].classList.add("red");
  
  // 배열의 마지막요소의 red 클래스를 제거
  title[title.length - 1].classList.remove("red");
}
