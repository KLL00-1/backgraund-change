const button = document.getElementById('btn')
const color=document.querySelector('.color')
const hex=[
   '0',
   '1',
   '2',
   '3',
   '4',
   '5',
   '6',
   '7',
   '8',
   '9',
   'A',
   'B',
   'C',
   'D',
   'E',
   'F'
]
button.addEventListener('click', ()=>{
let hexColor = genereteHex()
    document.body.style.backgroundColor= hexColor
color.textContent = hexColor
})
function genereteHex(){
    let hexColor = "#";
    for(let i=0;i <6; i++){
    hexColor +=hex[getRandomnumber()]
}
return hexColor
}
function getRandomnumber(){
    return Math.floor(Math.random()*hex.length)
    } 
    const button2 = document.getElementById('bt2')
    button2.addEventListener("click", ()=>{
        console.log('click')
    })