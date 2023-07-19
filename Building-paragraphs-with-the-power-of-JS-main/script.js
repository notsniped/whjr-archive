function getParagraph1() {
	var inputs = [];
	for (var i = 1 ; i <=6 ; i++) {
		inputs.push(document.getElementById("div1_input_box_" + i).value);
	}
	document.getElementById("showParagraph1").innerHTML = inputs.join(". ");
}
function getParagraph2() {
	var inputs = [];
	for (var i = 1 ; i <= 6 ; i++) {
		inputs.push(document.getElementById("div2_input_box_" + i).value);
	}
	document.getElementById("showParagraph2").innerHTML = inputs.join(" ");
}