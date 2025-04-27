/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const equals = document.querySelector('.button.equals');
const numbers = document.querySelectorAll('.button.number');
const operator = document.querySelectorAll('.button.operator');
const calculator = document.querySelector('#calculator');


let firstNumber = null;
let secondNumber = null;
let selectedOperator = null;

function logAButton(event) {
    console.log('calling the function that assigns the number:',
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
        const sum = firstNumber + secondNumber;
        console.log(sum)
        }
    if (selectedOperator === '-'){               
            const minus = firstNumber - secondNumber;
            console.log(minus)
            }
    if (selectedOperator === '*'){               
        const multiply = firstNumber * secondNumber;
        console.log(multiply)
                }
      if (selectedOperator === '/'){               
            const divide = firstNumber / secondNumber;
            console.log(divide)
            }
    }

equals.addEventListener('click', () =>{
    calculateTotal();
})




// print the numbers, operators and total 

buttons.forEach((buttons) =>
    buttons.addEventListener('click', logAButton)
);


      


  

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
