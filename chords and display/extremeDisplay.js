// Attach event listener to the button for displaying chord notes
document.addEventListener("DOMContentLoaded", function() {
    var flip = document.getElementById('flip');
    var next = document.getElementById('next');
    var chordNotes; // Declare chordNotes outside the event listeners

    next.addEventListener('click', function(event) {
        noteName.style.display = 'block';
        chordName.style.display = 'none';
        isSUS = false;

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
                isSUS = true;
                break;
            case 5:
                chordNotes = sus4(randomRoot);
                document.getElementById("noteName").innerHTML = numToNote(randomRoot) + "sus4";
                isSUS = true;
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
            case 2:
                //do nothing
                break;
            default:
                break;
        }

        const ninthDecision = Math.floor(Math.random() * 3); // 0 for add9

        switch(ninthDecision) {
            case 0:
                if (isSUS == false) {
                    chordNotes.push(addNine(randomRoot)[0]);
                    document.getElementById("noteName").innerHTML += "add9";
                }
                break;
            case 1:
                //do nothing
                break;
            default:
                break;
        }

        const eleventhDecision = Math.floor(Math.random() * 2); // 0 for add11

        switch(eleventhDecision) {
            case 0:
                if (isSUS == false) {
                    chordNotes.push(addEleven(randomRoot)[0]);
                    document.getElementById("noteName").innerHTML += "add11";
                }
                break;
            case 1:
                //do nothing
                break;
            default:
                break;
        }

        const thirteenthDecision = Math.floor(Math.random() * 2); // 0 for add13

        switch(thirteenthDecision) {
            case 0:
                chordNotes.push(addThirteen(randomRoot)[0]);
                document.getElementById("noteName").innerHTML += "add13";
                break;
            case 1:
                //do nothing
                break;
            default:
                break;
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
});