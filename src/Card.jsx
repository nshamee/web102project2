import React from 'react';

const Card = ({ card, showQuestion, toggleCardSide }) => {
  return (
    <div className="card">
      <div className={`card-content ${showQuestion ? 'question' : 'answer'}`}>
        {showQuestion ? card.question : card.answer}
      </div>
      <button onClick={toggleCardSide}>
        Show {showQuestion ? 'Answer' : 'Question'}
      </button>
    </div>
  );
};

export default Card;