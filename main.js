var screen = document.getElementById('screenDisplay');

var numOne = document.getElementById('numOne');
var numTwo = document.getElementById('numTwo');

var submitMe = document.querySelector('button')

var displayResult= document.querySelector('#result')
let child = null;
let dis = false;
let output  = '';
let decimal = null;

addToScreen = x => {
    screen.value += x;
    if(x === 'C' && dis){
        screen.value = ''
        
        displayResult.removeChild(child)
        dis = false;
    }   

};


submitMe.addEventListener('click', function(e){
    e.preventDefault()
    
    let binary = screen.value;
    decimal = parseInt(binary, 2);
    
    displayM()

  

})

displayM = () => {
    if(!dis){
        child = document.createTextNode(decimal)
        displayResult.appendChild(child)
        output = displayResult
        dis = true;
        console.log(displayResult)
    }
}
