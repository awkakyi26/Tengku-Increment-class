const addButton = document.querySelector('.add')
const subtractButton = document.querySelector('.subtract')
const displayNumber = document.querySelector('#number')
let currentNumber = 0

displayNumber.textContent = currentNumber

addButton.addEventListener('mouseenter',()=>{
    currentNumber ++
    displayNumber.textContent = currentNumber
})

subtractButton.addEventListener('click',()=>{
    currentNumber --
    displayNumber.textContent = currentNumber
})