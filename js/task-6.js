const validInput = document.querySelector('#validation-input')
const dataLength = Number(validInput.dataset.length)

console.log(dataLength)

validInput.addEventListener('blur', offFocusInput)


function offFocusInput(event){
    const valueInput = event.currentTarget.value
    validInput.classList.add('invalid')
    if (valueInput.length === dataLength) {
        validInput.classList.replace('invalid', 'valid')
    } else {validInput.classList.replace('valid', 'invalid')}
    }

      
    
    
    
   
