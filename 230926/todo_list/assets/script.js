console.log('연결')
const input = document.getElementById('add-todo')
const addButton = document.querySelector('.add-button')
const list = document.getElementById('list')

// console.log(input)
// console.log(addButton)
// console.log(list)

// input 창에 사용자가 특정 키를 입력했을때 실행
input.addEventListener('keydown', (e) => {
    // console.log(e.key)
    // enter 키를 눌렀을때 addListItem() 함수실행
    if(e.key === 'Enter'){
        addListItem()
    }
})

// 추가 버튼을 눌렀을때 실행
addButton.addEventListener('click', () => {
    // console.log(input.value)
    addListItem()
})

// list에 할 일을 추가하는 함수
const addListItem = () => {
    // 사용자가 빈 값을 입력했을때 경고창 실행
    if(input.value.length === 0){
        return alert('내용을 입력해주세요')
    }
    // li 요소 생성
    const li = document.createElement('li')
    // li에 사용자의 입력값과 버튼 태그 추가
    li.innerHTML = `${input.value} <button class="list-delete">&#x2716</button>`
    // li에 list-item 클래스 추가
    li.classList.add('list-item')
    // list에 li 요소 추가
    list.append(li)  
    // input에 값을 삭제
    input.value = '';
    // input에 focus 활성화 (사용자가 입력할 수 있게 대기)
    input.focus();
    // localStorage에 저장
    saveList(list.innerHTML)
}

list.addEventListener('click', (e) => {
    // event.currentTarget : 이벤트가 걸려있는 해당요소
    // event.target : 클릭하는 요소
    console.log(e.target)
    // li요소를 클릭했을때
    if(e.target.tagName === 'LI'){
        // checked클래스를 추가하거나 삭제
        e.target.classList.toggle('checked')
        // 현재 상태 저장
        saveList(list.innerHTML)
    }

    // 삭제 버튼을 눌렀을때
    if(e.target.tagName === 'BUTTON'){
        // 삭제 버튼의 부모를 삭제(li요소 삭제)
        e.target.parentElement.remove()
        // localStorage에 현재 상태 저장
        saveList(list.innerHTML)
    }
})

const saveList = (list) => {
    // localStorage에는 JSON형태로 저장
    // 로컬스토리지에 todo라는 이름으로 저장 
    // stringify로 상태를 변환해서 저장
    localStorage.setItem('todo', JSON.stringify(list))
}

const loadList = () => {
    // 로컬스토리지에 'todo'라는 이름으로 값을 가져오고
    // 상태를 html 요소로 사용할 수 있도록 변환
    const getList = JSON.parse(localStorage.getItem('todo'))
    // 변환한 값을 innerHTML로 list에 추가
    list.innerHTML = getList
}
// DOMContentLoaded : DOM이 그려지고 난 뒤
// load : DOM도 그려지고, 이미지와 같은 요소들도 모두 로드 되었을때
document.addEventListener('DOMContentLoaded', loadList())