var button = document.querySelector('.slick-next');
var topCards = document.querySelector('.top-cards');

var observer = new MutationObserver(function(mutationsList) {
  for (var mutation of mutationsList) {
    if (mutation.attributeName === 'class') {
      if (button.classList.contains('slick-disabled')) {
        topCards.classList.add('hide-after');
      } else {
        topCards.classList.remove('hide-after');
      }
    }
  }
});

observer.observe(button, { attributes: true });

// Check initial state and hide the ::after element if necessary
if (button.classList.contains('slick-disabled')) {
  topCards.classList.add('hide-after');
}


var prevButton = document.querySelector('.slick-prev');
var topCards = document.querySelector('.top-cards');

var observer = new MutationObserver(function(mutationsList) {
  for (var mutation of mutationsList) {
    if (mutation.attributeName === 'class') {
      if (prevButton.classList.contains('slick-disabled')) {
        topCards.classList.add('hide-before');
      } else {
        topCards.classList.remove('hide-before');
      }
    }
  }
});

observer.observe(prevButton, { attributes: true });

// Check initial state and hide the ::before element if necessary
if (prevButton.classList.contains('slick-disabled')) {
  topCards.classList.add('hide-before');
}
