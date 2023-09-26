console.log('running...')
const tabButtons = document.querySelectorAll('.tab-button')
const tabItems = document.querySelectorAll('.tab-item')

console.log(tabButtons)
// for(let i = 0; i < tabButtons.length; i++){
//     tabButtons[i].addEventListener('click', () => {
//         for(let j = 0; j < tabButtons.length; j++){
//             tabButtons[j].classList.remove('selected')
//             tabItems[j].classList.remove('show')
//         }

//         tabButtons[i].classList.add('selected')
//         tabItems[i].classList.add('show')
//     })
// }
tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        tabButtons.forEach((item, idx) => {
            item.classList.remove('selected')
            tabItems[idx].classList.remove('show')
        })
        button.classList.add('selected')        
        tabItems[index].classList.add('show')
    })
})