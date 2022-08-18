//We have 3 rows and each row has a box. We can allow the player to click on a box and update the textContent
//Once we have a row = 3. For that when that row is click we can add +1 to the row and if row = 3 then win
// variable to switch players
// Play one is a x and player two is a circle 

let switchPlayer = 1;
let boix1 =  document.querySelector('.box1')
console.log('yo')
document.querySelector('.box1').addEventListener('click', function(){
if(switchPlayer == 1){
boix1.insertAdjacentHTML("beforeend",'<div>X</div>')
switchPlayer += 1;
} else if(switchPlayer == 2){
    boix1.insertAdjacentHTML("beforeend",'<div>O</div>') 
    switchPlayer -= 1;
}
console.log(switchPlayer)
})
