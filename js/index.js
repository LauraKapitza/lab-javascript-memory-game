const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

/*  FUNCTIONS */
function showPairsClicked() {
  let score = document.getElementById("pairs-clicked");
  score.innerHTML = memoryGame.pairsClicked;
}


window.addEventListener('load', event => {
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  const cardPair = [];
  const cardNames = [];
  
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.add('turned') //turn cards
      
      cardPair.push(card); //save cards

      let cardName = card.dataset.cardName // get card name
      cardNames.push(cardName); //store the card name
      
      // if two cards are clicked
      if (cardNames.length == 2) {
        let result = memoryGame.checkIfPair(cardNames[0], cardNames[1]); //compare card names
        console.log(result)
        if (result) {
          console.log("log")
          cardPair.forEach(card => card.classList.add('blocked')); // block the two cards
          cardPair.length = 0; // empty array
          cardNames.length = 0; //empty array
        } else {
          setTimeout(() => {
            cardPair.forEach(card => card.classList.remove('turned')); //remove "turned class from cards
            cardPair.length = 0; //empty array
            cardNames.length = 0; //empty array
          },750);
        }
      }

      memoryGame.isFinished();
      if (memoryGame.isFinished())
      console.log(`Card clicked: ${card}`);
    });
  });
});
