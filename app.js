/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const equals = document.querySelector('.button.equals');
const numbers = document.querySelectorAll('.button.number');
const operator = document.querySelectorAll('.button.operator');
const calculator = document.querySelector('#calculator');


let firstNumber = null;
let secondNumber = null;

function logAButton(event) {
    console.log('calling the function that assigns the number:',
        event.target.innerText
    );

    console.log(event);
    const theElement = event.target;
    console.log(theElement);

    if (firstNumber === null) {
        firstNumber = parseInt(event.target.textContent);
        return console.log('this is the first:',firstNumber);
    }
    secondNumber = parseInt(event.target.textContent);
    console.log('this is the second:',secondNumber)
    
}


//print in console the click button 
buttons.forEach((button) => 
    button.addEventListener('click', logAButton)
    );


calculator.addEventListener('click', (event) => {
        
        console.log(event.target.innerText);
      
        // Example
        if (event.target.classList.contains('number')) {
          // Do something with a number
        }
      
        // Example
        if (event.target.innerText === '*') {
          // Do something with this operator
        }
      });
      


  

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
