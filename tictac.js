//We have 3 rows and each row has a box. We can allow the player to click on a box and update the textContent
//Once we have a row = 3. For that when that row is click we can add +1 to the row and if row = 3 then win
// variable to switch players
// Play one is a x and player two is a circle 

let switchPlayer = 1;
let turn1 = 0
let turn2 = 0
let turn3 = 0
let turn4 = 0
let turn5 = 0
let turn6 = 0
let turn7 = 0
let turn8 = 0
let turn9 = 0
let boix1 =  document.querySelector('.box1')
let boix2 =  document.querySelector('.box2')
let boix3 =  document.querySelector('.box3')
let boix4 =  document.querySelector('.box4')
let boix5 =  document.querySelector('.box5')
let boix6 =  document.querySelector('.box6')
let boix7 =  document.querySelector('.box7')
let boix8 =  document.querySelector('.box8')
let boix9 =  document.querySelector('.box9')
console.log('yo')

function boxClick(name, selector, turn){
document.querySelector(name).addEventListener('click', function(){

if(switchPlayer == 1 && turn == 0){
selector.insertAdjacentHTML("beforeend",'<div>X</div>')
switchPlayer += 1;
document.querySelector('h2').textContent = 'Player 2 Turn'

} else if(switchPlayer == 2 && turn == 0){
    selector.insertAdjacentHTML("beforeend",'<div>O</div>') 
    switchPlayer -= 1;
    document.querySelector('h2').textContent = 'Player 1 Turn'
}

console.log(switchPlayer)

turn += 1;
})
}

boxClick('.box1', boix1, turn1)
boxClick('.box2', boix2, turn2)
boxClick('.box3', boix3, turn3)
boxClick('.box4', boix4, turn4)
boxClick('.box5', boix5, turn5)
boxClick('.box6', boix6, turn6)
boxClick('.box7', boix7, turn7)
boxClick('.box8', boix8, turn8)
boxClick('.box9', boix9, turn9)
