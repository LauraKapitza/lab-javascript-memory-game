class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    let cardsPile = this.cards.slice(); //make a copy of the cards pile
    let i = cardsPile.length;
    const shuffledCards = []; // create a variable to store shuffled cards
    
    while (i > 0) {
      let randomNum = Math.floor(Math.random() * i) //create a random index number
      shuffledCards.push(cardsPile[randomNum]); //add value at this index position to shuffledCards array
      cardsPile.splice(randomNum, 1);// reduce cardsPile by that value
      i--;
    }
    this.cards = shuffledCards;

    return;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 == card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    } 
  }
  isFinished() {
    let cardPairs = this.cards.length / 2;
    if (this.pairsGuessed == cardPairs) {
      return true;
    } else {
      return false;
    }
  } 
    
}