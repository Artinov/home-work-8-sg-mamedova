function setText(selector, text) {
	/*
		`selector` is string with CSS-like selector
		`text` - is just string with text we want to change
	*/

	// Write your code here
	
	document.querySelector(selector).innerHTML = text;

}

function setTextAll(selector, text) {
	// Write your code here
}


setText("p", "wasn't that hard, yeah ?");
setTextAll("div .block a", "or was it ?");