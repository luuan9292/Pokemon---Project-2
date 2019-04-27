/*----- CARD MEMORY ----- */
window.onload = function() {
	
const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function Flipcard() {
	if(lockBoard) return;
	if(this === firstCard) return;

	this.classList.add('flip');

	if(!hasFlippedCard) {
		//first click
		hasFlippedCard = true;
		firstCard = this;

		return;
	}
		//second card
	secondCard = this;

	checkForMatch();
}

function checkForMatch() {
	let isMatch = firstCard.dataset.framework === secondCard.dataset.framework

	isMatch ? disableCards() : unFlipCards();
}

function disableCards() {
	firstCard.removeEventListener('click', Flipcard);
    secondCard.removeEventListener('click', Flipcard);

	resetBoard();
}

function unFlipCards() {
	lockBoard = true;

	setTimeout(() => {
		firstCard.classList.remove('flip');
		secondCard.classList.remove('flip');

		resetBoard();
	}, 1000);
}

function resetBoard() {
	[hasFlippedCard, lockBoard] = [false, false];
	[firstCard, secondCard] = [null, null];
}

(function shuffle() {
	cards.forEach(card => {
		let randomPos = Math.floor(Math.random() * 24);
		card.style.order = randomPos;
	});
})();

cards.forEach(card => card.addEventListener('click', Flipcard));

}