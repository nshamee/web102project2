import React, { useState } from 'react';
import Header from './Header';
import CardList from './CardList'; 
import NextButton from './NextButton'; 
import './App.css';
import cardData from './cardData'; 

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);

  const toggleCardSide = () => {
    setShowQuestion(!showQuestion);
  };

  const showNextCard = () => {
    const randomIndex = Math.floor(Math.random() * cardData.length);
    
    if (randomIndex !== currentCardIndex) {
      setCurrentCardIndex(randomIndex);
      setShowQuestion(true);
    } else {
      showNextCard();
    }
  };

  return (
    <div className="App">
      <Header />
      <CardList
        cardData={cardData} // Pass cardData to CardList
        currentCardIndex={currentCardIndex}
        showQuestion={showQuestion}
        toggleCardSide={toggleCardSide}
      />
      <NextButton showNextCard={showNextCard} />
    </div>
  );
}

export default App;
