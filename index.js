//  DOM elements - Create the variables and wrap them into an ID 
const usrnameEl =document.getElementById("usrname");
const eMsg = document.getElementById("message");
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboard = document.getElementById("clipboard");

console.log("generateEl: ", generateEl); //remove
console.log("clipboard: ", clipboard);  //remove

// Define the Objects for the random password selection that will be 
// called into an Array called typesArr in order to generate the random password
const randomFunc = {
	lower: getRandomLower, 
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
};
console.log(randomFunc);  //remove

// This is the clipboard Event for when we click the clipboard
//  it will advised that the password was copied to the clipboard
clipboard.addEventListener("click", () => {
	const textarea = document.createElement("textarea");
	const password = resultEl.innerText;

	if (!password) {
		return;
	}

	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand("copy");
	textarea.remove();
	alert("Password copied to clipboard");
});

// Generate Event Listener.  This step should not generate the password, just listen
// and validate if all the criteria boxes have been checked.  If less than 4 of the bozes are checked
// and the generate button is clicked, a messsage should pop up to let the user know that they must check
// all the boxes.   If all four boxes are checks, the message goes away and the process goes to the next step
// which will validate that all four boxes have been checked and generate the password.

generateEl.addEventListener("click", () => {
	const length = +lengthEl.value;

	console.log(length); //Remove
	console.log(typeof length); //Remove

	const hasLower = lowercaseEl.checked;  //lower is checked
	const hasUpper = uppercaseEl.checked;  //upper is checked
	const hasNumber = numbersEl.checked;   //numbers is checked 	
	const hasSymbol = symbolsEl.checked;   //symbol is checked
	
	console.log(hasLower, hasUpper, hasNumber, hasSymbol);

	let eMsg = document.getElementById("message");

	// if (!hasLower && !hasUpper && !hasNumber && !hasSymbol) {
	if (!hasLower || !hasUpper || !hasNumber || !hasSymbol) {
		eMsg.style.display = "block";
		return ' ';
		console.log(eMsg); //Remove
	} else{
		eMsg.style.display = "none"; 		
		resultEl.innerText = generatePassword(
			hasLower,
			hasUpper,
			hasNumber,
			hasSymbol,
			length
		);
	}
});

//This section validates and Generate the Password function. Initialize the password variable
function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = "";

	// Counts the number of checked items in types count, true or false
	const typesCount = lower + upper + number + symbol;
	  console.log('typesCount: ', typesCount);

	//create an array based on the defined Objects which if the boxes are checke
    //  if check, it returns a True, if not a false
	const typesArr = [ randomFunc.lower, randomFunc.upper, randomFunc.number, randomFunc.symbol];

	console.log(typesArr);
	
	//generate the password by looping over the length
	// if j = to the length of the password, increment by the number of checked 
	// boxes (typesCount) which counts trues or false according to how many boxes are checked
	// loop thru the array forEach to get the typesCount of (lower, upper, number, symbol) which should all be True.
	// to do this we need to call the typesArray where we defined the Objects keys for we created above called randomFunc
	// and pass the array type into object type
	// generate the password by appending unto it the upper lower etc	
	
		for(var j=0; j<length; j += typesCount){
		typesArr.forEach(((type, index) => {
			generatedPassword += typesArr[index](0);
		}));
	}

	// for(let j = 0; j < length; j += typesCount) {
	// 	typesArr.forEach(type => {
	// 	 		const funcName = Object.keys(type)[0];
		
	// 	 		console.log('funcName: ', funcName);
	// 			 generatedPassword += randomFunc[funcName]();
				 	
	// 	 	});
		
	// 	 	}

	console.log(generatedPassword);

	return generatedPassword;
}

//****************************************** */
// Generate password function 
// function generatePassword(lower, upper, number, symbol, length) {
// 	let generatedPassword = "";

	// Counts the number of checked items in types count, true or false
// const typesCount = lower + upper + number + symbol;
//   console.log('typesCount: ', typesCount);

  //create an array based on if the boxes are checke
  //  if check, it returns a True, if not a false
  // we don't want to filter out the false
// const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
// (
//   item => Object.values (item) [0]
// );


// console.log('typesArr: ',typesArr);

// if none of the boxes are checked, return an empty string
// don't even generate the epassword
// if(typesCount ===0) {
// 	return ' ';
// }

//generate the password by looping over the length
// if i = to the length of the password, increment by the number of checked 
// boxes (typesCount) which counts trues or false according to how many boxes are checked
// loop thru the array forEach to get the type, lower, upper, number, symbol
// to do this we need to call the Objects keys we created above called randomFunc
// and pass the array type into object type
// generate the password by appending unto it the upper lower etc
// for(let i = 0; i < length; i += typesCount) {
// 	typesArr.forEach(type => {
// 		const funcName = Object.keys(type)[0];

// 		console.log('funcName: ', FuncName);
// 		generatedPassword += randomFunc[funcName]();	
// 	});

// 	}
// 	console.log(generatedPassword)
// 	const finalPassword = generatedPassword.slice(0, length);
// }

//**********************************************8 */

//  Generator Functions to get the codes for the character sets - http://www.net-comber.com/charset.html
// math.random Math.floor(Math.random()  * 26) + 97); will get the length/span of the alphabets
// plus the character code of lowercase set to produce random letters
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// math.random Math.floor(Math.random()  * 26) + 65); will get the length/floor of the alphabets
// plus the character code of uppercase set to produce random letters
function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// math.random Math.floor(Math.random()  * 10) + 48); will get the length/floor of the numbers
// plus the numbers code of numbers set to produce random number
function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// we define the string of symbols and then use a return function with math.floor * the symbols length 
// to get a return of random symbols
function getRandomSymbol() {
	const symbols = "!@#$%^&*(){}[]=<>/,.";
	return symbols[Math.floor(Math.random() * symbols.length)];
}

