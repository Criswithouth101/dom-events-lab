/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const equals = document.querySelector('.button.equals');
const numbers = document.querySelectorAll('.button.number');
const operator = document.querySelectorAll('.button.operator');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');
const clear = document.querySelector('.button.clear');



let firstNumber = null;
let secondNumber = null;
let selectedOperator = null;
let result = null;

// classify buttons 

function logAButton(event) {
    console.log('calling the function that assigns type of button:',
        event.target.innerText
    );

    console.log(event);
    const clickedButton = event.target;
    console.log('you clicked:',clickedButton);

    if (clickedButton.classList.contains('number')) {
        console.log('this is a number');
    
        if (firstNumber === null) {
            firstNumber = parseInt(event.target.textContent);
            return console.log('this is the first:',firstNumber);
        }
        secondNumber = parseInt(event.target.textContent);
        console.log('this is the second:',secondNumber)
    }

    if (clickedButton.classList.contains('operator')) {
        console.log('this is a operator');

        selectedOperator = event.target.textContent
            return console.log('operator:',selectedOperator);

    }
}

// mathematical function 

function calculateTotal(event) {
    console.log('calling the function that does the math');

    if (firstNumber !== null && secondNumber !== null && selectedOperator !== null){
        console.log('all values selected')
    } else { console.log('insuficient values')
    }
    if (selectedOperator === '+'){               
        result = firstNumber + secondNumber;
        console.log(result)
        }
    if (selectedOperator === '-'){               
        result = firstNumber - secondNumber;
        console.log(result)
            }
    if (selectedOperator === '*'){               
        result = firstNumber * secondNumber;
        console.log(result)
                }
    if (selectedOperator === '/'){               
        result = firstNumber / secondNumber;
        console.log(result)
            }
    display.textContent = result; // result will be visible in the calculator screen

    firstNumber = result;
    secondNumber = null;
    selectedOperator = null;  
    };
    
    function cleanCalculator(event) {
        console.log('cleaning the calculator');
            firstNumber = null;
            secondNumber = null;
            selectedOperator = null; 
            result = null;
            display.textContent = 0; 
    }

 clear.addEventListener('click', () =>{
    cleanCalculator();
            });

 // print the numbers, operators and total 
    equals.addEventListener('click', () =>{
        calculateTotal();
                });

buttons.forEach((buttons) =>
    buttons.addEventListener('click', logAButton)
);


      


  

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
