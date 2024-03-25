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


//function that will convert a number to its respective note
function numToNote(input) {
    const noteNames = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    return noteNames[(input - 1 + 12) % 12];
}
