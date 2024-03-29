// Attach event listener to the button for displaying chord notes
document.addEventListener("DOMContentLoaded", function() {
    var flip = document.getElementById('flip');
    var next = document.getElementById('next');
    var chordNotes; // Declare chordNotes outside the event listeners
    var isChordDisplayed = false; // Initialize to false since the chord name is shown first
    
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

    next.addEventListener('click', function(event) {
        noteName.style.display = 'block';
        chordName.style.display = 'none';

        // Generate a random number between 1 and 12 for the root note
        const randomRoot = Math.floor(Math.random() * 12) + 1;

        // Generate a random number (0 through 4) to select one of the chord types
        const randomChordType = Math.floor(Math.random() * 5); // 0 to 4 for all chord types

        // Display chord notes based on random root and chord type
        switch(randomChordType) {
            case 0:
                chordNotes = major(randomRoot);
                document.getElementById("noteName").innerHTML = numToNote(randomRoot) + "";
                break;
            case 1:
                chordNotes = minor(randomRoot);
                document.getElementById("noteName").innerHTML = numToNote(randomRoot) + "m";
                break;
            case 2:
                chordNotes = dim(randomRoot);
                document.getElementById("noteName").innerHTML = numToNote(randomRoot) + "dim";
                break;
            case 3:
                chordNotes = aug(randomRoot);
                document.getElementById("noteName").innerHTML = numToNote(randomRoot) + "aug";
                break;
            case 4:
                chordNotes = sus2(randomRoot);
                document.getElementById("noteName").innerHTML = numToNote(randomRoot) + "sus2";
                break;
            case 5:
                chordNotes = sus4(randomRoot);
                document.getElementById("noteName").innerHTML = numToNote(randomRoot) + "sus4";
                break;
            default:
                break;
        }

        //roll a random number and decide if it should be a seventh chord or not
        const seventhDecision = Math.floor(Math.random() * 3); // 2 for no change, 1 for domSeven, 0 for majSeven

        switch(seventhDecision) {
            case 0:
                chordNotes.push(majSeven(randomRoot)[0]);
                document.getElementById("noteName").innerHTML += "maj7";
                break;
            case 1:
                chordNotes.push(domSeven(randomRoot)[0]);
                document.getElementById("noteName").innerHTML += "7";
                break;
            case 3:
                //do nothing
                break;
            default:
                break;
        }
        isChordDisplayed =  false;
        console.log(chordNotes);
    })

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
});