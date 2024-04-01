// Attach event listener to the button for displaying chord notes
document.addEventListener("DOMContentLoaded", function() {
    var flip = document.getElementById('flip');
    var next = document.getElementById('next');
    var chordNotes; // Declare chordNotes outside the event listeners
    canMajSeven = true;
    var awesomeSpaceShortcut = 0;

    next.addEventListener('click', function(event) {
        noteName.style.display = 'block';
        chordName.style.display = 'none';
        

        // Generate a random number between 1 and 12 for the root note
        const randomRoot = Math.floor(Math.random() * 12) + 1;
console.log(randomRoot);
        // Generate a random number (0 through 4) to select one of the chord types
        const randomChordType = Math.floor(Math.random() * 4); // 0 to 3 for all chord types
console.log(randomChordType);
console.log(chordNotes);
        // Display chord notes based on random root and chord type
        switch(randomChordType) {
            case 0:
                chordNotes = major(randomRoot);
                document.getElementById("noteName").innerHTML = numToNote(randomRoot) + "";
                break;
            case 1:
                chordNotes = minor(randomRoot);
                document.getElementById("noteName").innerHTML = numToNote(randomRoot) + "m";
                canMajSeven = false;
                break;
            case 2:
                chordNotes = dim(randomRoot);
                document.getElementById("noteName").innerHTML = numToNote(randomRoot) + "dim";
                canMajSeven = false;
                break;
            case 3:
                chordNotes = aug(randomRoot);
                document.getElementById("noteName").innerHTML = numToNote(randomRoot) + "aug";
                canMajSeven = false;
                break;
            default:
                break;
        }
console.log(canMajSeven);
console.log(chordNotes);
        //roll a random number and decide if it should be a seventh chord or not
        const seventhDecision = Math.floor(Math.random() * 3); // 2 for no change, 1 for domSeven, 0 for majSeven
console.log(seventhDecision);
        
console.log(chordNotes);
        switch(seventhDecision) {
            case 0:
                if (canMajSeven) {
                    chordNotes.push(majSeven(randomRoot)[0]);
                    document.getElementById("noteName").innerHTML += "maj7"; 
                }
                break;
            case 1:
                chordNotes.push(domSeven(randomRoot)[0]);
                document.getElementById("noteName").innerHTML += "7";
                break;
            case 2:
                //do nothing
                break;
            default:
                break;
        }

        canMajSeven = true;
        console.log(chordNotes);
    })

    flip.addEventListener('click', function(event) {
        console.log(chordNotes);
        noteName.style.display = 'none';
        chordName.style.display = 'block';

        // Display chord notes in the corresponding <p> elements
        if (chordNotes) {
            // Display chord notes in the corresponding <p> elements
            document.getElementById("chordName").innerHTML = chordNotes[0] + "    " + chordNotes[1] + "    " + chordNotes[2];
            if (chordNotes[3]) {
                document.getElementById("chordName").innerHTML += "    " + chordNotes[3];
            }
            if (chordNotes[4]) {
                document.getElementById("chordName").innerHTML += "    " + chordNotes[4];
            }
            if (chordNotes[5]) {
                document.getElementById("chordName").innerHTML += "    " + chordNotes[5];
            }
            if (chordNotes[6]) {
                document.getElementById("chordName").innerHTML += "    " + chordNotes[6];
            }
        }
        /*
        document.getElementsByClassName("notes")[1].innerHTML = chordNotes[1];
        document.getElementsByClassName("notes")[2].innerHTML = chordNotes[2];
        */
    });

    // Add event listener for keydown event
    document.addEventListener('keydown', function(event) {
        // Check if the key pressed is 'Enter' or 'Space' key
        if (awesomeSpaceShortcut == 0) { //if thisis the first time pressing space then flip the card and add one to awesomeSpaceCounter
            if (event.key === 'Enter' || event.key === ' ') {
                // Trigger click event of the 'next' button
                flip.click();
                awesomeSpaceShortcut = (awesomeSpaceShortcut + 1) % 2;
            }
        } else if (awesomeSpaceShortcut == 1) {
            if (event.key === 'Enter' || event.key === ' ') {
                // Trigger click event of the 'next' button
                next.click();
                awesomeSpaceShortcut = (awesomeSpaceShortcut + 1) % 2;
            }
        }
        if (event.key === 'Escape') {
            // Redirect to home page when 'Esc' key is pressed
            window.location.href = 'home.html';
        }
    });
});