// Attach event listener to the button for displaying chord notes
document.addEventListener("DOMContentLoaded", function() {
    var flip = document.getElementById('flip');
    var next = document.getElementById('next');
    var chordNotes; // Declare chordNotes outside the event listeners

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
        }
        /*
        document.getElementsByClassName("notes")[1].innerHTML = chordNotes[1];
        document.getElementsByClassName("notes")[2].innerHTML = chordNotes[2];
        */
    });
});