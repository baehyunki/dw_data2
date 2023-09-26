const dataList = document.querySelectorAll('[data-counter]')
console.log(dataList)

// 반복문을 이용해서 dataList안에 있는 data-counter 값을 콘솔로 출력 

// html : data-counter, js : element.dataset.counter
for(let i = 0; i < dataList.length; i++){
    const target = dataList[i].dataset.counter
    let index = 0;
    setInterval(() => {
        if(index < target){
            // 증가
            index++
            console.log(index)            
        }
    }, 10)
}