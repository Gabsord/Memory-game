//elementos

const grid = document.querySelector('.grid')
const personagens = [
    'beth',
    'jerry',
    'jessica',
    'meeseeks',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'scroopy',
    'summer'
]

const player = document.querySelector('.player-name')
const attempts = document.querySelector('.attempts')
let cont = 0

let firstCard 
let secondCard

// Funções

const creatElement = (elemento , classe) => {
    const element = document.createElement(elemento)
    element.className = classe
    return element
}

const creatCard = (personagem) => {

    const card = creatElement('div', 'card')
    const front = creatElement('div', 'front face')
    const back = creatElement('div', 'back face')

    front.style.backgroundImage = `url(./imagens/${personagem}.png)`

    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener('click', revealCard)
    card.setAttribute('data-personagem', personagem)

    return card
}

const checkEndgame = () =>{
    const reveladas = document.querySelectorAll('.reveal-card')
    if(reveladas.length === 20){

        localStorage.setItem('attempts', cont)

        setTimeout(() => {
            window.location = 'end-game.html'
        }, 1000)

        
        

        
        
   
    }

}

const checkCards = () =>{ 

    cont += 1
    attempts.innerHTML = `Attempts:${cont}`

    let firstCharacter =  firstCard.getAttribute('data-personagem')
    let secondCharacter = secondCard.getAttribute('data-personagem')

    if(firstCharacter===secondCharacter){
        setTimeout(()=>{
            firstCard.firstChild.classList.add('disabled-card')
            secondCard.firstChild.classList.add('disabled-card')
    
            firstCard=''
            secondCard=''
        },400)
    

    }
    else{
        setTimeout(() => {
            
            firstCard.classList.remove('reveal-card')
            secondCard.classList.remove('reveal-card')

            firstCard = ''
            secondCard=''
        },500)   
    }
    checkEndgame()

}

const revealCard = ({target}) => {
    const card = target.parentNode
    if (!card.classList.contains('reveal-card')){
        
        if (!firstCard) {
            card.classList.add('reveal-card')
            firstCard = card

            
        }
        else if (!secondCard){
            card.classList.add('reveal-card')
            secondCard = card
            checkCards()
        }       
    }

}
        

const loadGame = () => {
 

    playerName = localStorage.getItem('player') 
    player.innerHTML = `Player:${playerName}`

    const duplicateCards = [...personagens, ...personagens]
    const shuffledCards = duplicateCards.sort(() => Math.random() -0.5)



    shuffledCards.forEach((personagem) => {

    const card = creatCard(personagem)

    grid.appendChild(card)
      
    })
}  

loadGame()