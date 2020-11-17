const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
console.log(nameInput.textContent);
console.log(nameOutput.textContent);
nameInput.addEventListener('input', onInputChange);

function onInputChange(event) {
	if (event.currentTarget.value.length === 0) {
		nameOutput.textContent = 'незнакомец';
	} else {
		nameOutput.textContent = event.currentTarget.value;
	}
}
