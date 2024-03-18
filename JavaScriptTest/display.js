// Attach event listener to the button for displaying chord notes
document.addEventListener("DOMContentLoaded", function() {
    var flip = document.getElementById('flip');
    flip.addEventListener('click', function(event) {
        // Generate a random number between 1 and 12 for the root note
        const randomRoot = Math.floor(Math.random() * 12) + 1;

        // Generate a random number (0 or 1) to determine major or minor chord
        const randomChordType = Math.floor(Math.random() * 2); // 0 for major, 1 for minor

        // Display chord notes based on random root and chord type
        let chordNotes;
        if (randomChordType === 0) {
            chordNotes = major(randomRoot);
            document.getElementById("noteName").innerHTML = numToNote(randomRoot) + " major";
        } else {
            chordNotes = minor(randomRoot);
            document.getElementById("noteName").innerHTML = numToNote(randomRoot) + " minor";
        }

        // Display chord notes in the corresponding <p> elements
        document.getElementsByClassName("notes")[0].innerHTML = chordNotes[0];
        document.getElementsByClassName("notes")[1].innerHTML = chordNotes[1];
        document.getElementsByClassName("notes")[2].innerHTML = chordNotes[2];
    });
});