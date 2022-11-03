"use strict"

const offerCards = document.querySelectorAll('.offers__card'),
      rightBtn = document.querySelector('.switcher__arrow_direction_right'),
      leftBtn = document.querySelector('.switcher__arrow_direction_left'),
      stripes = document.querySelectorAll('.switcher__stripe_position_not-active');

function hideCards() {
  offerCards.forEach(function (card) {
    card.style.display = "none";
  })
}

let i = 0;
function showCard(i) {
  offerCards[i].style.display = "block";
  offerCards[i].style.margin = "auto";
}
hideCards();
showCard(i);


function nextCard() {
  hideCards();
  showCard(i);
}

function prevCard() {
  hideCards();
  showCard(i);
}

let a = 1
function switchStripe (a) {
  stripes.forEach(function () {
    stripes[a].classList.toggle('switcher__stripe_position_active')
  })
}
switchStripe(a);

function rightClick() {
  rightBtn.addEventListener('click', () => {
    i++;
    a++;
    if (i == offerCards.length) {
      i = 0;
    }
    if (a == stripes.length) {
      a = 0;
    }
    nextCard();
    switchStripe(a);
  })
}
rightClick();

function leftClick() {
  leftBtn.addEventListener('click', () => {
    i--;
    a--;
    if (i < 0) {
      i = offerCards.length - 1;
    }
    if (a < 0) {
      a == stripes.length - 1;
    }
    prevCard();
    switchStripe(a);
  })
}
leftClick();