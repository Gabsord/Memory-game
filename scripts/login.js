const input = document.querySelector('.inputName')
const button = document.querySelector('.submitbutton')
const form = document.querySelector('.form')


input.addEventListener('input', ({target}) => {
    if(target.value.length > 2) {
        button.removeAttribute('disabled')
    }
    else{
        button.setAttribute('disabled' , '')
    }
})

form.addEventListener('submit',(event) => {
    event.preventDefault()
    localStorage.setItem('player', input.value)
    window.location = 'game.html'
    
})

