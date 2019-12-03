function getRandomRgba() {
	var o = Math.round,
		r = Math.random,
		s = 255;
	return (
		"rgba(" +
		o(r() * s) +
		"," +
		o(r() * s) +
		"," +
		o(r() * s) +
		"," +
		r().toFixed(1) +
		")"
	);
}
function createGrid(squaresPerSide) {
	document.documentElement.style.setProperty("--colNum", squaresPerSide);
	let grid = document.getElementById("grid-container");
	for (let i = 0; i < squaresPerSide; i++) {
		for (let j = 0; j < squaresPerSide; j++) {
			let elem = document.createElement("div");

			elem.className = "grid-item";
			elem.onmouseover = function() {
				changeColor(elem);
			};
			grid.appendChild(elem);
		}
	}
}
function changeColor(elem) {
	elem.style.backgroundColor = getRandomRgba();
}
function resetGrid() {
	let grid = document.getElementById("grid-container");
	let validNumber = false;
	grid.childNodes.forEach(child => {
		child.style.backgroundColor = "white";
	});
	let squaresPerSide = prompt(
		"How many squares per side to make the new grid?"
	);
	validNumber = Number.isInteger(parseInt(squaresPerSide));
	console.log(parseInt(squaresPerSide));
	while (!validNumber) {
		squaresPerSide = prompt("Please select a valid number");
		validNumber = Number.isInteger(parseInt(squaresPerSide));
		console.log(parseInt(squaresPerSide));
	}
	grid.innerHTML = "";
	createGrid(squaresPerSide);
}

function clearGrid() {
	let grid = document.getElementById("grid-container");
	grid.childNodes.forEach(child => {
		child.style.backgroundColor = "white";
	});
}
