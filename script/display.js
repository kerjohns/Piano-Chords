//add the event listeners to the buttons so that it all works.
document.addEventListener("DOMContentLoaded", function() {
    var flip = document.getElementById('flip');
    var chordNotes; // Declare chordNotes outside the event listeners
    var isChordDisplayed = false; // Initialize to false since the chord name is shown first
    var awesomeSpaceShortcut = 0;

    function displayChordNotes() {
        // Display chord notes
        noteName.style.display = 'none';
        chordName.style.display = 'block';

        //display them from the corresponding elements
        if (chordNotes) {
            document.getElementById("chordName").innerHTML = chordNotes[0] + "    " + chordNotes[1] + "    " + chordNotes[2];
        }
        isChordDisplayed = true; //chords are now displayed, set true
    }

    flip.addEventListener('click', function(event) {
        if (isChordDisplayed) {
            // hide chord notes if the chord is displayed
            noteName.style.display = 'block';
            chordName.style.display = 'none';
            isChordDisplayed = false;
        } else {
            //if it is not display the chord notes
            displayChordNotes();
        }
    });

    var next = document.getElementById('next'); //next function
    next.addEventListener('click', function(event) {
        noteName.style.display = 'block';
        chordName.style.display = 'none';

        // Generate a random number between 1 and 12 for the root note
        const randomRoot = Math.floor(Math.random() * 12) + 1;

        // Generate a random number (0 or 1) to determine major or minor chord
        const randomChordType = Math.floor(Math.random() * 2); // 0 for major, 1 for minor

        // Display chord notes based on random root and chord type
        if (randomChordType === 0) {
            chordNotes = major(randomRoot);
            document.getElementById("noteName").innerHTML = numToNote(randomRoot) + " major";
        } else {
            chordNotes = minor(randomRoot);
            document.getElementById("noteName").innerHTML = numToNote(randomRoot) + " minor";
        }

        // Reset isChordDisplayed to true since chord is displayed after next click
        isChordDisplayed = false;

        console.log(chordNotes);

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
    });
});