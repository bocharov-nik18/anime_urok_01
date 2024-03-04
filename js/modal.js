const modal = document.querySelector('.search-model')
const modalBtn = document.querySelector('.icon_search')
const modalClose = modal.querySelector('.search-close-switch')
console.log(modal);
console.log(modalBtn);
console.log(modalClose);
modalBtn.addEventListener('click', () => {
    modal.style.display = 'block'
})

modalClose.addEventListener('click', () => {
    modal.style.display = 'none'
})
