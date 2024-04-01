function major(root) {
	let third, fifth;
	third = (root + 4) % 12;
	fifth = (root + 7) % 12;
	return [numToNote(root), numToNote(third), numToNote(fifth)];
}

function minor(root) {
	let third, fifth;
	third = (root + 3) % 12;
	fifth = (root + 7) % 12;
	return [numToNote(root), numToNote(third), numToNote(fifth)];
}

function dim(root) {
	let third, fifth;
	third = (root + 3) % 12;
	fifth = (root + 6) % 12;
	return [numToNote(root), numToNote(third), numToNote(fifth)];
}

function aug(root) {
	let third, fifth;
	third = (root + 4) % 12;
	fifth = (root + 8) % 12;
	return [numToNote(root), numToNote(third), numToNote(fifth)];
}

function sus2(root) {
	let third, fifth;
	third = (root + 2) % 12;
	fifth = (root + 7) % 12;
	return [numToNote(root), numToNote(third), numToNote(fifth)];
}

function sus4(root) {
	let third, fifth;
	third = (root + 5) % 12;
	third = (root + 7) % 12;
	return [numToNote(root), numToNote(third), numToNote(fifth)];
}

function domSeven(root) {
	//this function just returns the dominant seventh for any root
	let seventh;
	seventh = (root + 10) % 12;
	return [numToNote(seventh)];
}

function majSeven(root) {
	//this function just returns the major seventh for any root
	let seventh;
	seventh = (root + 11) % 12;
	return [numToNote(seventh)];
}

function addNine(root) {
	//this function adds the 9th notes (also known as a second)
	let ninth;
	ninth = (root + 2) % 12;
	return [numToNote(ninth)];
}

function addEleven(root) {
	//this function adds the 11th notes (also known as a second)
	let ninth;
	ninth = (root + 5) % 12;
	return [numToNote(ninth)];
}

function addThirteen(root) {
	//this function adds the 13th notes (also known as a second)
	let ninth;
	ninth = (root + 9) % 12;
	return [numToNote(ninth)];
}


//function that will convert a number to its respective note
function numToNote(input) {
    const noteNames = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    return noteNames[(input - 1 + 12) % 12];
}
