document.getElementById("maincard").addEventListener("click", flipCard);

function flipCard(){
    //const card = document.querySelector('.flashcard');
    card.style.transform = card.style.transform === 'rotateY(180deg)' ? 'rotateY(0)' : 'rotateY(180deg)';
    
}