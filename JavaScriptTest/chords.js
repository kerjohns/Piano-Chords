//this array represents the starting note of the chord
//so 1 = C, 2 = C#, 3 = D, etc. 
//                C  C# D  D# E  F  F# G  G# A   A#  B
const starting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]


function major(root) {
	let third, fifth;
	third = (root + 4) % 12;
	fifth = (root + 7) % 12;
	return [numToNote(root), numToNote(third), numToNote(fifth)];
}

function minor(root) {
	let third, fifth;
	third = (root + 4) % 12;
	fifth = (root + 7) % 12;
	return [numToNote(root), numToNote(third), numToNote(fifth)];
}



//function that will convert a number to its respective note
//and also a note to its respective number(a little touch from GPT)
function numToNote(input) {
    let result;

    if (typeof input === 'number') {
        // Convert number to note
        switch (input) {
            case 1:
                result = "C";
                break;
            case 2:
                result = "C#";
                break;
            case 3:
                result = "D";
                break;
            case 4:
                result = "D#";
                break;
            case 5:
                result = "E";
                break;
            case 6:
                result = "F";
                break;
            case 7:
                result = "F#";
                break;
            case 8:
                result = "G";
                break;
            case 9:
                result = "G#";
                break;
            case 10:
                result = "A";
                break;
            case 11:
                result = "A#";
                break;
            case 12:
                result = "B";
                break;
            default:
                // If the input is not a number corresponding to a note, return null
                result = null;
                break;
        }
    } else if (typeof input === 'string') {
        // Convert note to number
        const noteToNum = {
            "C": 1,
            "C#": 2,
            "Db": 2,
            "D": 3,
            "D#": 4,
            "Eb": 4,
            "E": 5,
            "F": 6,
            "F#": 7,
            "Gb": 7,
            "G": 8,
            "G#": 9,
            "Ab": 9,
            "A": 10,
            "A#": 11,
            "Bb": 11,
            "B": 12
        };

        // Use the noteToNumber object to get the corresponding number for the given note
        result = noteToNum[input.toUpperCase()] || null;
        //I think this will run the newly converted number back through so we get a letter
        result = numToNote(result);
    } else {
        // If the input is neither a number nor a string, return null
        result = null;
    }

    return result;
}
