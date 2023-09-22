const attempts = document.querySelector('.attempts-txt')
const tentativas = localStorage.getItem('attempts')
const reloadBtn = document.querySelector('.reload-Btn')
const returnBtn = document.querySelector('.return-Btn')


attempts.innerHTML= `Tentativas:${tentativas}`

reloadBtn.addEventListener('click', () => {
    localStorage.setItem('attempts', 0)
    window.location = 'game.html'
})

returnBtn.addEventListener('click', () => {
    localStorage.setItem('attempts', 0)
    console.log('clicou')
    window.location = 'indexgit.html'
})