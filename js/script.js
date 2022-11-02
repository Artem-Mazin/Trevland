"use strict"

const offerCards = document.querySelectorAll('.offers__card'),
  rightBtn = document.querySelector('.switcher__arrow_direction_right'),
  leftBtn = document.querySelector('.switcher__arrow_direction_left');

function hideCards() {
  offerCards.forEach(function (card) {
    card.style.display = "none";
  })
}
function showCard(i = 0) {
  offerCards[i].style.display = "block";
  offerCards[i].style.margin = "auto";
}
hideCards();
showCard();

let i = 0;
function nextCard() {
  hideCards();
  showCard(i);
  i++;
}

function rightClick() {
  rightBtn.addEventListener('click', () => {
    nextCard();
    if (i == offerCards.length) {
      i = 0;
    }
  })
}
rightClick();