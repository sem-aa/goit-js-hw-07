const validInput = document.querySelector('#validation-input')
const dataLength = Number(validInput.dataset.length)

console.log(dataLength)

validInput.addEventListener('blur', offFocusInput)


function offFocusInput(event){
    const valueInput = event.currentTarget.value
    validInput.classList.add('invalid')
    console.log('Теряет фокус')
    console.log(valueInput)
    console.log(valueInput.length)
    valueInput.length === dataLength ?
    validInput.classList.replace('invalid', 'valid')  : 
    validInput.classList.replace('valid', 'invalid')
    
    }
   
