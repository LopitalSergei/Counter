"use strict"

let count = 0;

function changeCount(num) {
	if (num > 0) {
		count++;
	}
	else {
		count--;
	}

	document.getElementById("count").innerHTML = count;
}