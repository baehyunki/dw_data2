// .image 클래스를 탐색해서 배열(nodelist)로 담는다.
const images = document.querySelectorAll('.image')

// .image nodelist(배열)내용을 꺼내서 반복 
// 배열길이만큼 반복한다
for(let i = 0; i < images.length; i++){

    // image[i]번째를 클릭했을때 기능
    // i번째가 결정되는 시기는 클릭했을때 결정.
    images[i].addEventListener('click', () => {
        
        // 전체 image클래스를 갖고 있는 요소마다 
        // 전부 active 클래스를 삭제해주는 내용
        for(let j = 0; j < images.length; j++){
            images[j].classList.remove('active')
        }

        // 아무도 active 클래스를 안갖고 있는 상태에서
        // 현재 클릭한 i번째 요소에 active를 추가
        images[i].classList.add('active')
    })
}