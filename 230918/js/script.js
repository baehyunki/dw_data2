const userName = document.getElementById('username')
console.log(userName)

// userName의 텍스트 내용을 prompt에서 받은 값으로 교체
// prompt('사용자에게 보여줄 메세지', '기본값')
let value = prompt('이름을 입력해주세요', '배현기');
userName.textContent = value;

// userName의 컬러를 변경해주세요
let color = prompt('원하는 컬러를 입력해주세요', 'dodgerblue');
userName.style.color = color;

// 폰트 사이즈 값을 받아 적용해보세요
let size = prompt('폰트 사이즈를 입력해주세요', '30px');
userName.style.fontSize = size;

// console.log(value)