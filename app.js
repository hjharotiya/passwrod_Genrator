let passwordRange = 8;
const genrateBtn = document.querySelector(".genBtn");
const passwordRangeEl = document.getElementById("range");
const rangeNum = document.getElementById("lengthDigit");

let isupper = false;
let isnumbers = false;
let isSymbols = false;



passwordRangeEl.addEventListener("input", (e) => {
	passwordRange = +e.target.value;
	rangeNum.textContent = passwordRange;

})

const genratePassword = (passlength) => {
	const smallAlpahbets = isupper ?"ABCDEFGHIJKLMNOPQRSTUVWXYZ":"";
const capitalAlphabest =  "abcdefghijklmnopqrstuvwxyz";
const numbers = isnumbers? "1234567890":"";
	const specialCha = isSymbols ? "!@#$%^&*()+_-=":"";
	const passChar = capitalAlphabest + smallAlpahbets + numbers + specialCha;

	let password = "";

	for (let i = 0; i < passlength; i++){
		const charIndex = Math.floor(Math.random() * passChar.length);
		password += passChar[charIndex];
	}
	return password;
}
const passwordEl = document.getElementById("password");

genrateBtn.addEventListener("click", () => {

	
	const upperCaseEl=document.getElementById("uppercase")
	const numberCaseEl=document.getElementById("numbers")
	const symbolCaseEl = document.getElementById("symbols")
	
	isupper = upperCaseEl.checked;
	isnumbers = numberCaseEl.checked;
	isSymbols = symbolCaseEl.checked;

	const password = genratePassword(passwordRange)
	passwordEl.innerHTML = password;

})

passwordEl.addEventListener("click", (e) => {
	if (e.target.innerText.length > 0) {
		navigator.clipboard.writeText(passwordEl.textContent).then(() => {
			alert("copied to clipboard");
		}).catch((err) => {
			alert("could not copy")
		})
	}
})