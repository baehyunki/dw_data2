// script.js
console.log('running...')

// min: 최솟값, max: 최댓값을 이용한 난수생성
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
// 로또 번호 담을 배열
let lottoNumber = []; // 6개

for(let i = 0;lottoNumber.length < 6;i++){
    // random 변수에 난수 생성한 값 할당
    const random = randomNumber(1,45)
    // lottoNumber 내부에 random과 일치하는 값이 있는지 true/false
    const isEntry = lottoNumber.includes(random)
    // !(not) 값을 뒤집어준다. true => false, false => true
    // isEntry === true , !isEntry === false
    !isEntry ? lottoNumber.push(random) : ''

    // if(isEntry){
    //     '';
    // } else { 
    //     lottoNumber.push(random)
    // }
    // console.log(isEntry)
    // 배열에 요소를 추가
    console.log(lottoNumber)
}


// 배열중에 '어떤값'이 존재하는지 유무에 따라 true, false
lottoNumber.includes('어떤값')
